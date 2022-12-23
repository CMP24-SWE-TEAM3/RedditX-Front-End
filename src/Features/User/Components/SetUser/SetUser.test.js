import { render, screen } from "@testing-library/react";
import SetUser from "./SetUser";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("component that set all contexts", () => {
  it("should render correctly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <SetUser />
      </UserTestingComponent>
    );
  });
});
