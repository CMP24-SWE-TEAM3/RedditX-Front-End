import React from "react";
import { BrowserRouter, Routes } from "react-router-dom/dist";
import darkTheme from "Theme/darkTheme";
import { ThemeProvider } from "styled-components";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";
// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// import Components
import RuleModal from "./RuleModal";

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
const ruleData = [
  {
    srName: "t5_mangaa",
    title: "Test",
    description: "management",
    reason: "test",
  },
];

describe("Rule Modal Component", () => {
  test("Rule Modal should be appeard", async () => {
    render(
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider theme={darkTheme}>
            <RuleModal ruleData={ruleData} />
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    );
    const test = screen.getByText("Report reason");
    expect(test).toBeInTheDocument();
  });
});
