// // import Components
// import NotificationButton from "./NotificationButton";
// import { BrowserRouter, Routes } from "react-router-dom";
// import { screen, render, waitFor } from "@testing-library/react";
// import React from "react";
// import { ThemeProvider } from "styled-components";
// import darkTheme from "Theme/darkTheme";
//
// const mockedUsedNavigate = jest.fn();
//
// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useNavigate: () => mockedUsedNavigate,
// }));
//
// describe("Push Notification button Component", () => {
//     test("this is a test for Notification button Component", () => {
//         render(
//             <BrowserRouter>
//                 <ThemeProvider theme={darkTheme}>
//                     <NotificationButton />
//                 </ThemeProvider>
//             </BrowserRouter>
//         );
//         expect(screen.queryByTestId("notificationListId")).not.toBeInTheDocument();
//     });
//
//     test("Notification Popover should be displayed", async () => {
//         render(
//             <BrowserRouter>
//                 <ThemeProvider theme={darkTheme}>
//                     <NotificationButton />
//                 </ThemeProvider>
//             </BrowserRouter>
//         );
//         const notificationButton = screen.getByTestId("notificationButtonId");
//
//         // click on the notification button
//         notificationButton.click();
//         // waitFor active notification to be displayed
//         await waitFor(() => {
//             expect(screen.getByTestId("notificationListId")).toBeInTheDocument();
//         });
//
//
//     });
//
// });