import { render } from "@testing-library/react";
import UserUpVoted from "./UserUpVoted";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("overview page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserUpVoted />
      </UserTestingComponent>
    );
  });
});
