// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { screen, render } from "@testing-library/react";
import AboutCommunity from "./AboutCommunity";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { BrowserRouter as Router } from "react-router-dom";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });
describe("Header of Community card", () => {

  // it("should render without crashing", () => {
  //   expect(shallow(<AboutCommunity />)).toMatchSnapshot();
  // });

  it("About Community should appear", () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <AboutCommunity />
        </ThemeProvider>
      </Router>
    );
    expect(screen.getByText(/About Community/i)).toBeInTheDocument();
  });
})