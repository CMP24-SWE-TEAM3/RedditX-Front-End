import { render } from "@testing-library/react";
import UserHistory from "./UserHistory";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("overview page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserHistory />
      </UserTestingComponent>
    );
  });
});
