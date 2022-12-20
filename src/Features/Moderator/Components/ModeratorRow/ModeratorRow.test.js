import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import ModeratorRow from "./ModeratorRow";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import darkTheme from "Theme/darkTheme";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const Moderator = {
  _id: "t2_mohamedRomee",
  avatar: "user-t2_moazMohamed-1670710644412.jpg",
  date: "2017-01-01",
  bannedFor: "no reason",
};

const communityName = "t5_imagePro235";

describe("ModeratorRow Layout", () => {
  test("delete icon should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ModeratorRow
            Moderator={Moderator}
            communityName={communityName}
            invited={true}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("deleteMod");

    expect(emailInput).toBeInTheDocument();
  });
 
  test("message word should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ModeratorRow
            Moderator={Moderator}
            communityName={communityName}
            approved={true}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("sendMessage");

    expect(emailInput).toBeInTheDocument()
    expect(screen.queryByTestId("deleteMod")).not.toBeInTheDocument();
  });
 
  test("unmute word should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ModeratorRow
            Moderator={Moderator}
            communityName={communityName}
            muted={true}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("unMuteUser");

    expect(emailInput).toBeInTheDocument();
  });
 
 
  test("edit word should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <ModeratorRow
            Moderator={Moderator}
            communityName={communityName}
            banned={true}
          />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("unBanUser");

    expect(emailInput).toBeInTheDocument();
  });
 
});
