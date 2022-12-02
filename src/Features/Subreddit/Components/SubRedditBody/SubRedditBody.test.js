// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import SubRedditBody from "./SubRedditBody";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


// Enzyme.configure({ adapter: new Adapter() });

describe("all components after header", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<SubRedditBody />)).toMatchSnapshot();
  // });

  it("should render body without crashing", () => {
    render(
      <SubredditTestingComponent>
        <SubRedditBody />
      </SubredditTestingComponent>
    );
  });
});
