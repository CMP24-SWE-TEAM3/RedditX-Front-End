import { render, screen } from "@testing-library/react";
import Followers from "./Followers";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("followers page", () => {
  it("should show followers", () => {
    //arrange
    render(
      <UserTestingComponent>
        <Followers />
      </UserTestingComponent>
    );

    //assert
    const followersElement = screen.getByText(/Followers/i);
    expect(followersElement).toBeInTheDocument();

  });
});
