import { render } from "@testing-library/react";
import SubRedditHeader from "./SubRedditHeader";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

const banner = {
  color: "#33a8ff",
  // url: "Features/Subreddit/Assets/tree.jpg",
  url: "",
};

const info = {
  name: "Eln2aa4yn",
};

describe("header of subreddit", () => {
  it("render header", () => {
    render(
      <SubredditTestingComponent>
        <SubRedditHeader
          banner={banner}
          info={info}
          isJoined={true}
          onJoin={() => console.log("join handler")}
        />
      </SubredditTestingComponent>
    );
  });
});
