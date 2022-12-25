import NoSubReddit from "./NoSubReddit";
import { screen, render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("no post component", () => {
  it("show topics dropdown", () => {
    render(
      <SubredditTestingComponent>
        <NoSubReddit />
      </SubredditTestingComponent>
    );

    const textElement = screen.getByText("Go Home");
    expect(textElement).toBeInTheDocument();
  });
});
