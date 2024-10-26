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

import * as gs from "genericsuite";

const LinkifyText = gs.ui.LinkifyText;
const CopyButton = gs.ui.CopyButton;
const renderMarkdownContent = gs.ui.renderMarkdownContent;

export const ChatCodeBlock = ({ children, shType = "prism" }) => {
    // Regular expression to match code blocks enclosed in ```
    const codeRegex = /```([\s\S]*?)```/g;

    // Split content into parts with and without code blocks
    const parts = children.split(codeRegex);

    return (
        <>
            {parts.map((part, index) => {
                if (index % 2 === 0) {
                    // Render non-code parts as markdown text
                    // If part constains [] and (), return <LinkifyText ... />, else, call renderMarkdownContent()
                    // if (part.includes('[') && part.includes(']') && part.includes('(') && part.includes(')')) {
                    //     return (
                    //         <LinkifyText key={`${index}-other`}>
                    //             <i>{part}</i>
                    //         </LinkifyText>
                    //     );
                    // }
                    return (
                        <>
                            {renderMarkdownContent(part)}
                        </>
                    );
                } else {
                    // Handle code blocks
                    let content = part.trim();
                    let language = content.split('\n')[0];
                    
                    // Special handling for plaintext
                    if (language === 'plaintext') {
                        content = content.substring(language.length + 1).trim();
                        return (
                            <div key={`${index}-plaintext`}>
                                {renderMarkdownContent(content)}
                            </div>
                        );
                    }

                    content = content.substring(language.length + 1).trim();
                    
                    return (
                        <div key={`${index}-content-wrapper`}>
                            <div style={{ position: 'relative' }}>
                                <div
                                    key={`${index}-language`}
                                    style={{
                                        backgroundColor: 'rgb(30, 30, 30)',
                                        color: 'wheat',
                                        marginTop: '10px',
                                        padding: '10px',
                                        overflowX: 'auto',
                                    }}
                                >
                                    {language}
                                </div>
                                <div key={`${index}-content`}>
                                    {shType === "prism" ? (
                                        <Prism
                                            language={language}
                                            style={shStyleforPrism}
                                            wrapLongLines={true}
                                        >
                                            {content}
                                        </Prism>
                                    ) : (
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
                        </div>
                    );
                }
            })}
        </>
    );
};
