// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import SetSUbReddit from "./SetSUbReddit";
// import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("Component set community info", () => {
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(
  //       <SubRedditProvider>
  //         <SetSUbReddit />
  //       </SubRedditProvider>
  //     )
  //   ).toMatchSnapshot();
  // });

  it("render setSubreddit", () => {
    render(
      <SubredditTestingComponent>
        <SetSUbReddit>
          <></>
        </SetSUbReddit>
      </SubredditTestingComponent>
    );
  });
});
