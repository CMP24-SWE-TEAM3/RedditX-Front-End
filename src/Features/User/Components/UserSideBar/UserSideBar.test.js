import { render } from "@testing-library/react";
import UserSideBar from "./UserSideBar";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("user side bar", () => {
  it("should render correctly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserSideBar />
      </UserTestingComponent>
    );
  });
});
