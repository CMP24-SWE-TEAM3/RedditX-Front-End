// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Enzyme, { shallow } from "enzyme";
import Button from "./Button";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


function onJoin() {
  console.log("click Join");
}

// Enzyme.configure({ adapter: new Adapter() });

describe("Join and Leave button", () => {
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(<Button isJoined={isJoined} onJoin={onJoin} />)
  //   ).toMatchSnapshot();
  // });

  it("should have text joined", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <Button isJoined={true} onJoin={onJoin} />
      </SubredditTestingComponent>
    );

    //assert
    const buttonElement = screen.getByText("joined");
    expect(buttonElement).toBeInTheDocument();
    // expect(button).toHaveTextContent("join");
  });

  it("should have text join", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <Button isJoined={false} onJoin={onJoin} />
      </SubredditTestingComponent>
    );

    //assert
    const buttonElement = screen.getByText("join");
    expect(buttonElement).toBeInTheDocument();
    // expect(button).toHaveTextContent("join");
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
    userEvent.hover(button);

    //assert
    const buttonElement = screen.getByText("leave");
    expect(buttonElement).toBeInTheDocument();
    // expect(button).toHaveTextContent("join");
  });
});
