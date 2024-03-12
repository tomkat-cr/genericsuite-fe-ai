import React from 'react';

const BUTTON_LISTING_CLASS = require("genericsuite").classNameConstants.BUTTON_LISTING_CLASS;
// const INPUT_FLEXIBLE_CLASS = require("genericsuite").classNameConstants.INPUT_FLEXIBLE_CLASS;

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
