import React from "react";
import renderer from 'react-test-renderer';

import { mockGenericsuite } from '../../test-helpers/mock-fetch'
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
