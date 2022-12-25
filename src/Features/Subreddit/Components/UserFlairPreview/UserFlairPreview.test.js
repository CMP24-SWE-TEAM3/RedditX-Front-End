import { render, screen } from "@testing-library/react";
import UserFlairPreview from "./UserFlairPreview";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";



describe("preview of selected flair", () => {

  it("show user flair preview", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <UserFlairPreview />
      </SubredditTestingComponent>
    );

    //assert
    const userFlairElement = screen.getByText(/user flair preview/i);
    expect(userFlairElement).toBeInTheDocument();
  });
});
