// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Enzyme, { shallow } from "enzyme";
import Button from "./Button";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

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
      <ThemeProvider theme={theme}>
        <Button isJoined={true} onJoin={onJoin} />
      </ThemeProvider>
    );

    //assert
    const buttonElement = screen.getByText("joined");
    expect(buttonElement).toBeInTheDocument();
    // expect(button).toHaveTextContent("join");
  });

  it("should have text join", () => {
    //arrange
    render(
      <ThemeProvider theme={theme}>
        <Button isJoined={false} onJoin={onJoin} />
      </ThemeProvider>
    );


    //assert
    const buttonElement = screen.getByText("join");
    expect(buttonElement).toBeInTheDocument();
    // expect(button).toHaveTextContent("join");
  });

  it("text should change", () => {
    //arrange
    render(
      <ThemeProvider theme={theme}>
        <Button isJoined={true} onJoin={onJoin} />
      </ThemeProvider>
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