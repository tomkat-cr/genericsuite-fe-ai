import React from 'react';

import { App as GsApp } from 'genericsuite';

import GsAiLogoCircle from '../../images/gs_ai_logo_circle.svg'
import { ChatBot } from '../ChatBot/ChatBot.jsx';

const componentMap = {
    "Chatbot": ChatBot,
};

export const App = () => {
    return (
        <GsApp
            appLogo={GsAiLogoCircle}
            componentMap={componentMap}
        />
    );
}