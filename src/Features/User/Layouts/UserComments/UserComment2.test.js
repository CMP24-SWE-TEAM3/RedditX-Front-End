import { render } from "@testing-library/react";
import UserComments from "./UserComments";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("comments page", () => {
  it("should render Correctly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserComments />
      </UserTestingComponent>
    );
  });
});
