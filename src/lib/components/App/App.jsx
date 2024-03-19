import React from 'react';

import * as gs from "genericsuite";
import { ChatBot } from '../ChatBot/ChatBot.jsx';
// import { ChatBotButton } from '../ChatBotButton/ChatBotButton.jsx';

const mergeDicts = gs.dictUtilities.mergeDicts;

const defaultComponentMap = {
    "Chatbot": ChatBot,
    // "ChatBotButton": ChatBotButton,
};

export const App = ({componentMap = {}, appLogo = null}) => {
    const componentMapFinal = mergeDicts(componentMap, defaultComponentMap);
console.log("AI App",componentMapFinal);
    return (
        <gs.App
            appLogo={(appLogo === null ? 'gs_ai_logo_circle.svg' : appLogo)}
            componentMap={componentMapFinal}
        />
    );
}
