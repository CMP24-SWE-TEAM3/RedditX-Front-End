import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Enzyme, { shallow } from "enzyme";
import CommunityOptions from "./CommunityOptions";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("Community options drop down", () => {
  it("show Community options", () => {
    render(
      <SubredditTestingComponent>
        <CommunityOptions />
      </SubredditTestingComponent>
    );
    const communityOptionElement = screen.getByText("community options");
    expect(communityOptionElement).toBeInTheDocument();
  });

  it("show Community theme", () => {
    render(
      <SubredditTestingComponent>
        <CommunityOptions />
      </SubredditTestingComponent>
    );
    const communityOptionElement = screen.getByText(/community options/i);
    userEvent.click(communityOptionElement);

    const communityThemeElement = screen.getByText(/Community theme/i);
    expect(communityThemeElement).toBeInTheDocument();
  });
});
