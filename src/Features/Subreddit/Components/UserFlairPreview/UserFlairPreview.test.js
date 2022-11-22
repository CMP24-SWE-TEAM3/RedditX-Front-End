import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import UserFlairPreview from "./UserFlairPreview";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

Enzyme.configure({ adapter: new Adapter() });
describe("preview of selected flair", () => {
  it("should render without crashing", () => {
    expect(shallow(<UserFlairPreview />)).toMatchSnapshot();
  });

  it("show user flair preview", () => {
    //arrange
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <UserFlairPreview />
        </Router>
      </ThemeProvider>
    );

    //assert
    const userFlairElement = screen.getByText(/user flair preview/i);
    expect(userFlairElement).toBeInTheDocument();
  });
});