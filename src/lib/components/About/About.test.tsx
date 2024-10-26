import React from "react";
import { MemoryRouter } from "react-router-dom";
import renderer from 'react-test-renderer';

import * as gs from "genericsuite";

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: jest.fn(() => null)
}));

import { AboutBody } from "./About.jsx";

const UserProvider = gs.UserContext.UserProvider;
const AppProvider = gs.AppContext.AppProvider;

// import { mockDefaultComponentMap } from "../../test-helpers/mocks";
const mockDefaultComponentMap = gs.testHelpersMocks.mockDefaultComponentMap;


it("renders the AboutBody component with the children text", () => {
  const component = renderer.create(
    <MemoryRouter>
      <UserProvider>
          <AppProvider
              globalComponentMap={mockDefaultComponentMap()}
          >
            <AboutBody
              modalPopUpTest={false}
            >
              <p>GS FE AI AboutBody Children text 123</p>
              <p>GS FE AI AboutBody Children text 456</p>
              <p>GS FE AI AboutBody Children text 789</p>
            </AboutBody>

          </AppProvider>
      </UserProvider>
  </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
