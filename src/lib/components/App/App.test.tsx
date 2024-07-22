import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { App } from "./App";
import { mockFetch } from '../../test-helpers/mock-fetch'

// https://jestjs.io/docs/tutorial-react

describe("App", () => {
    const mockFetchResponse = [{}];
    window.fetch = mockFetch(mockFetchResponse);
    test("renders the App component", () =>
        act(() => {
            render(<MemoryRouter><App /></MemoryRouter>);
        })
    )
});
