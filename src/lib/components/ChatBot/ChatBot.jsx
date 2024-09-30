import React, { useEffect, useReducer } from 'react';

import * as gs from "genericsuite";

import {
    setChatbotInputMessage,
    setChatbotErrorMsg,
} from './chatbot.general.functions.jsx';

import { UserInput } from './UserInput.jsx';
import {
    fetchConversations,
} from './chatbot.db.operations.jsx';
import { NewConversationButton } from './NewConversationButton.jsx';
import { ConversationList } from './ConversationList.jsx';
import { ConversationsToggleButton } from './ConversationsToggleButton.jsx';
import { ConversationBlock } from './ConversationBlock.jsx';

// import './ChatBot.css';
import {
    CHATBOT_CONTAINER_DIV_1_CLASS,
    CHATBOT_MESSAGE_AREA_DIV_1_CLASS,
    CHATBOT_MESSAGE_AREA_DIV_2_CLASS,
    CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS,
    CHATBOT_CONVERSATIONS_LIST_DIV_2_CLASS,
    CHATBOT_CONVERSATIONS_LIST_DIV_3_CLASS,
    CHATBOT_MESSAGE_AREA_DIV_3_CLASS,
    CHATBOT_MESSAGE_AREA_DIV_4_CLASS,
} from '../../constants/class_name_constants.jsx';

const convertId = gs.dbService.convertId;
const console_debug_log = gs.loggingService.console_debug_log;
const isMobileDevice = gs.ui.isMobileDevice;
const getUrlParams = gs.urlParams.getUrlParams;
const errorAndReEnter = gs.errorAndReenter.errorAndReEnter;
const useUser = gs.UserContext.useUser;
const useAppContext = gs.AppContext.useAppContext;

const HIDDEN_CLASS = gs.classNameConstants.HIDDEN_CLASS;

const debug = false;

const urlParams = getUrlParams();

// A reducer function for chat state management
const chatReducer = (state, action) => {
    switch (action.type) {

        // Messages
    
        case 'ADD_MESSAGE':
            // Adds a new message to the chat history
            return {
                ...state,
                messages: [...state.messages, action.payload]
            };

        case 'SET_MESSAGES':
            if (debug) {
                console_debug_log(" ChatReducer | SET_MESSAGES | action:", action);
            }
            return {
                ...state,
                // Payload has an array of messages and the conversationId
                currentConversationId: action.payload.conversationId,
                messages: action.payload.messages,
            };

        // Conversations

        // TODO
        case 'CLEAR_CHAT':
            // Clears the chat history
            return {
                ...state,
                messages: []
            };

        case 'START_NEW_CONVERSATION':
            return {
                ...state,
                currentConversationId: action.payload.conversationId,
                messages: []
            };

        case 'SET_CONVERSATION_ID':
            return {
                ...state,
                currentConversationId: action.payload,
            };

        // Conversation List

        case 'SET_CONVERSATIONS':
            return {
                ...state,
                conversations: action.payload
            };

        case 'DELETE_CONVERSATION':
            return {
                ...state,
                conversations: state.conversations.filter(conversation => convertId(conversation._id) !== action.payload)
            };

        // Bot
    
        case 'API_PROCESSING_STATUS':
            return {
                ...state,
                isApiProcessing: action.payload
            };

        case 'SET_INPUT_MESSAGE':
            return {
                ...state,
                inputMessage: action.payload
            };
            
        case 'SET_CONVERSATION_LIST_TOGGLE':
            return {
                ...state,
                conversationListToggle: action.payload
            };
            
        case 'SET_ERROR_MSG':
            return {
                ...state,
                errorMsg: action.payload
            };

        // Current user

        case 'SET_CURRENT_USER':
            return {
                ...state,
                // Payload has the currentUser data
                currentUser: action.payload,
            };

        // Not registered action
    
        default:
            if (debug) {
                console_debug_log("ChatReducer | NOT REGISTERED ACTION:", action, "|| state:", state);
            }
            return state;
    }
};

// Chatbot main component

