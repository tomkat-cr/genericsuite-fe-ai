import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import { ChatBotButton } from "./ChatBotButton.jsx";

describe("ChatBotButton", () => {
    test("renders the ChatBotButton component", () =>
        act(() => {
            render(
                <MemoryRouter>
                    <input type="text" id="valueElement" defaultValue="any value"></input>
                    <ChatBotButton
                        valueElement="valueElement"
                        chatbot_prompt="Prompt example for subject %s"
                    />
                </MemoryRouter>
            );
        })
    )
});
