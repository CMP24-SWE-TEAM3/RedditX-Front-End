// // import Components
// import { BrowserRouter, Routes } from "react-router-dom";
// import { screen, render, waitFor } from "@testing-library/react";
// import React from "react";
// import { ThemeProvider } from "styled-components";
// import darkTheme from "Theme/darkTheme";
// import SignUp from "./SignUp";

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: () => mockedUsedNavigate,
// }));

// describe("Signup button Component", () => {
//     test("this is a test for Sign up button Component", () => {
//         render(
//             <BrowserRouter>
//                 <ThemeProvider theme={darkTheme}>
//                     <SignUp />
//                 </ThemeProvider>
//             </BrowserRouter>
//         );
//         expect(screen.queryByTestId("signupModalId")).not.toBeInTheDocument();
//     });

//     test("Sign up Modal should be displayed", async () => {
//         render(
//             <BrowserRouter>
//                 <ThemeProvider theme={darkTheme}>
//                     <SignUp />
//                 </ThemeProvider>
//             </BrowserRouter>
//         );
//         const loginButton = screen.getByTestId("signupId");

//         // click on the sign-up button
//         loginButton.click();
//         // waitFor active sign up modal to be displayed
//         await waitFor(() => {
//             expect(screen.getByTestId("signupModalId")).toBeInTheDocument();
//         });


//     });

// });