import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import WidgetContainer from "./WidgetContainer";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

Enzyme.configure({ adapter: new Adapter() });
describe("container for widgets", () => {
  it("this is a test for Community Container", () => {
    expect(
      shallow(
        <WidgetContainer headerText="header">
          <></>
        </WidgetContainer>
      )
    ).toMatchSnapshot();
  });

  it("text in header should appear", () => {
    //arrange
    render(
      <ThemeProvider theme={theme}>
        <WidgetContainer headerText="header">
          <></>
        </WidgetContainer>
      </ThemeProvider>
    );

    //assert
    const headerElement = screen.getByText("header");
    expect(headerElement).toBeInTheDocument();
  });
});
