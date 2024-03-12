import React, { useState, useEffect } from 'react';

const console_debug_log = require("genericsuite").loggingService.console_debug_log;
const usePlainFetch = require("genericsuite").responseHandlersService.usePlainFetch;
const getFileExtension = require("genericsuite").blobFilesUtilities.getFileExtension;
const performDownload = require("genericsuite").blobFilesUtilities.performDownload;
const INFO_MSG_CLASS = require("genericsuite").classNameConstants.INFO_MSG_CLASS;
const WARNING_MSG_CLASS = require("genericsuite").classNameConstants.WARNING_MSG_CLASS;

import AudioPlayer from './AudioPlayer.jsx';
import { GoToTheBottom } from './GoToTheBottom.jsx'
import { ScrollToBottomButton } from './ScrollToBottomButton.jsx'
import { ChatCodeBlock } from './ChatCodeBlock.jsx';

import './ChatBot.css';

const debug = false;

export const ConversationBlock = ({
    id,
    state,
    dispatch,
    handleRetry,
    // errorMsg,
}) => {
    const [elementsToRender, setElementsToRender] = useState('');

    if (debug) {
        console_debug_log(`ConversationBlock | state.errorMsg: ${state.errorMsg} | state:`, state);
    }

    const formatMessage = (messageObject) => {
        let message = messageObject.content;
        const hasDownloadFileToken = message && message.includes("[SEND_FILE_BACK]");
        const downloadedFilename = hasDownloadFileToken ? message.replace("[SEND_FILE_BACK]=", "").split('/').pop() : null;
        const url = typeof messageObject.attachment_url !== "undefined" ? messageObject.attachment_url : null;
        const hasAttachment = (url !== null || hasDownloadFileToken);
        const filename = typeof messageObject.filename !== "undefined" ? messageObject.filename : downloadedFilename; 
        const extension = filename ? getFileExtension(filename) : null;
        const errorMsgSuffix = usePlainFetch ? " (No headers allowed)" : "";
        if (hasAttachment && extension) {
            if (['wav', 'mp3'].includes(extension.toLowerCase())) {
            // if (['1wav', '1mp3'].includes(extension.toLowerCase())) {
                return (
                    <AudioPlayer
                        blobUrl={url}
                        filename={filename}
                        expired={hasDownloadFileToken}
                        errorMsgSuffix={errorMsgSuffix}
                    />
                );
            } else {
                if (hasDownloadFileToken) {
                    return (
                        <p
                            className={WARNING_MSG_CLASS}
                            title={filename}
                        >
                            {(['wav', 'mp3'].includes(extension.toLowerCase()) ? "Audio file link" : "Link") + ` expired...${errorMsgSuffix}`}
                        </p>
                    )
                }
                // Link to download the file calling the performDownload function   
                return (
                    <button
                        className={INFO_MSG_CLASS}
                        onClick={(e) => {
                            e.preventDefault();
                            performDownload(url, filename);
                        }}
                    >
                        {message ? message : `Click here to download the "${filename}" file`}
                    </button>
                );
            }
        }
        if (hasAttachment || message.startsWith('```File')) {
            if (message.startsWith('```')) {
                message = message.substring(3, message.length - 3);
                const firstWord = message.split(' ')[0];
                message = message.substring(firstWord.length + 1).trim();
            }
            return (
                <div style={{backgroundColor: 'white'}}>
                    <div style={{maxWidth: 'fit-content', border: '1px solid black', borderRadius: '5px', backgroundColor: '#f2f2f2', padding: '10px'}}>
                        {hasAttachment && (
                            <a
                                href={messageObject.attachment_url}
                                target='_blank'
                                rel="noreferrer"
                                style={{color: 'black', fontWeight: 'bold'}}
                            >
                                {message}
                            </a>
                        )}
                        {!hasAttachment && (
                            <>{message}</>
                        )}
                    </div>
                    {hasAttachment && (
                            <div className='mt-2'>
                                <img
                                    className='rounded-md'
                                    src={messageObject.attachment_url}
                                    alt={`Attachment: ${message}`}
                                    style={{maxHeight: 'auto', width: 'fit-content', maxWidth: '100%'}}
                                />
                            </div>
                        )
                    }
                </div>
            );
        }
        let shType = "prism";
        // if (message.includes('\n')) {
        //     // https://www.markdownguide.org/basic-syntax/
        //     // message.replace(/\n/g, '<BR/>');
        //     message = '```markdown```' + message;
        //     shType = "hljs";
        // }
        if (message.includes('```plaintext```')) {
            shType = "hljs";
        }
        return (
            <>
                <ChatCodeBlock
                    shType={shType}
                >
                    {message}
                </ChatCodeBlock>
            </>
        );
    }

    useEffect(() => {
        setElementsToRender(state.messages.map((message, index) => (
            <div key={index} className="message">
                <div className={`message-content ${message.role === 'user' ? 'user-message' : 'bot-message'}`}>
                    {formatMessage(message)}
                </div>
            </div>
        )));
    }, [state.messages])

    return (
        <>
            <div
                id={id ? id : "conversation-block"}
                className="conversation-block"
            >
                {state && !state.errorMsg && state.messages && elementsToRender}
            </div>
            <ScrollToBottomButton
                elementId='conversation-block'
                elementsToRender={elementsToRender}
            />
            <GoToTheBottom
                elementId='conversation-block'
                elementsToRender={elementsToRender}
            />
        </>
    );
}
