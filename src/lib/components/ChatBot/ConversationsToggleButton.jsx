import React from 'react';

import * as gs from "genericsuite";

import { setConversationListToggle } from './chatbot.general.functions.jsx';

// import './ChatBot.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import fontawesome from "@fortawesome/fontawesome";
// import {
//     faGreaterThan,
//     faLessThan,
// } from "@fortawesome/fontawesome-free-solid";
// fontawesome.library.add(
//     faGreaterThan,
//     faLessThan,
// );

const ToggleSideBar = gs.NavLib.ToggleSideBar;
const console_debug_log = gs.loggingService.console_debug_log;

const debug = false;

export const ConversationsToggleButton = ({
    state,
    dispatch,
}) => {
    if (debug) {
        console_debug_log('ConversationsToggleButton...');
    }
    return (
        <>
            {/* <button
                key='conversation-list-toggle-button'
                type='button'
                className="bg-white border-none focus:outline-none"
                onClick={() => setConversationListToggle(!state.conversationListToggle, dispatch)}
            >
                <FontAwesomeIcon
                    icon={state.conversationListToggle ? 'less-than' : 'greater-than'}
                    size='xl'
                    style={{ color: 'lightgray' }}
                />
            </button> */}
            <ToggleSideBar
                key='conversation-list-toggle-button'
                onClick={() => setConversationListToggle(!state.conversationListToggle, dispatch)}
            >
            </ToggleSideBar>
        </>
    )
}
