import React from 'react';

///////////////////////////

// https://github.com/react-syntax-highlighter/react-syntax-highlighter

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
// "Prism" has more supported languages and the most intenresting, comprared with  "HLJS"

import { Prism, Light } from 'react-syntax-highlighter';
import { vscDarkPlus as shStyleforPrism } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';
import { grayscale as shStyleForLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/index.js';

///////////////////////////

const LinkifyText = require("genericsuite").ui.LinkifyText;
const CopyButton = require("genericsuite").ui.CopyButton;

export const ChatCodeBlock = ({ children, shType = "prism" }) => {
    // Regular expression to match code blocks enclosed in ```
    const codeRegex = /```([\s\S]*?)```/g;

    // Split content into parts with and without code blocks
    const parts = children.split(codeRegex);

    return (
        <div>
            {parts.map((part, index) => {
                if (index % 2 === 0) {
                    // Render non-code parts as regular text
                    // return <span key={index}>{part}</span>;
                    return (
                        <LinkifyText
                            key={`${index}-other`}
                        >
                            {part}
                        </LinkifyText>
                    );
                } else {
                    // Render code blocks with specified styles
                    let content = part.trim()
                    const language = content.split('\n')[0];
                    content = content.substring(language.length + 1).trim();
                    return (
                        <>
                            <div style={{ position: 'relative' }}>
                                <div
                                    key={`${index}-language`}
                                    style={{
                                        backgroundColor: 'rgb(30, 30, 30)',
                                        color: 'wheat',
                                        marginTop: '10px',
                                        padding: '10px',
                                        // borderRadius: '5px',
                                        overflowX: 'auto',
                                    }}
                                >
                                    {language}
                                </div>
                                <div
                                    key={`${index}-content`}
                                >
                                    {shType==="prism" && (
                                        <Prism
                                            language={language} 
                                            style={shStyleforPrism}
                                            wrapLongLines={true}
                                        >
                                            {content}
                                        </Prism>
                                    )}   
                                    {shType!=="prism" && (
                                        <Light
                                            language={language} 
                                            style={shStyleForLight}
                                            wrapLongLines={true}
                                        >
                                            {content}
                                        </Light>
                                    )}   
                                    <CopyButton text={content} />
                                </div>
                            </div>
                        </>
                    );
                }
            })}
        </div>
    );
};
