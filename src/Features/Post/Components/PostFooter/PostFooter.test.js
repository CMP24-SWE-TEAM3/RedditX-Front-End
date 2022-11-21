import { shallow } from "enzyme";
import { screen, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import PostFooter from "./PostFooter";
import { BrowserRouter } from "react-router-dom";


describe("PostFooter Component", () => {
  const wrapper = shallow(<PostFooter  />);

  it("this is a test for PostFooter Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

 
});
