import React, { useState, useEffect } from 'react';

const console_debug_log = require("genericsuite").loggingService.console_debug_log;
const usePlainFetch = require("genericsuite").responseHandlersService.usePlainFetch;
const growUpTextArea = require("genericsuite").ui.growUpTextArea;
const resetTextArea = require("genericsuite").ui.resetTextArea;
const toggleIdVisibility = require("genericsuite").ui.toggleIdVisibility;
const formatCaughtError = require("genericsuite").errorAndReenter.formatCaughtError;
const WaitAnimation = require("genericsuite").waitAnimationUtility.WaitAnimation;
const getFilenameFromContentDisposition = require("genericsuite").blobFilesUtilities.getFilenameFromContentDisposition;
const responseHasFile = require("genericsuite").blobFilesUtilities.responseHasFile;
const BUTTON_LISTING_CLASS = require("genericsuite").classNameConstants.BUTTON_LISTING_CLASS;
// const INPUT_FLEXIBLE_CLASS = require("genericsuite").classNameConstants.INPUT_FLEXIBLE_CLASS;

import { VoiceMessageRecorder } from './VoiceMessageRecorder.jsx';
import { FileUploader } from './FileUploader.jsx';
import { CameraComponent } from './CameraComponent.jsx';

import {
    handleCancelProcessing,
    sendMessageToBot,
    checkConversationIdChange,
} from "./chatbot.db.operations.jsx";

import {
    // setChatbotInputMessage,
    setChatbotErrorMsg,
} from './chatbot.general.functions.jsx';

/*
Warning: Failed prop type: Invalid prop `size` of value `m` supplied to `FontAwesomeIcon`,
expected one of ["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].
*/ 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fontawesome from "@fortawesome/fontawesome";
import {
    faGreaterThan,
    faStop,
} from "@fortawesome/fontawesome-free-solid";
fontawesome.library.add(
    faGreaterThan,
    faStop,
);

const debug = false;

const userInputViewportHeight = 80;
/* <UserInput>.userInputViewportHeight must be the same as ".conversation-block.height" in FynBot.css */
/* 81 for 81vh, 78 for 78vh, an so on */
const userInputMaxOffsetHeight = 200;

