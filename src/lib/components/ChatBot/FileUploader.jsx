import React, { useEffect, useState } from 'react';

import * as gs from "genericsuite";

const dbApiService = gs.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = gs.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log = gs.loggingService.console_debug_log;
const formatCaughtError = gs.errorAndReenter.formatCaughtError;
const toggleIdVisibility = gs.ui.toggleIdVisibility;
const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;

import {
    setChatbotErrorMsg,
    addMessageToConversation,
    dispatchWaitAnimation,
} from './chatbot.general.functions.jsx';
import { checkConversationIdChange } from './chatbot.db.operations.jsx';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
    faArrowUp,
    faTimes,
    faPaperclip, // Added clip icon
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(
    faArrowUp, // Select file + Upload
    faTimes, // Close
    faPaperclip, // Added clip icon
);

const debug = false;

export function FileUploader({
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    state,
    question,
}) {
    const [selectedFile, setSelectedFile] = useState(null);
    const [buttonToggle, setButtonToggle] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
        } else {
            alert('Por favor, seleccione un archivo de imagen válido.');
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
            const db = new dbApiService({ url: "ai/image_to_text" });
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
                            // Current conversation updated sucssesfuly
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
                    console.error('Error upploading the file:', error);
                    // setExternalErrorMsg(error.message);
                    setChatbotErrorMsg(error.message, dispatch);
                    if (debug) {
                        console_debug_log("FileUploader | after setExternalErrorMsg...");
                    }
                }
            );
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
            className="file-uploader"
        >
            <div
                className="flex items-center"
            >
                <button
                    onClick={() => setButtonToggle(buttonToggle ? false : true)}
                    className={`${BUTTON_LISTING_CLASS} mr-2`}
                    title={buttonToggle ? 'Close' : 'Select File'}
                >
                    <FontAwesomeIcon icon={buttonToggle ? 'times' : 'paperclip'} size='lg' />
                </button>
                {buttonToggle && (
                    <div className='flex items-center'>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className='p-0 m-0'
                        />
                        <button
                            onClick={handleUpload}
                            className={`${BUTTON_LISTING_CLASS}`}
                            title='Submit'
                        >
                            <FontAwesomeIcon icon='arrow-up' size='lg'/>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
