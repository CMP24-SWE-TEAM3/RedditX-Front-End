import { fireEvent, render, screen } from "@testing-library/react";
// import NewFlair from "Features/Moderator/Components/NewFlair/NewFlair";
import TestingComponent from "Features/Search/TestingComponent";
import FlairList from "./FlairList";
// import MainInfo from "./MainInfo";
describe("FlairList component", () => {
  it('renders "FlairList"', () => {
    render(
      <TestingComponent>
        <FlairList />
      </TestingComponent>
    );
  });
  //   const outputElement = screen.getByText("Post flair management");
  //   expect(outputElement.textContent).toBe("Post flair management");
  //   expect(outputElement).toBeTruthy();
});
