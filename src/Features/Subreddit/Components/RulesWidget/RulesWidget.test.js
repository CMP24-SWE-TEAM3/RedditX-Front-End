// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import RulesWidget from "./RulesWidget";
// import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("widget show rules", () => {
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(
  //       <SubRedditProvider>
  //         <RulesWidget />
  //       </SubRedditProvider>
  //     )
  //   ).toMatchSnapshot();
  // });

  it("show rules", () => {
    render(
      <SubredditTestingComponent>
        <RulesWidget />
      </SubredditTestingComponent>
    );
  });
});
