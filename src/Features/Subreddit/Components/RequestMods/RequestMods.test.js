import RequestMods from "./RequestMods";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

// Enzyme.configure({ adapter: new Adapter() });

describe("modal to message moderators", () => {
  it("modal should appear", () => {
    render(
      <SubredditTestingComponent>
        <RequestMods
          modalShow={true}
          hide={() => {
            console.log("hide");
          }}
          isPriv={true}
        />
      </SubredditTestingComponent>
    );
  });
});
