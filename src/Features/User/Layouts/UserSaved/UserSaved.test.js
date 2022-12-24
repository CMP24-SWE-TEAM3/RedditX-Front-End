import { render } from "@testing-library/react";
import UserSaved from "./UserSaved";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("overview page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserSaved />
      </UserTestingComponent>
    );
  });
});
