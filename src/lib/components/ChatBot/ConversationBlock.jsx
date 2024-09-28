import React, { useState, useEffect } from 'react';

import * as gs from "genericsuite";

import AudioPlayer from './AudioPlayer.jsx';
import { GoToTheBottom } from './GoToTheBottom.jsx'
import { ScrollToBottomButton } from './ScrollToBottomButton.jsx'
import { ChatCodeBlock } from './ChatCodeBlock.jsx';

import './ChatBot.css';

const console_debug_log = gs.loggingService.console_debug_log;
const usePlainFetch = gs.responseHandlersService.usePlainFetch;
const getFileExtension = gs.blobFilesUtilities.getFileExtension;
const performDownload = gs.blobFilesUtilities.performDownload;
const INFO_MSG_CLASS = gs.classNameConstants.INFO_MSG_CLASS;
const WARNING_MSG_CLASS = gs.classNameConstants.WARNING_MSG_CLASS;

const debug = false;
const defaultDownloadFilename = 'file_with_no_name.mp3'

export const ConversationBlock = ({
    id,
    state,
    handleRetry,
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
        let filename = typeof messageObject.filename !== "undefined" ? messageObject.filename : downloadedFilename; 
        const extension = filename ? getFileExtension(filename) : null;
        let errorMsgSuffix = usePlainFetch ? " (No headers allowed)" : "";
        if (hasAttachment && extension) {
            if (['wav', 'mp3'].includes(extension.toLowerCase())) {
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
                        {(message ? message : `Click here to download the "${filename}" file`)+errorMsgSuffix}
                    </button>
                );
            }
        }
        if (hasAttachment || (message && message.startsWith('```File'))) {
            if (message && message.startsWith('```')) {
                message = message.substring(3, message.length - 3);
                const firstWord = message.split(' ')[0];
                message = message.substring(firstWord.length + 1).trim();
            }
            if (hasAttachment && !message) {
                if (!filename) {
                    filename = defaultDownloadFilename;
                    errorMsgSuffix += (errorMsgSuffix.trim() === '' ? '' : '.') + ' WARNING: no file name received. Fix the Backend API to send headers.'
                }
                message = filename;
            }
            return (
                <div
                    // style={{backgroundColor: 'white'}}
                    // tailwind it
                    className="bg-white"
                >
                    <div
                        // style={{maxWidth: 'fit-content', border: '1px solid black', borderRadius: '5px', backgroundColor: '#f2f2f2', padding: '10px'}}
                        // tailwind it
                        className="rounded-md p-2 shadow-sm"
                    >
                        {hasAttachment && (
                            <a
                                href={messageObject.attachment_url}
                                target='_blank'
                                rel="noreferrer"
                                // style={{color: 'black', fontWeight: 'bold'}}
                                className="text-black font-bold"
                            >
                                {message+errorMsgSuffix}
                            </a>
                        )}
                        {!hasAttachment && (
                            <>{message+errorMsgSuffix}</>
                        )}
                    </div>
                    {hasAttachment && ['jpg', 'jpeg', 'gif', 'png', 'svg', 'bmp', 'webp', 'tiff'].includes(String(getFileExtension(messageObject.attachment_url)).toLowerCase()) && (
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
