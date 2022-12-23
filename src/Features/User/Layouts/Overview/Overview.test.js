import { render } from "@testing-library/react";
import Overview from "./Overview";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("overview page", () => {
  it("should renderCorrectly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <Overview />
      </UserTestingComponent>
    );
  });
});
