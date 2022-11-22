import { shallow } from "enzyme";
import Comment from "./Comment";
import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Search/TestingComponent";
const comment = {
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
};

describe("Comment", () => {
  it("this is a test for Comment", () => {
    <TestingComponent>
      render(
      <Comment comment={comment} key={1} />
      );
    </TestingComponent>;
  });
});
