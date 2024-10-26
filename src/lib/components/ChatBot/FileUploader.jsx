import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import {
    FILE_UPLOADER_BASE_BUTTON_CLASS,
    FILE_UPLOADER_BUTTON_CLASS,
    FILE_UPLOADER_DIV_1_CLASS,
    FILE_UPLOADER_DIV_2_CLASS,
    FILE_UPLOADER_INPUT_AREA_CONTAINER_CLASS,
    FILE_UPLOADER_INPUT_AREA_INPUT_CLASS,
} from '../../constants/class_name_constants.jsx';
import {
    setChatbotErrorMsg,
    addMessageToConversation,
    dispatchWaitAnimation,
} from './chatbot.general.functions.jsx';
import { checkConversationIdChange } from './chatbot.db.operations.jsx';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faArrowUp,
//     faTimes,
//     faPaperclip, // Added clip icon
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faArrowUp, // Select file + Upload
//     faTimes, // Close
//     faPaperclip, // Added clip icon
// );
const GsIcons = gs.IconsLib.GsIcons;

const dbApiService = gs.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = gs.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log = gs.loggingService.console_debug_log;
const formatCaughtError = gs.errorAndReenter.formatCaughtError;
const toggleIdVisibility = gs.ui.toggleIdVisibility;
// const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;

const debug = false;

const useAxios = (process.env.REACT_APP_USE_AXIOS || "1") == "1";

export function FileUploader({
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    state,
    question,
    fileTypeFilter,
}) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [buttonToggle, setButtonToggle] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (fileTypeFilter) {
                // "image/*"
                if (file.type.startsWith('image/')) {
                    setSelectedFile(file);
                } else {
                    alert('Please selecct a valid image file.');
                }
            } else {
                setSelectedFile(file);
            }
        }
    };

    const sendFile = async (url, formData, authHeader, queryParams) => {
        const headers = Object.assign(
            { 
                'Access-Control-Allow-Origin': '*',
            }, 
            authHeader
        );
        try {
            const response = await axios.post(url, formData, {
                headers: headers,
                params: queryParams,
            });
            dispatchWaitAnimation(false, dispatch);
            checkConversationIdChange(state, dispatch, response.data).then(
                () => {
                    // Current conversation updated successfully
                },
                error => {
                    error = formatCaughtError(error);
                    setChatbotErrorMsg(error.message, dispatch);
                }
            );
            setSelectedFile(null);
            setButtonToggle(false);
        } catch (errorRaw) {
            console.error(errorRaw);
            // Hide WaitAnimation after the error
            const error = errorRaw.message + (typeof errorRaw.response !== 'undefined' ?  ": " + errorRaw.response.data : '');
            console.error('Error uploading the file:', error);
            setChatbotErrorMsg(error, dispatch);
            dispatchWaitAnimation(false, dispatch);
        }
    };

    const handleUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            const fileSize = (selectedFile.size / (1024 * 1024)).toFixed(2); // Mb
            formData.append('file', selectedFile, selectedFile.name);
            const options = {
                raw_body: true,
                headers: MULTIPART_FORM_DATA_HEADER
            };
            const query = {
                "cid": state.currentConversationId,
                question: question,
                // image_extension: fileExtension,
                file_name: selectedFile.name,
            }
            addMessageToConversation(question, "user", dispatch)
            addMessageToConversation(
                '```File Attachment: "' + selectedFile.name + '" (' + fileSize + ' Mb)```', "attachment",
                dispatch
            )
            // Empty external input message
            setExternalInputMessage("");
            // Update the size of the input text area if the handleUpdateSize function is provided.
            if (handleUpdateSize) {
                handleUpdateSize();
            }
            // Show WaitAnimation while fetching data
            dispatchWaitAnimation(true, dispatch);
            if (debug) {
                console_debug_log(`FileUploader | selectedFile:`, selectedFile);
            }
            if (useAxios) {
                const authHeader = gs.authHeader.authHeader();
                const endpointUrl = `${process.env.REACT_APP_API_URL}/${"ai/image_to_text"}`;
                await sendFile(endpointUrl, formData, authHeader, query)
            } else {
                const db = new dbApiService({ url: "ai/image_to_text" });
                db.getAll(query, formData, 'POST', options).then(
                    data => {
                        if (debug) {
                            console_debug_log("FileUploader | handleUpload | data:", data);
                        }
                        dispatchWaitAnimation(false, dispatch);
                        if (debug) {
                            console_debug_log(`FileUploader is calling checkConversationIdChange("${data}")`);
                        }
                        // addMessageToConversation(data.response, "assistant", dispatch);
                        checkConversationIdChange(state, dispatch, data).then(
                            () => {
                                // Current conversation updated successfully
                            },
                            error => {
                                error = formatCaughtError(error);
                                if (debug) {
                                    console_debug_log("FileUploader | checkConversationIdChange | ERROR:", error);
                                }
                                setChatbotErrorMsg(error.message, dispatch);
                            }
                        );
                        setSelectedFile(null);
                        setButtonToggle(false);
                    },
                    errorRaw => {
                        // Hide WaitAnimation after the error
                        const error = formatCaughtError(errorRaw);
                        if (debug) {
                            console_debug_log(">>--> FileUploader | handleUpload | errorRaw:", errorRaw);
                        }
                        dispatchWaitAnimation(false, dispatch);
                        console.error('Error uploading the file:', error);
                        // setExternalErrorMsg(error.message);
                        setChatbotErrorMsg(error.message, dispatch);
                        if (debug) {
                            console_debug_log("FileUploader | after setExternalErrorMsg...");
                        }
                    }
                );
            }
        } else {
            alert('Please select a file to upload.');
        }
    };

    useEffect(() => {
        const extControlsToShowHide = ['user_input_submit', 'voiceMessageRecorder', 'cameraComponent'];
        toggleIdVisibility((buttonToggle ? "off" : "on"), extControlsToShowHide);
    }, [buttonToggle]);

    return (
        <div
            id={id}
            className={FILE_UPLOADER_DIV_1_CLASS}
        >
            <div
                className={FILE_UPLOADER_DIV_2_CLASS}
            >
                <button
                    onClick={() => setButtonToggle(buttonToggle ? false : true)}
                    className={FILE_UPLOADER_BUTTON_CLASS}
                    title={buttonToggle ? 'Close' : 'Select File'}
                >
                    {/* <FontAwesomeIcon icon={buttonToggle ? 'times' : 'paperclip'} size='lg' /> */}
                    <GsIcons
                        icon={buttonToggle ? 'times' : 'paperclip'}
                        // size='lg'
                        size='m'
                        additionalIconsFn={iconsLibAiExtras}
                    />
                </button>
                {buttonToggle && (
                    <div
                        className={FILE_UPLOADER_INPUT_AREA_CONTAINER_CLASS}
                    >
                        <input
                            type="file"
                            accept={fileTypeFilter ? fileTypeFilter : "*"}
                            onChange={handleFileChange}
                            className={FILE_UPLOADER_INPUT_AREA_INPUT_CLASS}
                        />
                        <button
                            onClick={handleUpload}
                            // className={`${BUTTON_LISTING_CLASS}`}
                            className={FILE_UPLOADER_BASE_BUTTON_CLASS}
                            title='Submit'
                        >
                            {/* <FontAwesomeIcon icon='arrow-up' size='lg'/> */}
                            <GsIcons
                                icon='arrow-up'
                                size='lg'
                                additionalIconsFn={iconsLibAiExtras}
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
