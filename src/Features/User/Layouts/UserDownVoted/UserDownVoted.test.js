import { render } from "@testing-library/react";
import UserDownVoted from "./UserDownVoted";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("down voted page page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserDownVoted />
      </UserTestingComponent>
    );
  });
});