export const ChatBot = ({
    userQuestion = (urlParams.q ? decodeURIComponent(urlParams.q) : ''),
    showSideBar = !(urlParams.ssb && urlParams.ssb === "0")
}) => {
    const { currentUser } = useUser();
    const { theme, isWide, isDarkMode } = useAppContext();

    const [state, dispatch] = useReducer(chatReducer, {
        messages: [],
        conversations: [],
        currentConversationId: null,
        isApiProcessing: false,
        isTyping: false,
        inputMessage: userQuestion,
        conversationListToggle: false, // conversation sidebar off by default
        // conversationListToggle: !isMobileDevice(),
        errorMsg: null,
        currentUser: currentUser,
    });

    const columnSizeList = () =>
        (showSideBar && state.conversationListToggle ? (isMobileDevice() ? '80%' : '20%') : "0%")

    const columnSizeMessages = () =>
        (showSideBar && state.conversationListToggle ? (isMobileDevice() ? '20%' : '80%') : "100%")
    
    if (debug) {
        console_debug_log("AiAssistant STATE:", state);
        console_debug_log("AiAssistant Main | state.errorMsg:", state.errorMsg);
    }

    // If there's an initial UserQuestion, send it inmediatelly to the LLM
    // useEffect(() => {
    //     if (userQuestion !== '') {
    //         sendMessage(userQuestion);
    //     }
    // }, [userQuestion, sendMessage]);

    const handleRetry = (e) => {
        if (state && state.messages) {
            const lastUserMessage = state.messages.slice().reverse().find(
                message => message.role === 'user' && message.content !== ''
            );
            if (debug) {
                console_debug_log("handleRetry | lastUserMessage:", lastUserMessage, "state.messages:", state.messages);
            }
            if (
                typeof lastUserMessage !== "undefined" &&
                lastUserMessage !== null &&
                typeof lastUserMessage["content"] !== "undefined"
            ) {
                if (debug) {
                    console_debug_log(`handleRetry | setChatbotInputMessage: ${lastUserMessage.content}`);
                }
                setChatbotInputMessage(lastUserMessage.content, dispatch);
            }
        }
        setChatbotErrorMsg(null, dispatch)
    };
    
    // Load conversations
    useEffect(() => {
        fetchConversations(state, dispatch)
            .then(
                apiResponse => {
                    if (debug) {
                        console_debug_log(`>>> AiAssistant INITIAL useEffect |  apiResponse:`, apiResponse);
                    }
                    if (!apiResponse.ok) {
                        setChatbotErrorMsg(apiResponse.errorMessage, dispatch)
                    }
                },
                error => setChatbotErrorMsg(error, dispatch)
            );
    }, []);

    useEffect(() => {
        dispatch({ type: 'SET_CURRENT_USER', payload: currentUser });
    }, [currentUser]);

    return (
        <div
            // className={`${CHATBOT_CONTAINER_DIV_1_CLASS} ${theme.contentBg}`}
            className={`${CHATBOT_CONTAINER_DIV_1_CLASS} ${theme.background}`}
        >
            {/* Conversarion list area */}
            <div
                className={CHATBOT_CONVERSATIONS_LIST_DIV_1_CLASS + (showSideBar && state.conversationListToggle ? '' : HIDDEN_CLASS)}
                style={{ width: columnSizeList() }}
            >
                <div
                    className={CHATBOT_CONVERSATIONS_LIST_DIV_2_CLASS}
                >
                    <div
                        className={CHATBOT_CONVERSATIONS_LIST_DIV_3_CLASS}
                    >
                        <NewConversationButton
                            dispatch={dispatch}
                        />
                        <ConversationList
                            state={state}
                            dispatch={dispatch}
                            showSideBar={showSideBar}
                        />
                    </div>
                </div>
            </div>
            <ConversationsToggleButton
                className={showSideBar ? '' : HIDDEN_CLASS}
                state={state}
                dispatch={dispatch}
            />
            <div
                className={CHATBOT_MESSAGE_AREA_DIV_1_CLASS}
            >
                <div
                    role="presentarion"
                    className={CHATBOT_MESSAGE_AREA_DIV_2_CLASS}
                >
                    <div
                        className={CHATBOT_MESSAGE_AREA_DIV_3_CLASS}
                    >
                        {/* Error message */}
                        {state.errorMsg && (
                            <>
                                {errorAndReEnter(state.errorMsg, null, null, handleRetry)}
                            </>
                        )}
                        {/* Conversation messages area */}
                        <div 
                            id="message-area"
                            className={CHATBOT_MESSAGE_AREA_DIV_4_CLASS}
                            style={{ width: columnSizeMessages() }}
                        >
                            <ConversationBlock
                                id="conversation-block"
                                state={state}
                                handleRetry={handleRetry}
                            />
                            <UserInput
                                state={state}
                                dispatch={dispatch}
                                userQuestion={state.inputMessage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
