// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import {BrowserRouter as Router} from "react-router-dom";
// import Enzyme, { shallow } from "enzyme";
import ModeratorWidget from "./ModeratorWidget";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });

describe("moderator widget show all moderators", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<ModeratorWidget />)).toMatchSnapshot();
  // });

  it("render Message the mods and show all moderators", () => {
    //arrange
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <ModeratorWidget />
        </Router>
      </ThemeProvider>
    );

    //assert
    const buttonElement = screen.getByText(/Message the mods/i);
    expect(buttonElement).toBeInTheDocument();
    const buttonElement2 = screen.getByText(/View all moderators/i);
    expect(buttonElement2).toBeInTheDocument();
  });
});