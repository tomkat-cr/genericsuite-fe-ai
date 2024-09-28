import React from "react";

import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { HomePage } from "./HomePage.jsx";

// Reference:
// https://jestjs.io/docs/snapshot-testing

// TODO: This test fails if genericsuite is mocked
// because the logged-in user condition cannot be forced
// for the snapshot of the unmocked Homepage component.

it("renders the HomePage component with the LoginPage", () => {
    const component = renderer.create(
        <HomePage
        >
            <p>Some children is mandatory</p>
        </HomePage>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

// This is the right way to mock one genericsuite library property or method.
// All of the involved ones on this test must be mocked...
jest.mock('genericsuite', () => ({
    // Emulate a logged-in user
    authenticationService: {
        currentUserValue: {
          token: 'Mocked token',
        }
    },
    // To fix the error: "TypeError: (0 , _authenticationService.getUserData) is not a function"
    getUserData: () => Promise.resolve({
        error: false,
        error_message: null,
        resultset: {
            _id: 'mockedUserId',
            first_name: 'Mocked firstName',
            last_name: 'Mocked lastName',
            superuser: 0,
        }
    }),
    getCurrentUserData: () => Promise.resolve({resultset: {
        error: false,
        error_message: null,
        resultset: {
            _id: 'mockedUserId',
            first_name: 'Mocked firstName',
            last_name: 'Mocked lastName',
            superuser: 0,
        }
    }}),
    // Emulate console_debug_log
    loggingService: {
        console_debug_log: jest.fn(),
    },
    // Emulate images handling
    generalConstants: {
        imageDirectory: '/mocked/image/directory/',
    },
    spark: 'mockedSparkIcon.svg',
    // Emulate genericsuite's HomePage componnent
    HomePage: jest.fn().mockImplementation(({ children }) => (
        <div>{children}</div>
    )),
}));

describe("App", () => {
    test("renders the HomePage component with the children text", () =>
        act(() => {
            render(
                <HomePage
                >
                    <p>HomePage Children text 123</p>
                    <p>HomePage Children text 456</p>
                    <p>HomePage Children text 789</p>
                </HomePage>
            );
        })
    )
});
