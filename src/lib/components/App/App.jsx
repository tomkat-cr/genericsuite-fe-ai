import React from 'react';

import * as gs from "genericsuite";
import { ChatBot } from '../ChatBot/ChatBot.jsx';
// import { ChatBotButton } from '../ChatBotButton/ChatBotButton.jsx';

const mergeDicts = gs.dictUtilities.mergeDicts;
const console_debug_log = gs.loggingService.console_debug_log;

const debug = false;

const defaultComponentMap = {
    "Chatbot": ChatBot,
    // "ChatBotButton": ChatBotButton,
};

export const App = ({componentMap = {}, appLogo = null}) => {
    const componentMapFinal = mergeDicts(componentMap, defaultComponentMap);
    if (debug) console_debug_log("GS_AI App | componentMapFinal:", componentMapFinal);
    return (
        <gs.App
            appLogo={(appLogo === null ? 'gs_ai_logo_circle.svg' : appLogo)}
            componentMap={componentMapFinal}
        />
    );
}
