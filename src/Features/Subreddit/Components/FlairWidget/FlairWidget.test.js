import FlairWidget from "./FlairWidget";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("Show post flairs", () => {
  it("show topics dropdown", () => {
    render(
      <SubredditTestingComponent>
        <FlairWidget />
      </SubredditTestingComponent>
    );
  });
});
