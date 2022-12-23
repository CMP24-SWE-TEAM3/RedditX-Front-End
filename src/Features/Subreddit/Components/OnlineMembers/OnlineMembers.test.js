import { render } from "@testing-library/react";
import OnlineMembers from "./OnlineMembers";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


describe("show members and online members", () => {

  it("show members and online members", () => {
    render(
      <SubredditTestingComponent>
        <OnlineMembers />
      </SubredditTestingComponent>
    );
  });
});
