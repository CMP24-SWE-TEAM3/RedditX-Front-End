import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, {  shallow } from "enzyme";
// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import CommunityDate from "./CommunityDate";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
// import { ThemeProvider } from "styled-components";
// import defaultTheme from "Theme/defaultTheme";
// import lightTheme from "Theme/lightTheme";

// const theme = { ...defaultTheme, ...lightTheme };

Enzyme.configure({ adapter: new Adapter() });
describe("Description and created date of subreddit", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SubRedditProvider>
          <CommunityDate />
        </SubRedditProvider>
      )
    ).toMatchSnapshot();
  });

  // it("textarea should appear", () => {
  //   //Arrange
  //   render(
  //     <ThemeProvider theme={theme}>
  //       <SubRedditProvider>
  //         <CommunityDate />
  //       </SubRedditProvider>
  //     </ThemeProvider>
  //   );

  //   //Act 
  //   const descriptionElement = screen.getByTitle("description-container");
  //   userEvent.click(descriptionElement);

  //   //Assert
  //   const textAreaElement = screen.getByRole("textarea");
  //   expect(textAreaElement).toBeInTheDocument();
  // });
});
