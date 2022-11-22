// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import BodyContent from "./BodyContent";
import {render} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { BrowserRouter as Router } from "react-router-dom";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });

describe("Content of Subreddit", () => {

  // it("should render without crashing", () => {
  //   expect(shallow(<BodyContent />)).toMatchSnapshot();
  // });

  it("should render Content of Subreddit without crashing", () => {
    render(
      <Router>
        <ThemeProvider theme={theme}>
          <BodyContent />
        </ThemeProvider>
      </Router>
    );
  });
});
