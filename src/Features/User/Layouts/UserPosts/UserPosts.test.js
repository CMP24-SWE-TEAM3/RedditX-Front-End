import { render } from "@testing-library/react";
import UserPosts from "./UserPosts";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("overview page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserPosts />
      </UserTestingComponent>
    );
  });
});
