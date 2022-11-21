import { shallow } from "enzyme";
import { screen, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import PostBar from "./PostBar";
import { BrowserRouter } from "react-router-dom";

describe("PostBar Component", () => {
  const wrapper = shallow(<PostBar />);

  it("this is a test for PostBar Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
