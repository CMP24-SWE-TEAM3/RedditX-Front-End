// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import FlairWidget from "./FlairWidget";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("Show post flairs", () => {
  
  // it("should render without crashing", () => {
  //   expect(shallow(<FlairWidget />)).toMatchSnapshot();
  // });

  it("show topics dropdown", () => {
    render(
      <SubredditTestingComponent>
        <FlairWidget />
      </SubredditTestingComponent>
    );
  })
});
