import React from 'react';

import * as gs from "genericsuite";
import {
    CHATBOT_NEW_CONVERSATION_BUTTON_CLASS,
    CHATBOT_NEW_CONVERSATION_BUTTON_DIV_1_CLASS,
} from '../../constants/class_name_constants';

// import './ChatBot.css';

// const BUTTON_LISTING_CLASS = gs.classNameConstants.BUTTON_LISTING_CLASS;
// //const INPUT_FLEXIBLE_CLASS = gs.classNameConstants.INPUT_FLEXIBLE_CLASS;

// const debug = false;

export const NewConversationButton = ({
    dispatch,
    // startNewConversation,
}) => {

    // Call this when you want to start a new conversation
    const startNewConversation = () => {
        // Generate a new conversation ID using UUID for enhanced security
        // const newConversationId = generateNewConversationId();
        dispatch({ type: 'START_NEW_CONVERSATION', payload: { conversationId: null } });
    };

    return (
        <div
            className={CHATBOT_NEW_CONVERSATION_BUTTON_DIV_1_CLASS}
        >
            <button
                key='new-conversation-button'
                onClick={() => startNewConversation()}
                // className={`${BUTTON_LISTING_CLASS} text-xs mb-2`}
                className={CHATBOT_NEW_CONVERSATION_BUTTON_CLASS}
            >
                New Conversation
            </button>
        </div>
    );
};
