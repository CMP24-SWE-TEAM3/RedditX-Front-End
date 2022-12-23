import { render, screen } from "@testing-library/react";
import CategoryBar from "./CategoryBar";
import UserTestingComponent from "Features/User/UserTestingComponent";

describe("Category bar", () => {
  it("check rendering icons", () => {
    render(
      <UserTestingComponent>
        <CategoryBar />
      </UserTestingComponent>
    );

    const hotElements = screen.getAllByText(/hot/i);
    const newElements = screen.getAllByText(/new/i);
    const topElements = screen.getAllByText(/top/i);

    expect(hotElements).not.toHaveLength(0);
    expect(newElements).not.toHaveLength(0);
    expect(topElements).not.toHaveLength(0);
  });
});
