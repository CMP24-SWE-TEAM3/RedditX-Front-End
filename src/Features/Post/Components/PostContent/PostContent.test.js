import { shallow } from "enzyme";
import { screen, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import PostContent from "./PostContent";
import { BrowserRouter } from "react-router-dom";

describe("PostContent Component", () => {
  const wrapper = shallow(<PostContent />);

  it("this is a test for PostContent Component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
