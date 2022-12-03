// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import BodyContent from "./BodyContent";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


// Enzyme.configure({ adapter: new Adapter() });

describe("Content of Subreddit", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<BodyContent />)).toMatchSnapshot();
  // });

  it("should render Content of Subreddit without crashing", () => {
    render(
      <SubredditTestingComponent>
        <BodyContent />
      </SubredditTestingComponent>
    );
  });
});
