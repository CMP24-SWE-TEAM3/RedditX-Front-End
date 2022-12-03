import { render } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import SubRedditSideBar from "./SubRedditSideBar";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("sidebar of subreddit", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<SubRedditSideBar />)).toMatchSnapshot();
  // });

  it("should render sidebar without crashing", () => {
    render(
      <SubredditTestingComponent>
        <SubRedditSideBar />
      </SubredditTestingComponent>
    );
  });
});
