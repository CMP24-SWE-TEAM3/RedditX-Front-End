import { render } from "@testing-library/react";
import SubRedditPosts from "./SubRedditPosts";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("all components after header", () => {
  it("should render body without crashing", () => {
    render(
      <SubredditTestingComponent>
        <SubRedditPosts />
      </SubredditTestingComponent>
    );
  });
});
