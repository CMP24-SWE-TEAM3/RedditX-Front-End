// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Enzyme, { shallow } from "enzyme";
import CommunityTopics from "./CommunityTopics";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });

describe("Add topic and subtopic component", () => {
  
  // it("should render without crashing", () => {
  //   expect(shallow(<CommunityTopics />)).toMatchSnapshot();
  // });

  it("show topics dropdown", () => {
    render(
      <ThemeProvider theme={theme}>
        <CommunityTopics />
      </ThemeProvider>
    );

    const topicsButtonElement = screen.getByTitle("add-topic");
    userEvent.click(topicsButtonElement);

    const topicsDropdownElement = screen.getByTitle("topics-dropdown");
    expect(topicsDropdownElement).toBeInTheDocument();

  });
});