import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommunityTopics from "./CommunityTopics";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("Add topic and subtopic component", () => {
  it("show topics dropdown", () => {
    render(
      <SubredditTestingComponent>
        <CommunityTopics />
      </SubredditTestingComponent>
    );

    const topicsButtonElement = screen.getByTitle("add-topic");
    userEvent.click(topicsButtonElement);

    const topicsDropdownElement = screen.getByTitle("topics-dropdown");
    expect(topicsDropdownElement).toBeInTheDocument();
  });
});
