// import { shallow } from "enzyme";
import CommentsPage from "./CommentsPage";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
const CommentList = [
  {
    id: 1,
    postFooter: {
      upVotes: 21,
      Comments: 2000,
    },
    postHeader: {
      headerImage: "People_Image.jpg",
      communityName: "WallStreetRiches",
      userName: "t2_North-Situation4034",
      time: "5 days ago",
      flair: {
        flairText: "go",
        flairColor: "green",
        flairBackgroundColor: "red",
      },
    },
    commentBody: {
      postContent:
        "[WP] They tell you the warmachines aren't sentient, being kind to them does nothing. But at the same time, it seems funny to you that their targets often seems the be the ones currently shooting at you.",
      commentUserImage: "download.jpg",
      userName: "abdelrahman_ashraf",
      time: "9 days ago",
      bodyContent:
        "you ever had to train or work with someone who just has no desire to know anything beyond what you’re telling them or the why behind what they’re doing? Every instruction needs to be laid out in painstaking detail? If an issue arises, there’s no desire to understand why or attempt to fix it, they just error out and stand there waiting for instruction? It’s like programming a computer, but the computer is a human potato.",
    },
  },
];
describe("Comments component", () => {
  it("check that Comments are renders well", async () => {
    render(
      <TestingComponent>
        <CommentsPage CommentLists={CommentList} />
      </TestingComponent>
    );

    const listItemElements = await screen.findAllByTitle("comment");
    expect(listItemElements).not.toHaveLength(0);
  });
});
