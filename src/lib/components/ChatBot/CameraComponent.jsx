import React, { useState, useRef } from 'react';

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import {
    CAMERA_COMPONENT_BUTTON_MAIN_CLASS,
    CAMERA_COMPONENT_BUTTON_SUB_CLASS,
    CAMERA_COMPONENT_DIV_1_CLASS,
    CAMERA_COMPONENT_DIV_2_CLASS,
    CAMERA_COMPONENT_PHOTO_CLASS,
    CAMERA_COMPONENT_VIDEO_CANVAS_CLASS,
    CAMERA_COMPONENT_VIDEO_CLASS,
    CAMERA_COMPONENT_VIDEO_CONTAINER_CLASS,
} from '../../constants/class_name_constants.jsx';
import {
    dispatchWaitAnimation,
    addMessageToConversation,
    setChatbotErrorMsg,
} from './chatbot.general.functions.jsx';
import { checkConversationIdChange } from './chatbot.db.operations.jsx';

import './CameraComponent.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faArrowUp,
//     faTimes,
//     faCamera, // Camera
//     faCameraRetro, // Icon for taking the photo
//     faExchangeAlt, // Icon for interchange
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faArrowUp, // Arrow-up: to select file + perform the upload
//     faTimes, // X: to close the component controls
//     faCamera, // Camera
//     faCameraRetro, // Icon for taking the photo
//     faExchangeAlt, // Icon for interchange
// );
const GsIcons = gs.IconsLib.GsIcons;

const dbApiService = gs.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = gs.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log = gs.loggingService.console_debug_log;
const formatCaughtError = gs.errorAndReenter.formatCaughtError;
// const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;
const toggleIdVisibility = gs.ui.toggleIdVisibility;
const ModalPopUp = gs.ModalPopUp.ModalPopUp;

const debug = false;

const extControlsToShowHide = ['user_input_submit', 'voiceMessageRecorder', 'fileUploader'];
const VIDEO_OFF = { display: 'none' }
const VIDEO_ON = { display: '' };

