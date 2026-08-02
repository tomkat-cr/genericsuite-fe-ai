import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { ChatCodeBlock, resolveSupportedLanguages } from "./ChatCodeBlock.jsx";

// Reproduces the module shape the deployed bundle actually produces for
// react-syntax-highlighter v16's CommonJS `supported-languages.js`: the
// namespace's `default` is the whole `module.exports` object rather than the
// array, so `prismLanguajes.includes(...)` throws
// "TypeError: <ns>.default.includes is not a function".
jest.mock(
    'react-syntax-highlighter/dist/cjs/languages/prism/supported-languages.js',
    () => ({
        __esModule: true,
        default: { __esModule: true, default: ['javascript', 'python', 'bash'] },
    }),
    { virtual: false }
);

jest.mock('react-syntax-highlighter', () => ({
    Prism: ({ children, language }: { children: React.ReactNode, language: string }) =>
        <pre data-testid="prism" data-language={language}>{children}</pre>,
    Light: ({ children, language }: { children: React.ReactNode, language: string }) =>
        <pre data-testid="light" data-language={language}>{children}</pre>,
}));

jest.mock('react-syntax-highlighter/dist/cjs/styles/prism/index.js', () => ({
    __esModule: true,
    vscDarkPlus: {},
}));

jest.mock('react-syntax-highlighter/dist/cjs/styles/hljs/index.js', () => ({
    __esModule: true,
    grayscale: {},
}));

jest.mock('genericsuite', () => ({
    classNameConstants: {
        BUTTON_LISTING_CLASS: 'button-listing',
        INFO_MSG_CLASS: 'info-msg',
        WARNING_MSG_CLASS: 'warning-msg',
    },
    // Mirrors genericsuite's GsIcons: it delegates unknown icons to
    // `additionalIconsFn`, then clones the svg with width/height from its size map
    // when the svg does not declare them.
    IconsLib: {
        GsIcons: ({ icon, size, additionalIconsFn }:
            { icon: string, size: string, additionalIconsFn: Function }) => {
            const svg = additionalIconsFn(icon, size, '14', '14', '', '', '', 'img');
            // `require` inside the factory: jest.mock factories are hoisted above
            // the imports, so the module-scope React binding is not in scope yet.
            return svg ? require('react').cloneElement(svg, {
                width: svg.props.width ?? '14',
                height: svg.props.height ?? '14',
                'data-icon': icon,
            }) : null;
        },
    },
    ui: {
        LinkifyText: ({ children }: { children: React.ReactNode }) => <>{children}</>,
        renderMarkdownContent: (content: string) => <div data-testid="markdown">{content}</div>,
    },
}));

describe("resolveSupportedLanguages", () => {
    const languages = ['javascript', 'python'];

    it("accepts the array itself", () => {
        expect(resolveSupportedLanguages(languages)).toEqual(languages);
    });

    it("unwraps a single `default` interop level", () => {
        expect(resolveSupportedLanguages({ default: languages })).toEqual(languages);
    });

    it("unwraps a double-wrapped `default` (the deployed-bundle shape)", () => {
        expect(resolveSupportedLanguages({ default: { default: languages } })).toEqual(languages);
    });

    it("falls back to an empty list for unusable shapes", () => {
        expect(resolveSupportedLanguages(undefined)).toEqual([]);
        expect(resolveSupportedLanguages({})).toEqual([]);
        expect(resolveSupportedLanguages({ default: 'not-an-array' })).toEqual([]);
    });
});

describe("ChatCodeBlock code fence rendering", () => {
    it("renders a known language with Prism despite the wrapped module shape", () => {
        render(<ChatCodeBlock shType="prism">{'```javascript\nconst a = 1;\n```'}</ChatCodeBlock>);

        const prism = screen.getByTestId("prism");
        expect(prism.getAttribute('data-language')).toBe('javascript');
        expect(prism.textContent).toContain('const a = 1;');
    });

    it("renders a fence with no language via Light instead of throwing", () => {
        // The `Photorealistic image for GS release` conversation: the user pasted a
        // bare ``` fence, so `language` is '' - neither 'plaintext' (early return)
        // nor a known Prism language, which is the path that crashed the page.
        render(<ChatCodeBlock shType="prism">{'Info:\n```\nAnnouncing GenericSuite Release\nSecond line\n```\nEnd.'}</ChatCodeBlock>);

        const light = screen.getByTestId("light");
        // The whole fence body belongs in the code block - the first line must not
        // be swallowed into the language header.
        expect(light.textContent).toContain('Announcing GenericSuite Release');
        expect(light.textContent).toContain('Second line');
        expect(light.getAttribute('data-language')).toBe('');
    });

    it("renders the copy control as an icon rather than the word Copy", async () => {
        const writeText = jest.fn().mockResolvedValue(undefined);
        Object.defineProperty(window, 'isSecureContext', { value: true, configurable: true });
        Object.defineProperty(navigator, 'clipboard', { value: { writeText }, configurable: true });

        render(<ChatCodeBlock shType="prism">{'```javascript\nconst a = 1;\n```'}</ChatCodeBlock>);

        const button = screen.getByRole('button', { name: 'Copy code' });
        expect(button.textContent).toBe('');
        const svg = button.querySelector('svg[data-icon="copy"]');
        expect(svg).toBeTruthy();
        // Inherits the button colour instead of painting itself black
        expect(svg?.querySelector('path')?.getAttribute('fill')).toBe('currentColor');

        await userEvent.click(button);

        expect(writeText).toHaveBeenCalledWith('const a = 1;');
        // Swaps to the confirmation icon
        expect(screen.getByRole('button', { name: 'Copied!' })
            .querySelector('svg[data-icon="check"]')).toBeTruthy();
    });

    it("renders plaintext fences as markdown", () => {
        render(<ChatCodeBlock shType="prism">{'```plaintext\nHello there\n```'}</ChatCodeBlock>);

        const markdownText = screen.getAllByTestId("markdown").map(node => node.textContent).join('');
        expect(markdownText).toContain('Hello there');
        expect(screen.queryByTestId("prism")).toBeNull();
        expect(screen.queryByTestId("light")).toBeNull();
    });
});
