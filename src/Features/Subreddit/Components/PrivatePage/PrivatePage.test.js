import PrivatePage from "./PrivatePage";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("private page", () => {
  it("show private page", () => {
    render(
      <SubredditTestingComponent>
        <PrivatePage />
      </SubredditTestingComponent>
    );
  });
});
