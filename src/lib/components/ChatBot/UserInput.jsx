import React, { useState, useEffect } from 'react';

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import { VoiceMessageRecorder } from './VoiceMessageRecorder.jsx';
import { FileUploader } from './FileUploader.jsx';
import { CameraComponent } from './CameraComponent.jsx';

import {
    CHATBOT_INPUT_AREA_DIV_1_CLASS,
    CHATBOT_INPUT_AREA_BUTTON_CLASS,
    CHATBOT_INPUT_AREA_WAIT_ANIMATION_CLASS,
    CHATBOT_INPUT_AREA_TEXTAREA_CLASS,
    CHATBOT_INPUT_AREA_DIV_2_CLASS,
    CHATBOT_INPUT_AREA_DIV_3_CLASS,
    CHATBOT_INPUT_AREA_DIV_4_CLASS,
    CHATBOT_INPUT_AREA_DIV_5_CLASS,
    CHATBOT_INPUT_AREA_DIV_62_CLASS,
    CHATBOT_INPUT_AREA_DIV_61_CLASS,
    CHATBOT_INPUT_AREA_TEXTAREA_DM_CLASS,
    CHATBOT_INPUT_AREA_TEXTAREA_LM_CLASS,
} from '../../constants/class_name_constants.jsx';

import {
    handleCancelProcessing,
    sendMessageToBot,
    checkConversationIdChange,
} from "./chatbot.db.operations.jsx";

import {
    setChatbotErrorMsg,
} from './chatbot.general.functions.jsx';

/*
Warning: Failed prop type: Invalid prop `size` of value `m` supplied to `FontAwesomeIcon`,
expected one of ["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].
*/ 

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faGreaterThan,
//     faStop,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faGreaterThan,
//     faStop,
// );
const GsIcons = gs.IconsLib.GsIcons;

const useAppContext = gs.AppContext.useAppContext;
const resizeManager = gs.ui.resizeManager;

const console_debug_log = gs.loggingService.console_debug_log;

const usePlainFetch = gs.responseHandlersService.usePlainFetch;
const growUpTextArea = gs.ui.growUpTextArea;
const resetTextArea = gs.ui.resetTextArea;
const toggleIdVisibility = gs.ui.toggleIdVisibility;
const formatCaughtError = gs.errorAndReenter.formatCaughtError;
const WaitAnimation = gs.waitAnimationUtility.WaitAnimation;
const getFilenameFromContentDisposition = gs.blobFilesUtilities.getFilenameFromContentDisposition;
const responseHasFile = gs.blobFilesUtilities.responseHasFile;

// const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;

const debug = false;

const useResetTextArea = false;
// const userInputViewportHeight = 80;
const userInputViewportHeight = 66;
/* <UserInput>.userInputViewportHeight must be the same as ".conversation-block.height" in ChatBot.css */
/* 81 for 81vh, 78 for 78vh, an so on */
const userInputMaxOffsetHeight = 200;

