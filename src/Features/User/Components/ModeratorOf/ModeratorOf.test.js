import { render, screen } from "@testing-library/react";
import ModeratorOf from "./ModeratorOf";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("widget for moderators", () => {
  it("header should appear", () => {
    //arrange
    render(
      <UserTestingComponent>
        <ModeratorOf />
      </UserTestingComponent>
    );

    //assert
    const headerElement = screen.getByText("Moderator of these communities");
    expect(headerElement).toBeInTheDocument();
  });
});
