import React, {useState, useEffect, useRef } from 'react';
  
import {
    dbApiService,
    MULTIPART_FORM_DATA_HEADER,
} from "genericsuite/src/_services";
import { console_debug_log } from 'genericsuite/src/_services/logging.service';
import {
    formatCaughtError
} from 'genericsuite/src/_helpers/error-and-reenter';
import { toggleIdVisibility } from 'genericsuite/src/_helpers';

import {
    setChatbotErrorMsg,
    dispatchWaitAnimation,
} from './chatbot.general.functions';
import {
    getMediaTypeToRecord,
    mediaSupported,
} from 'genericsuite/src/_helpers/media';

import { 
    BUTTON_LISTING_CLASS,
} from 'genericsuite/src/_constants/class_name_constants';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
    faMicrophone,
    faStop,
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(
    faMicrophone,
    faStop,
);

const debug = false;

const extControlsToShowHide = ['user_input', 'user_input_submit', 'fileUploader', 'cameraComponent'];

const useMicRecorder = false;

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
        //     const errorMsg = 'We could not start recording:';
        //     console.error(errorMsg, e);
        //     setIsRecording(false);
        //     setErrorMsg(`${errorMsg} ${e.message}`);
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
            const errorMsg = 'Error starting recording:';
            console.error(errorMsg, error);
            setIsRecording(false);
            setErrorMsg(`${errorMsg} ${error.message}`);
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
                    const errorMsg = 'We could not retrieve your message:';
                    console.error(errorMsg, e);
                    setIsRecording(false);
                    setErrorMsg(`${errorMsg} ${e.message}`);
                });
        }
    };

    const stopMediaDevices = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    useEffect(() => {
        if (debug) {
            console_debug_log(`VoiceMessageRecorder | useEffect() of sendVoiceMessage | isRecording: ${isRecording}`);
        }
        const sendVoiceMessage = () => {
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
            formData.append('audio', audioData, fileName);
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
            if (handleUpdateSize) {
                handleUpdateSize();
            }
            // Clear audio data
            setAudioData(null);
            // Show WaitAnimation while fetching data
            dispatchWaitAnimation(true, dispatch);
            db.getAll(query_params, formData, 'POST', options).then(
                data => {
                    if (debug) {
                        console_debug_log("VoiceMessageRecorder | sendVoiceMessage | data:", data);
                    }
                    // Hide WaitAnimation after fetching data
                    dispatchWaitAnimation(false, dispatch);
                    if (debug) {
                        console_debug_log(`VoiceMessageRecorder is calling setExternalInputMessage("${data.response}")`);
                    }
                    // Send the transcript to the input text box
                    setExternalInputMessage(data.response);
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
            className="voice-recorder"
        >
            <button
                onClick={isRecording ? stopRecording : startRecording}
                className={`${BUTTON_LISTING_CLASS} mr-2`}
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
            >
                <FontAwesomeIcon icon={isRecording ? 'stop' : 'microphone'} size='lg' />
            </button>
        </div>
    );
};
