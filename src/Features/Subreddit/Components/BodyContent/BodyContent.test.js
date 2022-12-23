import BodyContent from "./BodyContent";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("Content of Subreddit", () => {
  it("should render Content of Subreddit without crashing", () => {
    render(
      <SubredditTestingComponent>
        <BodyContent />
      </SubredditTestingComponent>
    );
  });
});
