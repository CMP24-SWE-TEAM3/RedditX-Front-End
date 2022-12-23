import { render, screen } from "@testing-library/react";
import UserNotFound from "./UserNotFound";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("Adult page appear for +18", () => {
  it("should have text +18", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserNotFound />
      </UserTestingComponent>
    );

    //assert
    const massageElement = screen.getByText(
      "The person may have been banned or the username is incorrect"
    );
    expect(massageElement).toBeInTheDocument();
  });
});
