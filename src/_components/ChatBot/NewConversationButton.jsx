import React from 'react';

import { 
    BUTTON_LISTING_CLASS,
    // INPUT_FLEXIBLE_CLASS,
} from 'genericsuite/src/_constants/class_name_constants';

import './ChatBot.css';

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
        <>
            <button
                key='new-conversation-button'
                onClick={() => startNewConversation()}
                className={`${BUTTON_LISTING_CLASS} text-xs mb-2`}
            >
                New Conversation
            </button>
        </>
    );
};
