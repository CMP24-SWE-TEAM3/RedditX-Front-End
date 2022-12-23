import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
// import { shallow } from "enzyme";
import CommentBody from "./CommentBody";

const commentBody = {
  postContent:
    "[WP] They tell you the warmachines aren't sentient, being kind to them does nothing. But at the same time, it seems funny to you that their targets often seems the be the ones currently shooting at you.",
  commentUserImage: "download.jpg",
  userName: "t2_moazMohamed",
  time: "2022-11-08T20:34:43.515Z",
  bodyContent: "tex455t",
  postFooter: {
    upVotes: 20,
    Comments: "",
  },
};
const comment = {
  _id: "63a2143e9159028824a101c1",
  authorId: {
    _id: "t2_moazMohamed",
    avatar: "user-t2_moazMohamed-1671576088805.jpg",
  },
  isRoot: false,
  replyingTo: "63a211d816e14b570425d9ae",
  postID: {
    _id: "637d55fd1dcaa6e6bcefb01c",
    title: "This is a post title",
    votesCount: 10,
    createdAt: "2022-12-20T02:21:09.244Z",
    userID: "t2_ZiadSherif10",
    commentsNum: 3,
  },
  replies: [],
  textHTML: "text",
  textJSON: "tex455t",
  votesCount: 1,
  voters: [
    {
      userID: "t2_moazMohamed",
      voteType: 1,
      _id: "63a2143e9159028824a101c2",
    },
  ],
  isDeleted: false,
  isLocked: false,
  communityID: {
    _id: "t5_imagePro235",
    icon: "default-icon.jpg",
  },
  spamCount: 0,
  isCollapsed: false,
  createdAt: "2022-12-20T19:59:58.150Z",
  spams: [],
};
describe("Comment Body Content component", () => {
  it("renders check for Comment body content", async () => {
    render(
      <TestingComponent>
        <CommentBody commentBody={commentBody} comment={comment} />
      </TestingComponent>
    );
    const outputElement = screen.getByTitle("CommentBody");
    expect(outputElement.textContent).toBe("tex455t");
  });

  it("renders  for Comment body", async () => {
    render(
      <TestingComponent>
        <CommentBody commentBody={commentBody} comment={comment} />
      </TestingComponent>
    );
  });
});
