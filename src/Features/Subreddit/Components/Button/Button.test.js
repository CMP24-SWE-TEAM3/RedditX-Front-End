import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

function onJoin() {
  console.log("click Join");
}

describe("Join and Leave button", () => {
  it("should have text join", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <Button isJoined={false} onJoin={onJoin} />
      </SubredditTestingComponent>
    );

    //assert
    const buttonElement = screen.getByText(/join/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it("text should change", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <Button isJoined={true} onJoin={onJoin} />
      </SubredditTestingComponent>
    );

    //act
    const button = screen.getByRole("button");
    userEvent.click(button);

    //assert
    const buttonElement = screen.getByText(/joined/i);
    expect(buttonElement).toBeInTheDocument();
    // expect(button).toHaveTextContent("join");

    userEvent.hover(button);
    const leaveElement = screen.getByText(/leave/i);
    expect(leaveElement).toBeInTheDocument();
  });
});
