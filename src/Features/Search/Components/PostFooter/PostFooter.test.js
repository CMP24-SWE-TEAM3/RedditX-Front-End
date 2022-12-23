import PostFooter from "./PostFooter";
import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
const postfooter = {
  upVotes: 1000,
  Comments: 1000,
};
describe("PostFooter component", () => {
  it("renders check for post Footer", async () => {
    render(
      <TestingComponent>
        <PostFooter postfooter={postfooter} />
      </TestingComponent>
    );

    // const outputElement = screen.getByTitle("commName");
    // expect(outputElement.textContent).toBe("r/communityName");
  });
  it("check for post Footer upVotes Count and Units", async () => {
    render(
      <TestingComponent>
        <PostFooter postfooter={postfooter} />
      </TestingComponent>
    );

    const outputElement = screen.getByTitle("upvote");
    expect(outputElement.textContent).toBe("1k upvotes");
  });
  it("check for post Footer Comments Count and Units", async () => {
    render(
      <TestingComponent>
        <PostFooter postfooter={postfooter} />
      </TestingComponent>
    );

    const outputElement = screen.getByTitle("commentCount");
    expect(outputElement.textContent).toBe("1k comments");
  });
});
// test
