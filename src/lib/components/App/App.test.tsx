import React from "react";
import renderer from 'react-test-renderer';

import { mockGenericsuite } from '../../test-helpers/mock-fetch'
jest.mock('genericsuite', () => {
  const mockGs = mockGenericsuite(); 
  return mockGs;
});

import { App } from "./App";

// import { mockFetch } from '../../test-helpers/mock-fetch'

// import * as gs from "genericsuite";
// const mockFetch = gs.testHelpersMocks.mockFetch;

// https://jestjs.io/docs/tutorial-react

// const mockFetchResponse = [{}];
// window.fetch = mockFetch(mockFetchResponse);

it("renders the App component", () => {
    const component = renderer.create(
        <>
            <App/>
        </>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
