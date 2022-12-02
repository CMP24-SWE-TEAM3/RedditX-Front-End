import { render } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { BrowserRouter as Router } from "react-router-dom";
import SubRedditSideBar from "./SubRedditSideBar";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });

describe("sidebar of subreddit", () => {
  
  // it("should render without crashing", () => {
  //   expect(shallow(<SubRedditSideBar />)).toMatchSnapshot();
  // });

  it("should render sidebar without crashing", () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <SubRedditProvider>
            <SubRedditSideBar />
          </SubRedditProvider>
        </ThemeProvider>
      </Router>
    );
  });
});
