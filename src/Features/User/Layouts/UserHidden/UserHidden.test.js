import { render } from "@testing-library/react";
import UserHidden from "./UserHidden";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("Hidden page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserHidden />
      </UserTestingComponent>
    );
  });
});
