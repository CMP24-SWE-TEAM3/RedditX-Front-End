// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import ModeratorWidget from "./ModeratorWidget";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


// Enzyme.configure({ adapter: new Adapter() });

describe("moderator widget show all moderators", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<ModeratorWidget />)).toMatchSnapshot();
  // });

  it("render Message the mods and show all moderators", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <ModeratorWidget />
      </SubredditTestingComponent>
    );

    //assert
    const buttonElement = screen.getByText(/Message the mods/i);
    expect(buttonElement).toBeInTheDocument();
    const buttonElement2 = screen.getByText(/View all moderators/i);
    expect(buttonElement2).toBeInTheDocument();
  });
});
