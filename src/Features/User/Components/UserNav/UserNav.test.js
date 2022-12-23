import { render, screen } from "@testing-library/react";
import UserNav from "./UserNav";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("user navbar", () => {
  it("should render all buttons", () => {
    //arrange
    render(
      <UserTestingComponent>
        <UserNav />
      </UserTestingComponent>
    );

    //assert
    const navElement1 = screen.getByText(/OVERVIEW/i);
    expect(navElement1).toBeInTheDocument();

    const navElement2 = screen.getByText(/posts/i);
    expect(navElement2).toBeInTheDocument();

    const navElement3 = screen.getByText(/comments/i);
    expect(navElement3).toBeInTheDocument();
  });
});
