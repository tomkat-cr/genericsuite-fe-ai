import React from "react";
import renderer from 'react-test-renderer';
// import { render } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import { act } from "react-dom/test-utils";

import { ChatBotButton } from "./ChatBotButton.jsx";

// describe("ChatBotButton", () => {
//     test("renders the ChatBotButton component", () =>
//         act(() => {
//             render(
//                 <MemoryRouter>
//                     <input type="text" id="valueElement" defaultValue="any value"></input>
//                     <ChatBotButton
//                         valueElement="valueElement"
//                         chatbot_prompt="Prompt example for subject %s"
//                     />
//                 </MemoryRouter>
//             );
//         })
//     )
// });

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
