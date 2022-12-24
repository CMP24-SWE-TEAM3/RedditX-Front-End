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

import MuteUserModal from "./MuteUserModal";

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
jest.mock("Features/Moderator/Services/userManagementApi", () => ({
  __esModule: true, // this property makes it work
  getMutted: function () {
    return {
      communities: [],
    };
  },
}));

const Moderator = {
  _id: "t2_mohamedRomee",
  avatar: "user-t2_moazMohamed-1670710644412.jpg",
  date: "2017-01-01",
  bannedFor: "no reason",
};

const communityName = "t5_imagePro235";

describe("MuteUserModal Layout", () => {
  test("MuteUserModal to be rendered", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <MuteUserModal moderator={Moderator} />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    // const test = screen.getByText("Note about why they are muted");
    // expect(test).toBeInTheDocument();
  });
});
