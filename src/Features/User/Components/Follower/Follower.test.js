import { render, screen } from "@testing-library/react";
import Follower from "./Follower";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("Adult page appear for +18", () => {
  it("should have text +18", () => {
    //arrange
    render(
      <UserTestingComponent>
        <Follower followerID="t2_khaled" avatar="#" />
      </UserTestingComponent>
    );

    //assert
    const followerElement = screen.getByText("khaled");
    expect(followerElement).toBeInTheDocument();
  });
});
