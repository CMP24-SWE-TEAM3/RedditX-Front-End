// // import Components
// import LoginButton from "./LoginButton";
// import { BrowserRouter, Routes } from "react-router-dom";
// import { screen, render, waitFor } from "@testing-library/react";
// import React from "react";
// import { ThemeProvider } from "styled-components";
// import darkTheme from "Theme/darkTheme";

// const mockedUsedNavigate = jest.fn();

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: () => mockedUsedNavigate,
// }));

// describe("Login button Component", () => {
//     test("this is a test for Login button Component", () => {
//         render(
//             <BrowserRouter>
//                 <ThemeProvider theme={darkTheme}>
//                     <LoginButton />
//                 </ThemeProvider>
//             </BrowserRouter>
//         );
//         expect(screen.queryByTestId("loginModalId")).not.toBeInTheDocument();
//     });

//     test("Login Modal should be displayed", async () => {
//         render(
//             <BrowserRouter>
//                 <ThemeProvider theme={darkTheme}>
//                     <LoginButton />
//                 </ThemeProvider>
//             </BrowserRouter>
//         );
//         const loginButton = screen.getByTestId("loginId");

//         // click on the login button
//         loginButton.click();
//         // waitFor active login modal to be displayed
//         await waitFor(() => {
//             expect(screen.getByTestId("loginModalId")).toBeInTheDocument();
//         });


//     });

// });