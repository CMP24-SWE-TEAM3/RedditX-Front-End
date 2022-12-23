import { render, screen } from "@testing-library/react";
import SubRedditNoPosts from "./SubRedditNoPosts";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("component appear when there is no posts", () => {
  it("should render body without crashing", () => {
    render(
      <SubredditTestingComponent>
        <SubRedditNoPosts />
      </SubredditTestingComponent>
    );

    const textElement = screen.getByText(
      "There are no posts in this subreddit"
    );
    expect(textElement).toBeInTheDocument();
  });
});
