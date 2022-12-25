import { render, screen } from "@testing-library/react";
import AdultPage from "./AdultPage";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("Adult page appear for +18", () => {
  it("should have text +18", () => {
    //arrange
    render(
      <UserTestingComponent>
        <AdultPage
          onHide={() => {
            console.log("hide");
          }}
        />
      </UserTestingComponent>
    );

    //assert
    const headerElement = screen.getByText("You must be 18+ to view this User");
    expect(headerElement).toBeInTheDocument();
  });
});
