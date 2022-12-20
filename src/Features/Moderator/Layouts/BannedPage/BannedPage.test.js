import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import BannedPage from "./BannedPage";
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

describe("BannedPage Layout", () => {
  test("banUser word should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <BannedPage />
        </ThemeProvider>
      </BrowserRouter>
    );
    const emailInput = screen.getByTestId("banUser");

    expect(emailInput).toBeInTheDocument();
  });
});
