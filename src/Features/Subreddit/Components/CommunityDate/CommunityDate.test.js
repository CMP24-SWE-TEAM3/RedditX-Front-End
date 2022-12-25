import { render, screen } from "@testing-library/react";
import CommunityDate from "./CommunityDate";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("Description and created date of subreddit", () => {
  it("description should appear", () => {
    //Arrange
    render(
      <SubredditTestingComponent>
        <CommunityDate />
      </SubredditTestingComponent>
    );
  });
});
