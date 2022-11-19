import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, Routes } from "react-router-dom";
import Badge from "./Badge";


const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));


describe("testing navigation of home page", () => {
    test("should render badge button", async () => {
        render(
            <BrowserRouter>
                <Badge theme={"dark"} />
            </BrowserRouter>
        );

        const badgeButton = screen.getByTestId("badgeId");
        badgeButton.click();

        await waitFor(() => {
            expect(screen.queryByTestId('home-page-id')).not.toBeInTheDocument();
        });
    });

});
