import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import PostItem from "./Post";
const post = {
  attachments: ["People_Image.jpg"],
  postID: "t3_63248d0sda12f459a937e2684fd",
  votesCount: 22.1,
  communityID: "t5_imagepro",
  communityName: "WallStreetRiches",
  createdAt: "2022/02/15, 15:05:45",
  text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
  title: "This is a post title",
  nsfw: true,
  flairID: "id1",
  flairText: "Hero",
  flairTextColor: "red",
  flairBackgroundColor: "blue",
  userID: "t2_hfgdds",
  insightCnt: 54,
};

describe("Post component", () => {
  it("renders check for post body", async () => {
    render(
      <TestingComponent>
        <PostItem post={post} key={1} />
      </TestingComponent>
    );
    const outputElement = screen.getByTitle("postbody");
    expect(outputElement.textContent).toBe(
      " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” "
    );
  });
  it("renders check for post Flair", async () => {
    render(
      <TestingComponent>
        <PostItem post={post} key={1} />
      </TestingComponent>
    );
    const outputElement = screen.getByTitle("postFlair");
    expect(outputElement.textContent).toBe("Hero");
  });
});
// it("this is a test", () => {});
