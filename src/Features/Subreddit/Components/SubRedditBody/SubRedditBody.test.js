// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import SubRedditBody from "./SubRedditBody";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { BrowserRouter as Router } from "react-router-dom";

const theme = { ...defaultTheme, ...lightTheme };


// Enzyme.configure({ adapter: new Adapter() });

describe("all components after header", () => {

  // it("should render without crashing", () => {
  //   expect(shallow(<SubRedditBody />)).toMatchSnapshot();
  // });

  it("should render body without crashing", () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <SubRedditProvider>
            <SubRedditBody />
          </SubRedditProvider>
        </ThemeProvider>
      </Router>
    );
  });
});
