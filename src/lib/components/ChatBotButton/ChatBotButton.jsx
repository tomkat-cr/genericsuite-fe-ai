// AI button

import React, { useState } from 'react';

import * as gs from "genericsuite";

import {
    CHATBOT_BUTTON_DIV_1_CLASS,
    CHATBOT_BUTTON_DIV_2_CLASS,
    CHATBOT_BUTTON_LLM_POPUP_DIV_1,
    CHATBOT_BUTTON_LLM_POPUP_DIV_2,
} from '../../constants/class_name_constants.jsx';

import { ChatBot } from "../ChatBot/ChatBot.jsx"

const console_debug_log = gs.loggingService.console_debug_log;

// const imageDirectory = gs.generalConstants.imageDirectory;
// const sparkIcon = gs.spark;
// Does not work:
// import SparkIcon from "../../images/spark.svg";
const GsIcons = gs.IconsLib.GsIcons;

const debug = false;
const sparkClickOpenWindow = true;

export const ChatBotButton = ({
    valueElement,
    chatbot_prompt,
}) => {
    const [showLLMPopup, setShowLLMPopup] = useState(false);

    if (debug) {
        console_debug_log(`ChatBotButton | valueElement: ${valueElement} | document.getElementById(valueElement)| ${document.getElementById(valueElement)} | chatbot_prompt: ${chatbot_prompt}`);
    }

    const setPrompt = (prompt, valueToReplace) => {
        return prompt.replace("%s", valueToReplace);
    }
    
    const handleSparkClick = (e) => {
        e.preventDefault();
        const inputValue = document.getElementById(valueElement).value;
        if (inputValue !== "") {
            if (sparkClickOpenWindow) {
                window.open(
                    window.location.origin + '/#/chatbot?menu=0&ssb=0&q=' + setPrompt(chatbot_prompt, inputValue),
                    'AppChatbotPopUp',
                    'height=600,width=400'
                );
            } else {
                setShowLLMPopup(!showLLMPopup);
            }
        }
    };

    return (
        <>
            <div
                className={CHATBOT_BUTTON_DIV_1_CLASS}
            >
                <div
                    className={CHATBOT_BUTTON_DIV_2_CLASS}
                >
                    <button
                        onClick={handleSparkClick}
                    >
                        {/* <img src={imageDirectory + sparkIcon} alt="Open AI Chat" /> */}
                        <GsIcon
                            icon="spark"
                            alt="Open AI Assistant"
                        />
                    </button>
                </div>
            </div>
            {showLLMPopup && (
                <div
                    className={CHATBOT_BUTTON_LLM_POPUP_DIV_1}
                >
                    <div
                        // className="llm-popup"
                        className={CHATBOT_BUTTON_LLM_POPUP_DIV_2}
                    >
                        <ChatBot
                            userQuestion={setPrompt(chatbot_prompt, document.getElementById(valueElement).value)}
                            showSideBar={false}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

