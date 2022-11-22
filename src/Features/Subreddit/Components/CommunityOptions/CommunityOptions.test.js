// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Enzyme, { shallow } from "enzyme";
import CommunityOptions from "./CommunityOptions";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });

describe("Community options drop down", () => {
 
  // it("should render without crashing", () => {
  //   expect(shallow(<CommunityOptions />)).toMatchSnapshot();
  // });

  it("show Community options",()=>{
    render(
      <ThemeProvider theme={theme}>
        <CommunityOptions />
      </ThemeProvider>
    );
    const communityOptionElement = screen.getByText("community options");
    expect(communityOptionElement).toBeInTheDocument();
  });

  it("show Community theme",()=>{
    render(
      <ThemeProvider theme={theme}>
        <CommunityOptions />
      </ThemeProvider>
    );
    const communityOptionElement = screen.getByText(/community options/i);
    userEvent.click(communityOptionElement);

    const communityThemeElement = screen.getByText(/Community theme/i);
    expect(communityThemeElement).toBeInTheDocument();
  });
});