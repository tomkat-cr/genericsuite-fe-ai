import React, { useState, useRef } from 'react';

const dbApiService = require("genericsuite").dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = require("genericsuite").dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log = require("genericsuite").loggingService.console_debug_log;
const formatCaughtError = require("genericsuite").errorAndReenter.formatCaughtError;
const BUTTON_LISTING_CLASS = require("genericsuite").classNameConstants.BUTTON_LISTING_CLASS;
const toggleIdVisibility = require("genericsuite").ui.toggleIdVisibility;
const ModalPopUp = require("genericsuite").ModalPopUp.ModalPopUp;

import {
    dispatchWaitAnimation,
    addMessageToConversation,
    setChatbotErrorMsg,
} from './chatbot.general.functions.jsx';
import { checkConversationIdChange } from './chatbot.db.operations.jsx';

import './CameraComponent.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
    faArrowUp,
    faTimes,
    faCamera, // Camera
    faCameraRetro, // Icon for taking the photo
    faExchangeAlt, // Icon for interchange
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(
    faArrowUp, // Arrow-up: to select file + perform the upload
    faTimes, // X: to close the component controls
    faCamera, // Camera
    faCameraRetro, // Icon for taking the photo
    faExchangeAlt, // Icon for interchange
);

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
            className="camera-capture"
        >
            <div
                className='min-w-full w-full flex items-center mr-3'
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
                    className={`${BUTTON_LISTING_CLASS} mr-2`}
                    title={buttonToggle ? 'Close' : 'Start Camera'}
                >
                    <FontAwesomeIcon icon={buttonToggle ? 'times' : 'camera'} size='lg' />
                </button>
                {buttonToggle && (
                    <>
                        <button
                            onClick={() => cameraOnOff(!cameraOn)}
                            className={`${BUTTON_LISTING_CLASS} mr-2`}
                            title='Start Camera'
                        >
                            <FontAwesomeIcon icon='camera-retro' size='lg'/>
                        </button>
                        <button
                            onClick={sendPhoto}
                            className={`${BUTTON_LISTING_CLASS} mr-2`}
                            title='Send Photo'
                        >
                            <FontAwesomeIcon icon='arrow-up' size='lg'/>
                        </button>
                        {photo && (
                            <img
                                src={photo}
                                alt="Captured"
                                className='mr-2'
                                style={{ width: '30px', height: '30px' }}
                            />)
                        }
                        <div className="video-container">
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
                                            ref={videoRef}
                                            autoPlay
                                            playsInline
                                        />
                                        <canvas
                                            ref={canvasRef}
                                            className='mt-2 w-full'
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
