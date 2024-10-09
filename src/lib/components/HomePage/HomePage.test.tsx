import React from "react";
import renderer from 'react-test-renderer';

// import * as gs from "genericsuite";

// const mockFetch = gs.testHelpersMocks.mockFetch;
// const mockAuthService = gs.testHelpersMocks.mockAuthService;
// const mockUserData = gs.testHelpersMocks.mockUserData;

// let mockJestObjects = [];
// mockJestObjects.push(mockAuthService());
// mockJestObjects.push(mockUserData());
// let mockObj = null as any;
// for (let i = 0; i < mockJestObjects.length; i++) {
//     mockObj = mockJestObjects[i].response;
//     jest.mock('../../' + mockJestObjects[i].codeFile, () => (mockObj));
// }

// Reference:
// https://jestjs.io/docs/snapshot-testing

// TODO: This test fails if genericsuite is mocked
// because the logged-in user condition cannot be forced
// for the snapshot of the unmocked Homepage component.

// This is the right way to mock one genericsuite library property or method.
// All of the involved ones on this test must be mocked...
// The function name that returns the array of mocked objects should begin with "mock", and must be a function, not a constant.
import { mockGenericsuite } from '../../test-helpers/mock-fetch'
jest.mock('genericsuite', () => {
  const mockGs = mockGenericsuite(); 
  return mockGs;
});

// import { App } from "../App/App.jsx";
import { HomePage } from "./HomePage.jsx";

// const testComponentMap = {
//     "HomePage": () => (
//         <HomePage>
//             <p>GS FE AI HomePage Children text 123</p>
//             <p>GS FE AI HomePage Children text 456</p>
//             <p>GS FE AI HomePage Children text 789</p>
//         </HomePage>
//     )
// }

it("renders the HomePage component with the children text", () => {
    // const mockFetchResponse = [{}];
    // window.fetch = mockFetch(mockFetchResponse);
    const component = renderer.create(
        <HomePage>
            <p>GS FE AI HomePage Children text 123</p>
            <p>GS FE AI HomePage Children text 456</p>
            <p>GS FE AI HomePage Children text 789</p>
        </HomePage>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
