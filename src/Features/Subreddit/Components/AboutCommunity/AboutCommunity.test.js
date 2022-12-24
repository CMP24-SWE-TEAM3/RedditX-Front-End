import { screen, render } from "@testing-library/react";
import AboutCommunity from "./AboutCommunity";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("Header of Community card", () => {
  it("About Community should appear", () => {
    render(
      <SubredditTestingComponent>
        <AboutCommunity />
      </SubredditTestingComponent>
    );
    expect(screen.getByText(/About Community/i)).toBeInTheDocument();
  });
});
