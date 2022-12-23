import { screen, render } from "@testing-library/react";
import LinkButton from "./LinkButton";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("Header of Community card", () => {
  it("About Community should appear", () => {
    render(
      <SubredditTestingComponent>
        <LinkButton />
      </SubredditTestingComponent>
    );
  });
});
