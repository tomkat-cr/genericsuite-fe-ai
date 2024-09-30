import React, {useState, useEffect, useRef } from 'react';
import axios from 'axios';

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import {
    VOICE_MESSAGE_RECORDER_BUTTON_CLASS,
    VOICE_MESSAGE_RECORDER_DIV_1_CLASS,
} from '../../constants/class_name_constants.jsx';
import {
    setChatbotErrorMsg,
    dispatchWaitAnimation,
} from './chatbot.general.functions.jsx';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faMicrophone,
//     faStop,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faMicrophone,
//     faStop,
// );
const GsIcons = gs.IconsLib.GsIcons;

const dbApiService = gs.dbService.dbApiService;
const MULTIPART_FORM_DATA_HEADER = gs.dbService.MULTIPART_FORM_DATA_HEADER;
const console_debug_log = gs.loggingService.console_debug_log;
const formatCaughtError = gs.errorAndReenter.formatCaughtError;
const toggleIdVisibility = gs.ui.toggleIdVisibility;
const getMediaTypeToRecord = gs.media.getMediaTypeToRecord;
const mediaSupported = gs.media.mediaSupported;
const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;

const debug = false;

const extControlsToShowHide = ['user_input', 'user_input_submit', 'fileUploader', 'cameraComponent'];

const useMicRecorder = false;
const useAxios = (process.env.REACT_APP_USE_AXIOS || "1") == "1";

