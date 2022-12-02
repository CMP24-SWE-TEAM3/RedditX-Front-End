// import { shallow } from "enzyme";
import CommentsPage from "./CommentsPage";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
const CommentList = {
  results: [
    {
      postContent:
        "[WP] They tell you the warmachines aren't sentient, being kind to them does nothing. But at the same time, it seems funny to you that their targets often seems the be the ones currently shooting at you.",
      commentUserImage: "download.jpg",
      userName: "t2_moazMohamed",
      time: "2022-11-08T20:34:43.515Z",
      bodyContent: "texttexttexttexttextt",
      postFooter: {
        upVotes: 20,
        Comments: "",
      },
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
