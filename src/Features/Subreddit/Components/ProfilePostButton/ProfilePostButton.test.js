import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// import Components
import ProfilePostButton from "./ProfilePostButton";

describe("Profile Post button Component", () => {
  it("this is a test for Profile Post Button Component", () => {
    render(
      <SubredditTestingComponent>
        <ProfilePostButton />
      </SubredditTestingComponent>
    );
  });
});