export const UserInput = ({
    dispatch,
    state,
    userQuestion, // state.inputMessage
}) => {
    const [inputMessage, setInputMessage] = useState(userQuestion);
    const [updateSize, setUpdateSize] = useState(false);

    useEffect(() => {
        setInputMessage(state.inputMessage);
    }, [state.inputMessage]);

    useEffect(() => {
        // Adjust text area size
        resetTextArea("user_input", "conversation-block", userInputViewportHeight, userInputMaxOffsetHeight);
    }, [updateSize]);

    // Function to handle adjust text area size on input change from external component
    const handleUpdateSize = () => {
        setUpdateSize(!updateSize)
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        /* IMPORTANT:
           ONLY one call to a useState() is allowed when external component
           calls a internal function or useState.
           THE SOLUTION IS: pass the various function or useState to the external component
           and call them one after another from it.
        */
        if (typeof e === "string") {
            setInputMessage(e);
            // setExternalInputMessage(e); // Update the external input message
        } else {
            if (debug) {
                console_debug_log(`InputBlock | handleInputChange: "${e}"`);
            }
            setInputMessage(e.target.value);
            // setExternalInputMessage(e.target.value); // Update the external input message
        }
        // setUpdateSize(!updateSize);
    };

    // Function to handle sending a message
    const sendMessage = async (newInputMessage = null) => {
        const extControlsToShowHide = ['fileUploader', 'voiceMessageRecorder', 'cameraComponent'];
        const botReplyDebug = true;
        if (newInputMessage === null) {
            newInputMessage = inputMessage;
        }
        if (typeof newInputMessage !== "undefined" && newInputMessage !== null && newInputMessage.trim() !== "") {
            // Dispatch the message to the chat
            const userMessage = { content: newInputMessage, role: 'user' }; // Adjust structure as needed
            dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
            // // Set external (global) input message [Deprecated]
                // setChatbotInputMessage(newInputMessage, dispatch);
            // Clear the user input
            setInputMessage('');
            // Adjust text area size
            handleUpdateSize();
            // Hide buttons other than the stop
            toggleIdVisibility(("off"), extControlsToShowHide);
            // Send the message to the bot and get the response
            const botReply = await sendMessageToBot(newInputMessage, state, dispatch);
            if (botReply.ok) {
                let continueProcessing = true;
                if (!usePlainFetch) {
                    const headers = botReply.response.headers;
                    if (botReplyDebug) console_debug_log('|||| botReply:', botReply)
                    if (responseHasFile(headers)) {
                        if (debug) console_debug_log('|||| OCTET-STREAM | botReply.response.file:', botReply.response.file);
                        const fileUrl = botReply.response.file;
                        const filename = getFilenameFromContentDisposition(headers);
                        const botMessage = { content: botReply.response.response, role: 'assistant', attachment_url: fileUrl, filename: filename };
                        dispatch({ type: 'ADD_MESSAGE', payload: botMessage });
                        continueProcessing = false;
                    }
                }
                if (continueProcessing) {
                    // Add the response to the conversation...
                    if (botReply.response.response) {
                        const botMessage = { content: botReply.response.response, role: 'assistant' };
                        dispatch({ type: 'ADD_MESSAGE', payload: botMessage });
                    }
                    // Read current conversation from the database to refresh the chat space
                    checkConversationIdChange(state, dispatch, botReply.response).then(
                        () => {
                            // Current conversation updated sucssesfuly
                        },
                        error => {
                            error = formatCaughtError(error);
                            console.error('>> Error updating current conversation:', botReply.errorMessage);
                            setChatbotErrorMsg(error.message, dispatch);
                        }
                    );
                }
            } else {
                console.error('>> Error communicating with the bot:', botReply.errorMessage);
                setChatbotErrorMsg(botReply.errorMessage, dispatch);
            }
            toggleIdVisibility(("on"), extControlsToShowHide);
        }
    };

    return (
        <div
            className="input-area"
        >
            <textarea
                name="user_input"
                id="user_input"
                value={inputMessage}
                // TODO: remove INPUT_FLEXIBLE_CLASS and put the css in FynBot.css
                // className={`${INPUT_FLEXIBLE_CLASS} mr-2`}
                className="p-2"
                aria-label="Message FynBot…"
                rows="1" 
                onChange={handleInputChange}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                        // setInputMessage(event.target.value);
                        sendMessage();
                    }
                }}
                disabled={state && state.isApiProcessing}
            />
            <div>
                <button
                    name="user_input_submit"
                    id="user_input_submit"
                    onClick={() => (state && state.isApiProcessing ? handleCancelProcessing(dispatch) : sendMessage())}
                    className={`${BUTTON_LISTING_CLASS} mr-2`}
                    title={state &&  state.isApiProcessing ? 'Stop Processing' : 'Chat with FynBot'}
                >
                    <FontAwesomeIcon icon={state && state.isApiProcessing ? 'stop' : 'greater-than'} size='lg'/>
                </button>
            </div>
            <VoiceMessageRecorder
                id='voiceMessageRecorder'
                dispatch={dispatch}
                // sendMessage={sendMessage}
                setExternalInputMessage={handleInputChange}
                handleUpdateSize={handleUpdateSize}
            />
            <FileUploader
                id='fileUploader'
                question={inputMessage}
                setExternalInputMessage={handleInputChange}
                handleUpdateSize={handleUpdateSize}
                dispatch={dispatch}
                state={state}
            />
            <CameraComponent
                id='cameraComponent'
                question={inputMessage}
                setExternalInputMessage={handleInputChange}
                handleUpdateSize={handleUpdateSize}
                dispatch={dispatch}
                state={state}
            />
            {state && state.isApiProcessing && 
                <div className="ml-2 flex items-center"><WaitAnimation /></div>
            }
            {
                growUpTextArea("user_input", "conversation-block", userInputViewportHeight, userInputMaxOffsetHeight)
            }
        </div>
    )
}
    
