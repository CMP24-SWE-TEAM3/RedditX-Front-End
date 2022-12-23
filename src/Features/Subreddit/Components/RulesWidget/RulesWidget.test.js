import { render } from "@testing-library/react";
import RulesWidget from "./RulesWidget";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("widget show rules", () => {
  it("show rules", () => {
    render(
      <SubredditTestingComponent>
        <RulesWidget />
      </SubredditTestingComponent>
    );
  });
});
