// import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Search/TestingComponent";
import MainInfo from "./MainInfo";
describe("MainInfo component", () => {
  it('renders "MainInfo" in title', () => {
    render(
      <TestingComponent>
        <MainInfo />
      </TestingComponent>
    );
  });
  //   const outputElement = screen.getByText("Post flair management");
  //   expect(outputElement.textContent).toBe("Post flair management");
  //   expect(outputElement).toBeTruthy();
});
