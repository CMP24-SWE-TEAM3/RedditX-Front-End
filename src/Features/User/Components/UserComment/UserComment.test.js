import { render } from "@testing-library/react";
import UserComment from "./UserComment";
import UserTestingComponent from "Features/User/UserTestingComponent";

const comment = {
  _id: "60f1f1f1f1f1f1f1f1f1f1f1",
  postID: { title: "hello", communityID: { _id: "4" }, userID: { _id: "3" } },
  authorId: "t2_mohamed",
  textJSON: "iam mohamed",
};

describe("comment of user page", () => {
  it("properties should appear", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserComment comment={comment} overview={true} />
      </UserTestingComponent>
    );
  });
});
