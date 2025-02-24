import React from 'react';

import * as gs from "genericsuite";

import {
    CHATBOT_CONVERSATIONS_TOGGLE_BUTTON_CLASS,
} from '../../constants/class_name_constants.jsx';
import { setConversationListToggle } from './chatbot.general.functions.jsx';
import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';

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

const GsIcons = gs.IconsLib.GsIcons;
// const ToggleSideBar = gs.NavLib.ToggleSideBar;
const console_debug_log = gs.loggingService.console_debug_log;

const debug = false;

export const ConversationsToggleButton = ({
    id,
    className,
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
            <button
                key={id}
                className={CHATBOT_CONVERSATIONS_TOGGLE_BUTTON_CLASS + " " + (className ?? '')}
                onClick={() => setConversationListToggle(!state.conversationListToggle, dispatch)}
            >
                <GsIcons
                    icon={'conversation-list-toggle'}
                    size='lg'
                    additionalIconsFn={iconsLibAiExtras}
                />
            </button>
            {/* <ToggleSideBar
                key='conversation-list-toggle-button'
                onClick={() => setConversationListToggle(!state.conversationListToggle, dispatch)}
                className={CHATBOT_CONVERSATIONS_TOGGLE_BUTTON_CLASS + " " + (className ?? '')}
            >
            </ToggleSideBar> */}
        </>
    )
}