export const UserInput = ({
    dispatch,
    state,
    userQuestion, // state.inputMessage
}) => {
    const { theme, isWide, isDarkMode, sideMenu } = useAppContext();
    const [inputMessage, setInputMessage] = useState(userQuestion);
    const [updateSize, setUpdateSize] = useState(false);

    const setConversationBlockHeight = () => {
        // Get the conversation block element
        const conversationBlockObj = document.getElementById('conversation-block');
        // Get the chatbot main container element
        const chatbotContainerObj = document.getElementById('chatbot-container');
        // Get the input area container element
        const chatbotInputAreaObj = document.getElementById('chatbot-input-area');
        // Assign the height of the main container to the chatbot container
        if (chatbotInputAreaObj) {
            conversationBlockObj.style.height = `${chatbotContainerObj.offsetHeight - chatbotInputAreaObj.offsetHeight - 10}px`;
            if (debug) {
                console_debug_log("conversationBlockObj.style.height:", conversationBlockObj.style.height);
            }
        }
    }

    const getWindowMaxHeight = () => {
        const windowHeight = (window.screen.availHeight - (window.outerHeight - window.innerHeight));
        return windowHeight;
    }

    const setChatBotContainerHeight = () => {
        // Get the chatbot main container element
        const chatbotContainerObj = document.getElementById('chatbot-container');
        if (!chatbotContainerObj || typeof chatbotContainerObj["parentElement"] === "undefined") {
            return;
        }
        // Get the <main /> tag element
        const mainContainerObj = chatbotContainerObj.parentElement;
        const mainContainerHeight = mainContainerObj ? (mainContainerObj.id === "root" ? getWindowMaxHeight() : mainContainerObj.offsetHeight) : getWindowMaxHeight();
        // Get the <footer /> html tag element
        const footerObj = document.getElementsByTagName('footer');
        // const footerHeight = (sideMenu ? (footerObj && footerObj[0] ? footerObj[0].offsetHeight : 0) : 5);
        const footerHeight = 5;
        // Assign the height of the chatbot container to the main container minus the footer height
        chatbotContainerObj.style.height = `${mainContainerHeight - footerHeight}px`;
        if (debug) {
            console_debug_log("|| mainContainerObj:", mainContainerObj, 'mainContainerHeight:', mainContainerHeight, 'chatbotContainerObj:', chatbotContainerObj, 'chatbotContainerObj.offsetHeight:', chatbotContainerObj ? chatbotContainerObj.offsetHeight : -111);
            console_debug_log("footerObj:", footerObj, 'footerHeight:', footerHeight);
            console_debug_log("NEW chatbotContainerObj.style.height (offsetHeight):", chatbotContainerObj ? chatbotContainerObj.offsetHeight : -111);
        }
    }

    const setTextAreaHeight = () => {
        // Adjust text area size
        if (useResetTextArea) {
            resetTextArea("user_input", "conversation-block", userInputViewportHeight, userInputMaxOffsetHeight);
        } else {
            const user_input = document.getElementById("user_input");
            if (user_input) {
                user_input.style.height = 'auto'
                user_input.style.height = `${Math.min(user_input.scrollHeight, userInputMaxOffsetHeight)}px`
            }
        }
    }
    
    const resizeAll = () => {
        setChatBotContainerHeight();
        setTextAreaHeight();
        setConversationBlockHeight();
    }

    useEffect(() => {
        resizeAll();
    }, []);

    useEffect(() => {
        const resizer = resizeManager(() => {
            resizeAll();
        })
        resizer.addListener();
        return () => resizer.removeListener();
    }, [])

    useEffect(() => {
        setInputMessage(state.inputMessage);
    }, [state.inputMessage]);

    useEffect(() => {
        setTextAreaHeight();
    }, [updateSize, inputMessage]);

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
        } else {
            if (debug) {
                console_debug_log(`InputBlock | handleInputChange: "${e}"`);
            }
            setInputMessage(e.target.value);
        }
    };

    // Function to handle sending a message
    const sendMessage = async (newInputMessage = null) => {
        const extControlsToShowHide = ['fileUploader', 'voiceMessageRecorder', 'cameraComponent'];
        const botReplyDebug = false;
        if (newInputMessage === null) {
            newInputMessage = inputMessage;
        }
        if (typeof newInputMessage !== "undefined" && newInputMessage !== null && newInputMessage.trim() !== "") {
            // Dispatch the message to the chat
            const userMessage = { content: newInputMessage, role: 'user' }; // Adjust structure as needed
            dispatch({ type: 'ADD_MESSAGE', payload: userMessage });
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
            id="chatbot-input-area"
            className={`${CHATBOT_INPUT_AREA_DIV_1_CLASS} ${theme.background}`}
        >
            <div
                className={CHATBOT_INPUT_AREA_DIV_2_CLASS}
            >
                <div
                    className={CHATBOT_INPUT_AREA_DIV_3_CLASS}
                >
                    <div
                        className={CHATBOT_INPUT_AREA_DIV_4_CLASS}
                    >
                        <div
                            className={CHATBOT_INPUT_AREA_DIV_5_CLASS}
                        >
                            <div
                                className={CHATBOT_INPUT_AREA_DIV_61_CLASS}
                            />
                            <div
                                className={CHATBOT_INPUT_AREA_DIV_62_CLASS}
                            >
                                <textarea
                                    name="user_input"
                                    id="user_input"
                                    value={inputMessage}
                                    className={`${CHATBOT_INPUT_AREA_TEXTAREA_CLASS} ${theme.input} ${isDarkMode ? CHATBOT_INPUT_AREA_TEXTAREA_DM_CLASS : CHATBOT_INPUT_AREA_TEXTAREA_LM_CLASS}`}
                                    aria-label="Message AI Assistant..."
                                    rows="1" 
                                    onChange={handleInputChange}
                                    // onKeyDown={(event) => {
                                    //     if (event.key === 'Enter') {
                                    //         // setInputMessage(event.target.value);
                                    //         sendMessage();
                                    //     }
                                    // }}
                                    disabled={state && state.isApiProcessing}
                                />
                                <button
                                    name="user_input_submit"
                                    id="user_input_submit"
                                    onClick={() => (state && state.isApiProcessing ? handleCancelProcessing(dispatch) : sendMessage())}
                                    className={CHATBOT_INPUT_AREA_BUTTON_CLASS}
                                    title={state &&  state.isApiProcessing ? 'Stop Processing' : 'Chat with AI Assistant'}
                                >
                                    {/* <FontAwesomeIcon icon={state && state.isApiProcessing ? 'stop' : 'greater-than'} size='lg'/> */}
                                    <GsIcons
                                        // icon={state && state.isApiProcessing ? 'stop' : 'greater-than'}
                                        icon={state && state.isApiProcessing ? 'stop' : 'arrow-up'}
                                        size='lg'
                                        additionalIconsFn={iconsLibAiExtras}
                                    />
                                </button>
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
                                    // fileTypeFilter="image/*"
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
                                    <div className={CHATBOT_INPUT_AREA_WAIT_ANIMATION_CLASS}><WaitAnimation /></div>
                                }
                                {
                                    (useResetTextArea ?
                                        growUpTextArea("user_input", "conversation-block", userInputViewportHeight, userInputMaxOffsetHeight)
                                            :
                                        resizeAll()
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
