import React from 'react';

import * as gs from "genericsuite";
import GsAiLogoCircle from '../../images/gs_ai_logo_circle.svg'
import { ChatBot } from '../ChatBot/ChatBot.jsx';
import { ChatBotButton } from '../ChatBotButton/ChatBotButton.jsx';

const mergeDicts = gs.dictUtilities.mergeDicts;

const defaultComponentMap = {
    "Chatbot": ChatBot,
    "ChatBotButton": ChatBotButton,
};

export const App = ({componentMap = {}, appLogo = null}) => {
    const componentMapFinal = mergeDicts(componentMap, defaultComponentMap);
    return (
        <gs.App
            appLogo={(appLogo === null ? GsAiLogoCircle : appLogo)}
            componentMap={componentMapFinal}
        />
    );
}
