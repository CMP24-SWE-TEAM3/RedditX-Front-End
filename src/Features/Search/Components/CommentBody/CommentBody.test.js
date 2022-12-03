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
  bodyContent: "texttexttexttexttextt",
  postFooter: {
    upVotes: 20,
    Comments: "",
  },
};
describe("Comment Body Content component", () => {
  it("renders check for Comment body content", async () => {
    render(
      <TestingComponent>
        <CommentBody commentBody={commentBody} />
      </TestingComponent>
    );
    const outputElement = screen.getByTitle("CommentBody");
    expect(outputElement.textContent).toBe("texttexttexttexttextt");
  });

  it("renders  for Comment body", async () => {
    render(
      <TestingComponent>
        <CommentBody commentBody={commentBody} />
      </TestingComponent>
    );
  });
});