export const CameraComponent = ({
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    state,
    question,
}) => {
    const [facingMode, setFacingMode] = useState('environment');
    const [buttonToggle, setButtonToggle] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [cameraOn, setCameraOn] = useState(true)

    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const stream = useRef(null);
    
    const startCamera = async () => {
        try {
            stream.current = await navigator.mediaDevices.getUserMedia({ video: true });
            videoRef.current.srcObject = stream.current;
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    }

    const toggleCamera = async () => {
        setFacingMode((prevMode) => (prevMode === 'user' ? 'environment' : 'user'));
        let constraints = { video: { facingMode: { exact: facingMode } } };
        stream.current= await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream.current;
    };
    
    const stopCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
    };

    const takePhoto = () => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setPhoto(dataUrl);
    };

    const cameraOnOff = (newState) => {
        if (!newState) {
            stopCamera();
        } else {
            startCamera();
        }
        setCameraOn(newState);
    }

    const sendPhoto = async () => {
        if (!question) {
            alert('Please enter a question before upload the photo.');
            return;
        }
        if (!photo) {
            alert('Please click on the "Open Camera" icon and take a photo.');
            return;
        }
        const formData = new FormData();
        // Convert base64 to Blob before appending to formData
        const base64Response = await fetch(photo);
        const blob = await base64Response.blob();
        const fileExtension = 'jpg';
        const timestamp = new Date().toISOString().replace(/[-:.]/g, '_').slice(0, -5);
        const fileName = `image_capture_${timestamp}.${fileExtension}`;
        const fileSize = blob.size / (1024 * 1024).toFixed(2); // Size in Mb
        formData.append('file', blob, fileName);
        const options = {
            raw_body: true,
            headers: MULTIPART_FORM_DATA_HEADER
        };
        const db = new dbApiService({ url: "ai/image_to_text" });
        const query = {
            "cid": state.currentConversationId,
            question: question,
            file_name: fileName,
        }
        addMessageToConversation(question, "user", dispatch);
        addMessageToConversation(
            '```File Attachment: "' + fileName + '" (' + fileSize + ' Mb)```', "attachment",
            dispatch
        );
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
                setButtonToggle(false);
            },
            error => {
                // Hide WaitAnimation after the error
                error = formatCaughtError(error);
                if (debug) {
                    console_debug_log("FileUploader | handleUpload | ERROR:", error);
                }
                dispatchWaitAnimation(false, dispatch);
                console.error('Error upploading the file:', error);
                // setExternalErrorMsg(error.message);
                setChatbotErrorMsg(error.message, dispatch);
            }
        );
        stopCamera();
        setPhoto(null);
        setButtonToggle(false);
        toggleIdVisibility("on", extControlsToShowHide);
    };

    return (
        <div
            id={id}
            className={CAMERA_COMPONENT_DIV_1_CLASS}
        >
            <div
                className={CAMERA_COMPONENT_DIV_2_CLASS}
            >
                <button
                    onClick={() => {
                        if(buttonToggle) {
                            stopCamera();
                            setPhoto(null);
                        } else {
                            startCamera();
                        }
                        setButtonToggle(buttonToggle ? false : true);
                        toggleIdVisibility((buttonToggle ? "on" : "off"), extControlsToShowHide);
                    }}
                    className={CAMERA_COMPONENT_BUTTON_MAIN_CLASS}
                    title={buttonToggle ? 'Close' : 'Start Camera'}
                >
                    {/* <FontAwesomeIcon icon={buttonToggle ? 'times' : 'camera'} size='lg' /> */}
                    <GsIcons
                        icon={buttonToggle ? 'times' : 'camera'}
                        // size='lg'
                        size='m'
                        additionalIconsFn={iconsLibAiExtras}
                    />
                </button>
                {buttonToggle && (
                    <>
                        <button
                            onClick={() => cameraOnOff(!cameraOn)}
                            className={CAMERA_COMPONENT_BUTTON_SUB_CLASS}
                            title='Start Camera'
                        >
                            {/* <FontAwesomeIcon icon='camera-retro' size='lg'/> */}
                            <GsIcons
                                icon='camera-retro'
                                size='lg'
                                additionalIconsFn={iconsLibAiExtras}
                            />
                        </button>
                        <button
                            onClick={sendPhoto}
                            className={CAMERA_COMPONENT_BUTTON_SUB_CLASS}
                            title='Send Photo'
                        >
                            {/* <FontAwesomeIcon icon='arrow-up' size='lg'/> */}
                            <GsIcons
                                icon='arrow-up'
                                size='lg'
                                additionalIconsFn={iconsLibAiExtras}
                            />
                        </button>
                        {photo && (
                            <img
                                src={photo}
                                alt="Captured"
                                className={CAMERA_COMPONENT_PHOTO_CLASS}
                                style={{ width: '30px', height: '30px' }}
                            />)
                        }
                        <div
                            className={CAMERA_COMPONENT_VIDEO_CONTAINER_CLASS}
                        >
                            {
                                (cameraOn && (
                                    <ModalPopUp
                                        closeButtonAction={() => cameraOnOff(!cameraOn)}
                                        secondButtonMessage='Change Front/Back'
                                        secondButtonAction={toggleCamera}
                                        primaryButtonMessage='Take Photo'
                                        primaryButtonAction={takePhoto}
                                        allowOnHide={false}
                                    >
                                        <video
                                            className={CAMERA_COMPONENT_VIDEO_CLASS}
                                            ref={videoRef}
                                            autoPlay
                                            playsInline
                                        />
                                        <canvas
                                            ref={canvasRef}
                                            className={CAMERA_COMPONENT_VIDEO_CANVAS_CLASS}
                                            style={photo ? VIDEO_ON : VIDEO_OFF } 
                                        />
                                    </ModalPopUp>
                                ))
                            }
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
