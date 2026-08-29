import React from 'react';

///////////////////////////

// https://github.com/react-syntax-highlighter/react-syntax-highlighter

// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_HLJS.MD
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/AVAILABLE_LANGUAGES_PRISM.MD
// "Prism" has more supported languages and the most intenresting, comprared with  "HLJS"

import { Prism, Light } from 'react-syntax-highlighter';
import { vscDarkPlus as shStyleforPrism } from 'react-syntax-highlighter/dist/cjs/styles/prism/index.js';
// A dark hljs theme so a fence with no language looks like the rest of the chat:
// the previous "grayscale" theme rendered light-on-white inside a dark card.
import { atomOneDark as shStyleForLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs/index.js';

import * as prismSupportedLanguagesModule from 'react-syntax-highlighter/dist/cjs/languages/prism/supported-languages.js';

///////////////////////////

import * as gs from "genericsuite";

import { ChatCopyButton } from './ChatCopyButton.jsx';
import {
    CHATBOT_CODE_BLOCK_CARD_CLASS,
    CHATBOT_CODE_BLOCK_HEADER_CLASS,
    CHATBOT_CODE_BLOCK_BODY_CLASS,
    CHATBOT_CODE_BLOCK_TEXT_CLASS,
} from '../../constants/class_name_constants.jsx';

const LinkifyText = gs.ui.LinkifyText;
const renderMarkdownContent = gs.ui.renderMarkdownContent;

// "supported-languages.js" is a CommonJS file inside react-syntax-highlighter's
// "dist/cjs" tree, so the shape it arrives in depends on how the consuming app's
// bundler does ESM/CJS interop: the array itself, `{ default: array }`, or
// double-wrapped as `{ default: { default: array } }` when `__esModule` is not
// honoured. Reading `.default` directly worked in jest but crashed the deployed
// bundle with "TypeError: <ns>.default.includes is not a function", so unwrap
// defensively instead of assuming one shape.
const MAX_INTEROP_DEPTH = 3;

export const resolveSupportedLanguages = (moduleExport) => {
    let value = moduleExport;
    for (let depth = 0; depth < MAX_INTEROP_DEPTH; depth++) {
        if (Array.isArray(value)) {
            return value;
        }
        if (!value || typeof value !== 'object') {
            break;
        }
        value = value.default;
    }
    return Array.isArray(value) ? value : [];
};

const prismLanguajes = resolveSupportedLanguages(prismSupportedLanguagesModule);

// The code block chrome is styled inline rather than with Tailwind utilities: the
// host app is what compiles this library's classes, so a `dist` that its Tailwind
// config does not scan would leave the block unstyled. The class names above stay
// on the elements so host apps can still restyle them.
const CODE_BLOCK_SURFACE = '#1e1e1e';

const codeBlockCardStyle = {
    position: 'relative',
    margin: '12px 0',
    borderRadius: '10px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.10)',
    backgroundColor: CODE_BLOCK_SURFACE,
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.30)',
};

const codeBlockHeaderStyle = {
    // Right padding keeps the label clear of the absolutely positioned Copy button.
    padding: '9px 44px 9px 14px',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    color: '#d4d4d4',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
    fontSize: '12px',
    letterSpacing: '0.3px',
    userSelect: 'none',
};

// `background: transparent` lets the card supply one surface colour for both the
// Prism and the hljs theme, so every code block matches whatever the language is.
const codeBlockPreStyle = {
    margin: 0,
    borderRadius: 0,
    padding: '14px 16px',
    background: 'transparent',
    fontSize: '13px',
    lineHeight: '1.55',
};

// With no language there is no header bar to hold the Copy button, which is
// absolutely positioned at the top of the card - reserve a strip so it never
// sits on top of the first line of code.
const codeBlockPreNoHeaderStyle = {
    ...codeBlockPreStyle,
    paddingTop: '38px',
};

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
                        <div
                            key={`${index}-other`}
                            className={CHATBOT_CODE_BLOCK_TEXT_CLASS}
                        >
                            {renderMarkdownContent(part)}
                        </div>
                    );
                } else {
                    // Handle code blocks. The info string (the language) is only
                    // whatever follows the opening fence on the same line, so read
                    // it off the raw part: trimming first would pull the first line
                    // of a fence opened without a language up into the language slot.
                    const newlineIndex = part.indexOf('\n');
                    const language = (newlineIndex === -1 ? part : part.slice(0, newlineIndex)).trim();
                    let content = (newlineIndex === -1 ? '' : part.slice(newlineIndex + 1)).trim();

                    // Special handling for plaintext
                    if (language === 'plaintext') {
                        return (
                            <div
                                key={`${index}-plaintext`}
                                className={CHATBOT_CODE_BLOCK_TEXT_CLASS}
                            >
                                {renderMarkdownContent(content)}
                            </div>
                        );
                    }
                    return (
                        <div
                            key={`${index}-content-wrapper`}
                            className={CHATBOT_CODE_BLOCK_CARD_CLASS}
                            style={codeBlockCardStyle}
                        >
                            {language && (
                                <div
                                    key={`${index}-language`}
                                    className={CHATBOT_CODE_BLOCK_HEADER_CLASS}
                                    style={codeBlockHeaderStyle}
                                >
                                    {language}
                                </div>
                            )}
                            <div
                                key={`${index}-content`}
                                className={CHATBOT_CODE_BLOCK_BODY_CLASS}
                            >
                                {shType === "prism" && prismLanguajes.includes(language) ? (
                                    <Prism
                                        language={language}
                                        style={shStyleforPrism}
                                        customStyle={language ? codeBlockPreStyle : codeBlockPreNoHeaderStyle}
                                        wrapLongLines={true}
                                    >
                                        {content}
                                    </Prism>
                                ) : (
                                    // If the language is not in the prismLanguajes list, it's not a language, it's a comment...
                                    // So Prism is not good for comments because it doesn't wrap long lines even if wrapLongLines is true, and Light does
                                    <Light
                                        language={language}
                                        style={shStyleForLight}
                                        customStyle={language ? codeBlockPreStyle : codeBlockPreNoHeaderStyle}
                                        wrapLongLines={true}
                                    >
                                        {content}
                                    </Light>
                                )}
                                <ChatCopyButton text={content} />
                            </div>
                        </div>
                    );
                }
            })}
        </>
    );
};