export const VoiceMessageRecorder = ({
    id,
    setExternalInputMessage,
    handleUpdateSize,
    dispatch,
    sendMessage,
}) => {
    const [isRecording, setIsRecording] = useState(false);
    const [audioData, setAudioData] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const mediaRecorderRef = useRef(null);

    const startRecording = async () => {
        toggleIdVisibility("off", extControlsToShowHide);
        setIsRecording(true);
        setErrorMsg(null);
        if (useMicRecorder) {
            startMicRecording();
        } else {
            startMediaDevices();
        }
    }

    const startMicRecording = async () => {
        setErrorMsg("MicRecorder is not implemented...");

        // // npm install mic-recorder-to-mp3
        // const MicRecorder = require('mic-recorder-to-mp3');
        // const recorder = new MicRecorder({
        //     bitRate: 128
        // });
        // mediaRecorderRef.current = recorder;

        // // Start recording. Browser will request permission to use your microphone.
        // mediaRecorderRef.current.start().then(() => {
        //     // something else
        // }).catch((e) => {
        //     console.error(e);
        //     const errorMsgAux = 'We could not start recording:';
        //     console.error(errorMsg, e);
        //     setIsRecording(false);
        //     setErrorMsg(`${errorMsgAux} ${e.message}`);
        // });
    };
    
    const startMediaDevices = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const mediaType = getMediaTypeToRecord();

            if (debug) console_debug_log(`VoiceMessageRecorder | startRecording | extension: ${mediaType["extension"]}`);
            if (debug) console_debug_log("mediaSupported", mediaSupported());

            // Set the MediaRecorder options   
            const mediaRecorder = new MediaRecorder(stream, mediaType["options"]);
            mediaRecorderRef.current = mediaRecorder;

            // Handle the data available event
            const chunks = [];  
            mediaRecorder.ondataavailable = (e) => {
                chunks.push(e.data);
            };

            // Handle the stop event
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: `audio/${mediaType["extension"]}` });
                setAudioData(blob);
            };

            // Start recording
            mediaRecorder.start(1000);

        } catch (error) {
            const errorMsgAux = 'Error starting recording:';
            console.error(errorMsg, error);
            setIsRecording(false);
            setErrorMsg(`${errorMsgAux} ${error.message}`);
            toggleIdVisibility("on", extControlsToShowHide);
        }
    };

    const stopRecording = () => {
        if (useMicRecorder) {
            stopMicRecording();
        } else {
            stopMediaDevices();
        }
    };
    
    const stopMicRecording = () => {
        if (mediaRecorderRef.current) {
            setIsRecording(false);

            // Once you are done singing your best song, stop and get the mp3.
            mediaRecorderRef.current
                .stop()
                .getMp3().then(([buffer, blob]) => {
                    // do what ever you want with buffer and blob
                    setAudioData(blob);
                    // // Example: Create a mp3 file and play
                    // const file = new File(buffer, 'me-at-thevoice.mp3', {
                    //     type: blob.type,
                    //     lastModified: Date.now()
                    // });
                    // const player = new Audio(URL.createObjectURL(file));
                    // player.play();
                }).catch((e) => {
                    const errorMsgAux = 'We could not retrieve your message:';
                    console.error(errorMsg, e);
                    setIsRecording(false);
                    setErrorMsg(`${errorMsgAux} ${e.message}`);
                });
        }
    };

    const stopMediaDevices = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
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
            // Hide WaitAnimation after fetching data
            dispatchWaitAnimation(false, dispatch);
            if (debug) {
                console_debug_log('[FA] VoiceMessageRecorder is calling setExternalInputMessage', response.data);
            }
            // Send the transcript to the input text box
            setExternalInputMessage(response.data.response);
            // Restore buttons in the input text area
            toggleIdVisibility("on", extControlsToShowHide);
            // Update the size of the input text area if the handleUpdateSize function is provided.
            if (handleUpdateSize) {
                handleUpdateSize();
            }
            // Send the message if the sendMessage function is provided (automatic send functionality).
            if (sendMessage) {
                sendMessage();
            }
        } catch (errorRaw) {
            console.error(errorRaw);
            // Hide WaitAnimation after the error
            const error = errorRaw.message + (typeof errorRaw.response !== 'undefined' ?  ": " + errorRaw.response.data : '');
            // Hide WaitAnimation after the error
            dispatchWaitAnimation(false, dispatch);
            // Restore buttons in the input text area
            toggleIdVisibility("on", extControlsToShowHide);
            // Send error message to the chatbot
            console.error('[FA] Error sending voice message:', error);
            setErrorMsg(error.message);
        }
    };

    useEffect(() => {
        if (debug) {
            console_debug_log(`VoiceMessageRecorder | useEffect() of sendVoiceMessage | isRecording: ${isRecording}`);
        }
        const sendVoiceMessage = async () => {
            if (!audioData) {
                return;
            }
            // Prepare the audit to send to the API
            const formData = new FormData();
            const extension = audioData.type.split('/')[1];
            const fileName = `voiceMessage.${extension}`;
            // const appleDevice = MediaRecorder.isTypeSupported('audio/mpeg');
            const appleDevice = extension === 'mp4';
            const sourceLang = (appleDevice ? 'get_user_lang' : 'auto');
            const other = (appleDevice ? 'no_mp3_native_support' : '');
            formData.append('file', audioData, fileName);
            const options = {
                raw_body: true,
                headers: MULTIPART_FORM_DATA_HEADER
            };
            const query_params = {
                "extension": extension,
                "source_lang": sourceLang,
                "other": other,
            }
            const db = new dbApiService({ url: "ai/voice_to_text" });
            if (debug) {
                console_debug_log(`VoiceMessageRecorder | sendVoiceMessage | fileName: ${fileName}`);
            }
            // Clear previous message in the input text area
            setExternalInputMessage('');
            // Update the size of the input text area if the handleUpdateSize function is provided.
            // if (handleUpdateSize) {
            //     handleUpdateSize();
            // }
            // Clear audio data
            setAudioData(null);
            // Show WaitAnimation while fetching data
            dispatchWaitAnimation(true, dispatch);
            if (useAxios) {
                const authHeader = gs.authHeader.authHeader();
                const endpointUrl = `${process.env.REACT_APP_API_URL}/${"ai/voice_to_text"}`;
                await sendFile(endpointUrl, formData, authHeader, query_params)
            } else {
                db.getAll(query_params, formData, 'POST', options).then(
                    data => {
                        if (debug) {
                            console_debug_log("VoiceMessageRecorder | sendVoiceMessage | data:", data);
                        }
                        // Hide WaitAnimation after fetching data
                        dispatchWaitAnimation(false, dispatch);
                        if (debug) {
                            console_debug_log('VoiceMessageRecorder is calling setExternalInputMessage', data.response);
                        }
                        // Send the transcript to the input text box
                        setExternalInputMessage(data.response);
                        // Restore buttons in the input text area
                        toggleIdVisibility("on", extControlsToShowHide);
                        // Update the size of the input text area if the handleUpdateSize function is provided.
                        // if (handleUpdateSize) {
                        //     handleUpdateSize();
                        // }
                        // Send the message if the sendMessage function is provided (automatic send functionality).
                        if (sendMessage) {
                            sendMessage();
                        }
                    },
                    error => {
                        error = formatCaughtError(error);
                        if (debug) {
                            console_debug_log("VoiceMessageRecorder | sendVoiceMessage | ERROR:", error);
                        }
                        // Hide WaitAnimation after the error
                        dispatchWaitAnimation(false, dispatch);
                        // Restore buttons in the input text area
                        toggleIdVisibility("on", extControlsToShowHide);
                        // Send error message to the chatbot
                        console.error('Error sending voice message:', error);
                        setErrorMsg(error.message);
                    }
                );
            }
        };
        if (!isRecording && audioData) {
            sendVoiceMessage();
        }
    }, [isRecording, audioData, setExternalInputMessage, handleUpdateSize, dispatch, sendMessage]);

    useEffect(() => {
        if (errorMsg != null) {
            setChatbotErrorMsg(`Error processing the voice message: ${errorMsg}`, dispatch);
        }
    }, [errorMsg, dispatch]);

    return (
        <div
            id={id}
            // className="voice-recorder"
            className={VOICE_MESSAGE_RECORDER_DIV_1_CLASS}
        >
            <button
                onClick={isRecording ? stopRecording : startRecording}
                className={VOICE_MESSAGE_RECORDER_BUTTON_CLASS}
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
            >
                {/* <FontAwesomeIcon icon={isRecording ? 'stop' : 'microphone'} size='lg' /> */}
                <GsIcons
                    icon={isRecording ? 'stop' : 'microphone'}
                    // size='lg'
                    size='sm'
                    additionalIconsFn={iconsLibAiExtras}
                />
            </button>
        </div>
    );
};
