// import { shallow } from "enzyme";
import PostsList from "./PostsList";
import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

const postsList = {
  results: [
    {
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
    },
  ],
};
describe("PostsList component", () => {
  test("renders posts if request succeeds", async () => {
    render(
      <TestingComponent>
        <PostsList type={"Hot"} PostList={postsList} />
      </TestingComponent>
    );

    const listItemElements = await screen.findAllByTitle("post");
    expect(listItemElements).not.toHaveLength(0);
  });
});
// it("this is a test", () => {});
// test
