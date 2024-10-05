import React from "react";

import renderer from 'react-test-renderer';

import { mockGenericsuite } from '../../test-helpers/mock-fetch'
jest.mock('genericsuite', () => {
  const mockGs = mockGenericsuite(); 
  return mockGs;
});

import { ChatBot } from "./ChatBot.jsx";

it("renders the ChatBot component", () => {
    const component = renderer.create(
        <>
            <ChatBot/>
        </>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
