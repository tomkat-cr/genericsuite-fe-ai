import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { ChatBot } from "./ChatBot";

describe("ChatBot", () => {
    test("renders the ChatBot component", () =>
        act(() => {
            render(<MemoryRouter><ChatBot /></MemoryRouter>);
        })
    )
});
