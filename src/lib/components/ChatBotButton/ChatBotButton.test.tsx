import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from "react";
import renderer from 'react-test-renderer';

import { mockGenericsuite } from '../../test-helpers/mock-fetch';
jest.mock('genericsuite', () => {
    const mockGs = mockGenericsuite();
    return mockGs;
});

import { ChatBotButton } from "./ChatBotButton.jsx";

it("renders the ChatBotButton component", () => {
    const component = renderer.create(
        <>
            <input type="text" id="valueElement" defaultValue="any value"></input>
            <ChatBotButton
                valueElement="valueElement"
                chatbot_prompt="Prompt example for subject %s"
            />
        </>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

describe("ChatBotButton functional tests", () => {
    let openSpy: jest.SpyInstance;

    beforeEach(() => {
        openSpy = jest.spyOn(window, 'open').mockImplementation(() => null);
    });

    afterEach(() => {
        openSpy.mockRestore();
    });

    it("sanitizes input and encodes URL when clicked", () => {
        render(
            <>
                <input type="text" id="testInput" defaultValue="Hello <script>alert(1)</script> & welcome" />
                <ChatBotButton
                    valueElement="testInput"
                    chatbot_prompt="User says: %s"
                />
            </>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        // sanitizePromptInput strips < and >
        // Input: Hello <script>alert(1)</script> & welcome
        // Sanitized: Hello scriptalert(1)/script & welcome
        // Expected Prompt: User says: Hello scriptalert(1)/script & welcome
        // Encoded prompt should handle spaces and &

        expect(openSpy).toHaveBeenCalled();
        const url = openSpy.mock.calls[0][0];
        expect(url).toContain('q=User%20says%3A%20Hello%20scriptalert(1)%2Fscript%20%26%20welcome');
        expect(url).not.toContain('<script>');
    });
});
