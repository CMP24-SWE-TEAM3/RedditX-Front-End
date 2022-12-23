import { render, screen } from "@testing-library/react";
import UserNoPosts from "./UserNoPosts";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("component when there is no posts", () => {
  it("text should appear", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserNoPosts text="this text has to appear" />
      </UserTestingComponent>
    );

    //assert
    const textElement = screen.getByText("this text has to appear");
    expect(textElement).toBeInTheDocument();
  });
});
