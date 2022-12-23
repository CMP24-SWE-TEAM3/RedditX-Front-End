import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import PostHeader from "./PostHeader";
const postHeader = {
  headerImage: "People_Image.jpg",
  communityName: "t2_communityName",
  userName: "t2_userName",
  time: "5 days ago",
  nsfw: false,
};
describe("PostHeader component", () => {
  it("renders check for post Header community name", async () => {
    render(
      <TestingComponent>
        <PostHeader postheader={postHeader} />
      </TestingComponent>
    );
    const outputElement = screen.getByTitle("commName");
    expect(outputElement.textContent).toBe("r/communityName");
  });
  it("renders check for post header user name", async () => {
    render(
      <TestingComponent>
        <PostHeader postheader={postHeader} />
      </TestingComponent>
    );
    const outputElement = screen.getByTitle("userName");
    expect(outputElement.textContent).toBe("u/userName");
  });
  it("renders check for post nsfw", async () => {
    render(
      <TestingComponent>
        <PostHeader postheader={postHeader} />
      </TestingComponent>
    );
    const outputElement = screen.queryByText("nsfw");
    expect(outputElement).toBeNull();
  });
});
// it("this is a test", () => {});
// test
