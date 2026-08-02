import { render, screen } from "@testing-library/react";
import React from "react";
import { ConversationBlock } from "./ConversationBlock.jsx";

const mockTheme = { text: 'text-class', label: 'label-class', background: 'bg-class' };
const mockAppContext = {
    theme: mockTheme,
    isWide: false,
    isDarkMode: false
};

// Mock genericsuite
jest.mock('genericsuite', () => ({
    AppContext: {
        useAppContext: () => mockAppContext
    },
    loggingService: {
        console_debug_log: jest.fn()
    },
    responseHandlersService: {
        usePlainFetch: false
    },
    blobFilesUtilities: {
        getFileExtension: (filename: string) => {
            if (!filename) return '';
            if (filename.startsWith('data:image/')) {
                return filename.split(';')[0].split('/')[1];
            }
            return filename.split('.').pop();
        },
        performDownload: jest.fn(),
        defaultFilenametoDownload: 'download.mp3',
        decodeBlob: jest.fn()
    },
    classNameConstants: {
        INFO_MSG_CLASS: 'info-msg',
        WARNING_MSG_CLASS: 'warning-msg'
    },
    IconsLib: {
        GsIcons: () => <div data-testid="gs-icon" />
    },
    ui: {
        LinkifyText: ({ children }: { children: React.ReactNode }) => <>{children}</>,
        CopyButton: () => <button>Copy</button>,
        renderMarkdownContent: (content: string) => <div data-testid="markdown">{content}</div>
    }
}));

const mockDispatch = jest.fn();

describe("ConversationBlock sanitization", () => {
    it("sanitizes javascript: URIs in attachment_url", () => {
        const state = {
            messages: [
                {
                    role: 'assistant',
                    content: 'Check this out',
                    attachment_url: 'javascript:alert("XSS")'
                }
            ]
        };

        render(<ConversationBlock state={state} id="test-cb" handleRetry={mockDispatch} />);

        const link = screen.getByRole('link');
        expect(link.getAttribute('href')).toBe('#');
    });

    it("allows https: URIs in attachment_url", () => {
        const state = {
            messages: [
                {
                    role: 'assistant',
                    content: 'Download file',
                    attachment_url: 'https://example.com/file.pdf'
                }
            ]
        };

        render(<ConversationBlock state={state} id="test-cb" handleRetry={mockDispatch} />);

        const link = screen.getByRole('link');
        expect(link.getAttribute('href')).toBe('https://example.com/file.pdf');
    });

    it("sanitizes javascript: URIs in img src", () => {
        const state = {
            messages: [
                {
                    role: 'assistant',
                    content: 'Image',
                    attachment_url: 'javascript:alert("XSS").png' // getFileExtension will return png
                }
            ]
        };

        render(<ConversationBlock state={state} id="test-cb" handleRetry={mockDispatch} />);

        const img = screen.getByRole('img');
        expect(img.getAttribute('src')).toBe('#');
    });

    it("keeps attachment images inside the chat column", () => {
        const state = {
            messages: [
                {
                    role: 'attachment',
                    content: 'generated.png',
                    attachment_url: 'https://example.com/a-very-wide-generated.png'
                }
            ]
        };

        render(<ConversationBlock state={state} id="test-cb" handleRetry={mockDispatch} />);

        const img = screen.getByRole('img') as HTMLImageElement;
        expect(img.style.maxWidth).toBe('100%');
        expect(img.style.display).toBe('block');
        expect(img.style.height).toBe('auto');
        // `fit-content` sized the image to its intrinsic width, defeating max-width
        expect(img.style.width).toBe('');

        // The bubble is a flex item: without `min-width: 0` it cannot shrink below
        // the image's intrinsic width and the whole page scrolls horizontally.
        const bubble = img.closest('.chatbot-bot-message-class') as HTMLElement;
        expect(bubble).toBeTruthy();
        expect(bubble.style.minWidth).toBe('0');
        expect(bubble.style.maxWidth).toBe('100%');
    });

    it("allows data: URIs for images", () => {
        const dataUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
        const state = {
            messages: [
                {
                    role: 'assistant',
                    content: 'Base64 Image',
                    attachment_url: dataUrl
                }
            ]
        };

        render(<ConversationBlock state={state} id="test-cb" handleRetry={mockDispatch} />);

        const img = screen.getByRole('img');
        expect(img.getAttribute('src')).toBe(dataUrl);
    });
});
