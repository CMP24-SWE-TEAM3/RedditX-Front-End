import { shallow } from "enzyme";
import { screen, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import PostShape from "./PostShape";
import { BrowserRouter } from "react-router-dom";

describe("PostShape Component", () => {
  const wrapper = shallow(<PostShape />);

  it("this is a test for PostShape Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
