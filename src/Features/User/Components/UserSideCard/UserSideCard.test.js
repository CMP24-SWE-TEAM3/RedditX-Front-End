import { render, screen } from "@testing-library/react";
import UserSideCard from "./UserSideCard";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("card of user", () => {
  it("should render correctly", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserSideCard />
      </UserTestingComponent>
    );

    //assert
    const birthdayElement = screen.getByText(/Cake Day/i);
    expect(birthdayElement).toBeInTheDocument();

    const karmaElement = screen.getByText(/karma/i);
    expect(karmaElement).toBeInTheDocument();
  });
});
