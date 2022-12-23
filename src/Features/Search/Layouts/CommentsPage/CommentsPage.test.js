// import { shallow } from "enzyme";
import CommentsPage from "./CommentsPage";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
const CommentList = {
  results: [
    {
      _id: "639e99a3d6e0868d81fc5f3b",
      authorId: {
        _id: "t2_ZiadSherif10",
        avatar: "user-t2_ZiadSherif10-1671302529582.jpg",
      },
      isRoot: true,
      replyingTo: "639e9963d6e0868d81fc5d8b",
      postID: {
        _id: "639e9963d6e0868d81fc5d8b",
        title: "ahee ya waldyy",
        votesCount: 1,
        createdAt: "2022-12-20T02:21:09.244Z",
        userID: "t2_ZiadSherif10",
      },
      replies: [
        "63a206ba156ce9f6a82566b0",
        "63a207139aac17c1d02148ce",
        "63a20798d571d9878c7601ce",
      ],
      textHTML: "@lotfy",
      textJSON:
        '{"blocks":[{"key":"cl7pl","text":"@lotfy","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
      votesCount: 1,
      voters: [
        {
          userID: "t2_ZiadSherif10",
          voteType: 1,
          _id: "639e99a3d6e0868d81fc5f3c",
        },
        {
          userID: "t2_lotfy2",
          voteType: -1,
          _id: "63a205fb156ce9f6a8256623",
        },
      ],
      isDeleted: false,
      isLocked: false,
      communityID: {
        _id: "t5_lotfy_subreddit3",
        icon: "default-icon.jpg",
      },
      spamCount: 0,
      isCollapsed: false,
      spams: [],
      createdAt: "2022-12-20T02:21:27.190Z",
    },
    {
      _id: "639e99abd6e0868d81fc5f4d",
      authorId: {
        _id: "t2_ZiadSherif10",
        avatar: "user-t2_ZiadSherif10-1671302529582.jpg",
      },
      isRoot: true,
      replyingTo: "639e9963d6e0868d81fc5d8b",
      postID: {
        _id: "639e9963d6e0868d81fc5d8b",
        title: "ahee ya waldyy",
        votesCount: 1,
        createdAt: "2022-12-20T02:21:09.244Z",
        userID: "t2_ZiadSherif10",
      },
      replies: [],
      textHTML: "@lotfy",
      textJSON:
        '{"blocks":[{"key":"cl7pl","text":"@lotfy","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
      votesCount: 1,
      voters: [
        {
          userID: "t2_ZiadSherif10",
          voteType: 1,
          _id: "639e99abd6e0868d81fc5f4e",
        },
      ],
      isDeleted: false,
      isLocked: false,
      communityID: {
        _id: "t5_lotfy_subreddit3",
        icon: "default-icon.jpg",
      },
      spamCount: 0,
      isCollapsed: false,
      spams: [],
      createdAt: "2022-12-20T02:21:27.190Z",
    },
  ],
};
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

// it("this is a test", () => {});
