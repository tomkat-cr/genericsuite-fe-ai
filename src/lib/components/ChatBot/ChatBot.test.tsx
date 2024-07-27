import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { ChatBot } from "./ChatBot.jsx";
import { mockFetch } from '../../test-helpers/mock-fetch'

describe("ChatBot", () => {
    const mockFetchResponse = {
        error: false,
        error_message: '',
        resultset: []
    };
    window.fetch = mockFetch(mockFetchResponse);
    test("renders the ChatBot component", () =>
        act(() => {
            render(<MemoryRouter><ChatBot /></MemoryRouter>);
        })
    )
});
