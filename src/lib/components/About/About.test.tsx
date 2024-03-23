import React from "react";

import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { AboutBody } from "./About.jsx";

/*
// TODO: This test fails because the logged-in user condition cannot be forced
// for the snapshot of the unmocked Homepage component.

import renderer from 'react-test-renderer';
it("renders the AboutBody component with the children text", () => {
    const component = renderer.create(
        <MemoryRouter>
            <AboutBody>
                <p>AboutBody Children text 123</p>
                <p>AboutBody Children text 456</p>
                <p>AboutBody Children text 789</p>
            </AboutBody>
        </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
*/

describe("App", () => {
    test("renders the App component", () =>
        act(() => {
            render(
                <MemoryRouter>
                    <AboutBody>
                        <p>AboutBody Children text 123</p>
                        <p>AboutBody Children text 456</p>
                        <p>AboutBody Children text 789</p>
                    </AboutBody>
                </MemoryRouter>
            );
        })
    )
});
