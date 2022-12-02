// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
// import Enzyme, { shallow } from "enzyme";
import CategoryBar from "./CategoryBar";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });

describe("Category bar", () => {

  // it("should render without crashing", () => {
  //   expect(shallow(<CategoryBar />)).toMatchSnapshot();
  // });

  it("check rendering icons", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <CategoryBar />
        </Router>
      </ThemeProvider>
    );

    const hotElements = screen.getAllByText(/hot/i);
    const newElements = screen.getAllByText(/new/i);
    const topElements = screen.getAllByText(/top/i);

    expect(hotElements).not.toHaveLength(0);
    expect(newElements).not.toHaveLength(0);
    expect(topElements).not.toHaveLength(0);
  });
});