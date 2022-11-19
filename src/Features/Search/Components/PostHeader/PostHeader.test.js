import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import PostHeader from "./PostHeader";
const postHeader = {
  headerImage: "People_Image.jpg",
  communityName: "communityName",
  userName: "userName",
  time: "5 days ago",
  flair: {
    flairText: " post.flairText",
    flairColor: "green",
    flairBackgroundColor: "red",
  },
  nsfw: false,
};
describe("Post component", () => {
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
