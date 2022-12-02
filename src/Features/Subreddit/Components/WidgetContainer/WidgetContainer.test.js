// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import WidgetContainer from "./WidgetContainer";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("container for widgets", () => {
  // it("this is a test for Community Container", () => {
  //   expect(
  //     shallow(
  //       <WidgetContainer headerText="header">
  //         <></>
  //       </WidgetContainer>
  //     )
  //   ).toMatchSnapshot();
  // });

  it("text in header should appear", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <WidgetContainer headerText="header">
          <></>
        </WidgetContainer>
      </SubredditTestingComponent>
    );

    //assert
    const headerElement = screen.getByText("header");
    expect(headerElement).toBeInTheDocument();
  });
});
