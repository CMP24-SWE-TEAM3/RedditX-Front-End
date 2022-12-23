import { render } from "@testing-library/react";
import SetSUbReddit from "./SetSUbReddit";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("Component set community info", () => {
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
