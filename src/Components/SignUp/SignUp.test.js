// import Components;
import {BrowserRouter, Routes} from "react-router-dom";
import {screen, render, fireEvent} from "@testing-library/react";
import React from "react";
import {ThemeProvider} from "styled-components";
import darkTheme from "Theme/darkTheme";
import {shallow} from "enzyme";
import SignUp from "./SignUp";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Signup button Component", () => {
    const setModalShow = jest.fn();
    shallow(
        <SignUp
            setModalShowSignUp={setModalShow}
        />
    );
    test("this is a test for signup button Component", () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <SignUp setModalShowSignUp={setModalShow}/>
                </ThemeProvider>
            </BrowserRouter>
        );
        expect(screen.queryByTestId("signupModalId")).not.toBeInTheDocument();
    });
    test("Signup Modal should be displayed", async () => {
        render(
            <BrowserRouter>
                <ThemeProvider theme={darkTheme}>
                    <SignUp setModalShowSignUp={setModalShow}/>
                </ThemeProvider>
            </BrowserRouter>
        );
        const signupButton = screen.getByTestId("signupId");

        // click on the signup button
        fireEvent.click(signupButton);
        // waitFor active signup modal to be displayed
        expect(screen.getByText("Sign Up")).toBeInTheDocument();


    });

});