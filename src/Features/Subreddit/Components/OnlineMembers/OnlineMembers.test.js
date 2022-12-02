// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import OnlineMembers from "./OnlineMembers";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("show members and online members", () => {
  
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(
  //       <SubRedditProvider>
  //         <OnlineMembers />
  //       </SubRedditProvider>
  //     )
  //   ).toMatchSnapshot();
  // });

  it("show members and online members", () => {
    render(
      <SubredditTestingComponent>
        <OnlineMembers />
      </SubredditTestingComponent>
    );
  });
});
