import { render } from "@testing-library/react";

import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// import Components
import Post from "./Post";

describe("Post Button Component", () => {
  it("this is a test for Post Button", () => {
    render(
      <SubredditTestingComponent>
        <Post />
      </SubredditTestingComponent>
    );
  });
});
