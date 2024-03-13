import React, { useEffect, useReducer } from 'react';

import * as gs from "genericsuite";

const convertId = gs.dbService.convertId;
const console_debug_log = gs.loggingService.console_debug_log;
const isMobileDevice = gs.ui.isMobileDevice;
const getUrlParams = gs.urlParams.getUrlParams;
const errorAndReEnter = gs.errorAndReenter.errorAndReEnter;

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

import './ChatBot.css';

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

        case 'GET_MESSAGES':
            if(debug) {
                console_debug_log(">>--> ** ChatReducer ** | action:", action);
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

        // Not registered action
    
        default:
            return state;
    }
};

// Chatbot main component

export const ChatBot = ({
    userQuestion = (urlParams.q ? decodeURIComponent(urlParams.q) : ''),
    showSideBar = !(urlParams.ssb && urlParams.ssb === "0")
}) => {
    const [state, dispatch] = useReducer(chatReducer, {
        messages: [],
        conversations: [],
        currentConversationId: null,
        isApiProcessing: false,
        isTyping: false,
        inputMessage: userQuestion,
        conversationListToggle: !isMobileDevice(),
        errorMsg: null,
    });

    const columnSizeList = () =>
        (showSideBar && state.conversationListToggle ? (isMobileDevice() ? '70%' : '30%') : "0%")

    const columnSizeMessages = () =>
        (showSideBar && state.conversationListToggle ? (isMobileDevice() ? '30%' : '70%') : "100%")
    
    if (debug) {
        console_debug_log("FYNBOT STATE:", state);
        console_debug_log("FYNBOT Main | state.errorMsg:", state.errorMsg);
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
            // if (debug) {
                console_debug_log("handleRetry | lastUserMessage:", lastUserMessage, "state.messages:", state.messages);
            // }
            if (
                typeof lastUserMessage !== "undefined" &&
                lastUserMessage !== null &&
                typeof lastUserMessage["content"] !== "undefined"
            ) {
                // if (debug) {
                    console_debug_log(`handleRetry | setChatbotInputMessage: ${lastUserMessage.content}`);
                // }
                setChatbotInputMessage(lastUserMessage.content, dispatch);
            }
        }
        setChatbotErrorMsg(null, dispatch)
    };
    
    // Load conversations
    useEffect(() => {
        fetchConversations(dispatch)
            .then(
                apiResponse => {
                    if (debug) {
                        console_debug_log(`>>> FynBot INITIAL useEffect |  apiResponse:`, apiResponse);
                    }
                    if (!apiResponse.ok) {
                        setChatbotErrorMsg(apiResponse.errorMessage, dispatch)
                    }
                },
                error => setChatbotErrorMsg(error, dispatch)
            );
    }, []);

    return (
        <div className="chatbot-container">
            {state.errorMsg && (
                <>
                    {errorAndReEnter(state.errorMsg, null, null, handleRetry)}
                </>
            )}
            {showSideBar && state.conversationListToggle && (
                <div
                    className="conversations-list"
                    style={{ width: columnSizeList() }}
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
            )}
            {showSideBar && (
                <ConversationsToggleButton
                    state={state}
                    dispatch={dispatch}
                />
            )}
            <div 
                id="message-area"
                className="message-area"
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
    );
}
