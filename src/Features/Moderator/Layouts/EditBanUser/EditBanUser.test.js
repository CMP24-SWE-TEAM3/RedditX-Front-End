import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";


// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";
import EditBanUser from "./EditBanUser";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock("Features/Authentication/Contexts/Authentication", () => ({
  __esModule: true, // this property makes it work
  useAuth: function () {
    return {
      getToken: jest.fn().mockReturnValue("token"),
    };
  },
  AuthProvider: ({ children }) => {
    return (
      <mock-authprovider data-testid="auth-provider">
        {children}
      </mock-authprovider>
    );
  },
}));
jest.mock("Features/Moderator/Services/communitySettingsApi", () => ({
  __esModule: true, // this property makes it work
  getCommunitySettings: function () {
    return {
      communities: [],
    };
  },
}));

const moderator = {
  bannedFor: "bannedFor",
  modeNote: "umodeNote",
  reason: "reason",
};

const communityName = "t5_imagePro235";

describe("EditBanUser Layout", () => {
  test("aproveUser word should be found", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <EditBanUser moderator={moderator}/>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
        const test =  screen.getByText('REASON FOR BAN');
        expect(test).toBeInTheDocument();
  });
});
