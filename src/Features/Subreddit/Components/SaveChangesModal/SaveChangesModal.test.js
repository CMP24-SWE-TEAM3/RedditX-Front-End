import SaveChangesModal from "./SaveChangesModal";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

function out() {
  console.log("clicked");
}

describe("modal to check unsaved changes", () => {
  it("show modal", () => {
    render(
      <SubredditTestingComponent>
        <SaveChangesModal
          show={true}
          onDiscard={out}
          onSave={out}
          onHide={out}
          showX={true}
        />
      </SubredditTestingComponent>
    );
  });
});
