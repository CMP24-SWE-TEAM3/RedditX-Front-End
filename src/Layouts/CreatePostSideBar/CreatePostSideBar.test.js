// import Components
import CreatePostSideBar from "./CreatePostSideBar";
import { BrowserRouter, Routes } from "react-router-dom";
import { screen, render, waitFor } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Create Post Component", () => {
  test("this is a test for side-bar post Component", () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CreatePostSideBar />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("modalID")).not.toBeInTheDocument();
  });

  test("Modal should be found", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <CreatePostSideBar />
        </ThemeProvider>
      </BrowserRouter>
    );
    const createCommunityButton = screen.getByTestId("createModalID");

    createCommunityButton.click();
    await waitFor(() => {
      expect(screen.getByTestId("modalID")).toBeInTheDocument();
    });


  });

});