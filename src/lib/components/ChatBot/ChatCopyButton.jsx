import React, { useEffect, useRef, useState } from 'react';

import * as gs from "genericsuite";

import { iconsLibAiExtras } from '../../helpers/iconsLibAiExtras.jsx';
import {
    CHATBOT_CODE_BLOCK_COPY_BUTTON_CLASS,
} from '../../constants/class_name_constants.jsx';

const GsIcons = gs.IconsLib.GsIcons;

const COPIED_FEEDBACK_MS = 2000;

// Inline styles rather than Tailwind utilities: the host app compiles this
// library's classes, so a `dist` its config does not scan would leave the button
// unstyled. Hover is driven from state for the same reason - there is no
// stylesheet shipped with this package to hold a `:hover` rule.
const baseButtonStyle = {
    position: 'absolute',
    top: '6px',
    right: '8px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '5px 7px',
    border: '1px solid transparent',
    borderRadius: '6px',
    background: 'transparent',
    color: '#a8a8a8',
    cursor: 'pointer',
    fontSize: '11px',
    lineHeight: 1,
    transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
};

const hoverButtonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    borderColor: 'rgba(255, 255, 255, 0.14)',
    color: '#ffffff',
};

const copiedButtonStyle = {
    color: '#6ee7a8',
};

export const ChatCopyButton = ({ text, label = 'Copy code' }) => {
    const [copied, setCopied] = useState(false);
    const [hovered, setHovered] = useState(false);
    const resetTimer = useRef(null);

    useEffect(() => {
        return () => {
            if (resetTimer.current) {
                clearTimeout(resetTimer.current);
            }
        };
    }, []);

    const unsecuredCopyToClipboard = (value) => {
        const textArea = document.createElement("textarea");
        textArea.value = value;
        // Keep the scroll position stable while the textarea is focused
        textArea.style.position = 'fixed';
        textArea.style.top = '-1000px';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }
        document.body.removeChild(textArea);
    };

    const handleCopy = () => {
        if (window.isSecureContext && navigator.clipboard) {
            navigator.clipboard.writeText(text);
        } else {
            unsecuredCopyToClipboard(text);
        }
        setCopied(true);
        if (resetTimer.current) {
            clearTimeout(resetTimer.current);
        }
        resetTimer.current = setTimeout(() => setCopied(false), COPIED_FEEDBACK_MS);
    };

    return (
        <button
            type="button"
            id="copyButton"
            className={CHATBOT_CODE_BLOCK_COPY_BUTTON_CLASS}
            style={{
                ...baseButtonStyle,
                ...(hovered ? hoverButtonStyle : {}),
                ...(copied ? copiedButtonStyle : {}),
            }}
            title={copied ? 'Copied!' : label}
            aria-label={copied ? 'Copied!' : label}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHovered(true)}
            onBlur={() => setHovered(false)}
            onClick={handleCopy}
        >
            <GsIcons
                icon={copied ? 'check' : 'copy'}
                size='sm'
                additionalIconsFn={iconsLibAiExtras}
            />
            {/* Announce the result without shifting the icon-only layout */}
            <span role="status" aria-live="polite" style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                clip: 'rect(0 0 0 0)',
                whiteSpace: 'nowrap',
            }}>
                {copied ? 'Copied!' : ''}
            </span>
        </button>
    );
};
