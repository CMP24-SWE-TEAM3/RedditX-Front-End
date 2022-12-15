import { fireEvent, render, screen } from "@testing-library/react";
import CategoryContext from "Contexts/CategoryContext/Category-context";
import TestingComponent from "Features/Search/TestingComponent";
import { useContext } from "react";
import CategoryTitle from "./CategoryTitle";
// import Explore from "./Explore";
// import FlairPage from "./FlairPage";
describe("Category Title Test", () => {
  it("this is a test for Category Title posts", () => {
    <TestingComponent>
      {/* const ctx = useContext(CategoryContext); ctx.CategoryHandler("NBA"); */}
      render(
      <CategoryTitle isPosts={true} />
      );
    </TestingComponent>;
    // const outputname = screen.getByText("Posts about ");
    // expect(outputname).toBeInTheDocument();
  });
  it("this is a test for Category Title coomunities", () => {
    {
      /* const ctx = useContext(CategoryContext); ctx.CategoryHandler("NBA"); */
    }
    render(
      <TestingComponent>
        <CategoryTitle isPosts={false} />
      </TestingComponent>
    );
    screen.logTestingPlaygroundURL();

    const outputname = screen.getByText(/communities related to/i);
    expect(outputname).toBeInTheDocument();
  });
});
