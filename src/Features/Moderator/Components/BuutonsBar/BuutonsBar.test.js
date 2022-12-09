import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Search/TestingComponent";
import MainInfo from "../MainInfo/MainInfo";
import BuutonsBar from "./BuutonsBar";
describe("BuutonsBar", () => {
  it("does not show reorder button if the button of reorder was clicked", () => {
    // Arrange
    render(
      <TestingComponent>
        <BuutonsBar />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryAllByTitle("reorder");
    fireEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByTitle("reorder");
    expect(outputElement).toBeNull();
  });
  it("does not show Add Flair button if the button of reorder was clicked", () => {
    // Arrange
    render(
      <TestingComponent>
        <BuutonsBar />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryAllByTitle("reorder");
    fireEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByTitle("AddFlair");
    expect(outputElement).toBeNull();
  });
  it("does  show Cancel And Save button if the button of reorder was clicked", () => {
    // Arrange
    render(
      <TestingComponent>
        <BuutonsBar />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryAllByTitle("reorder");
    fireEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByTitle("Cancel");
    expect(outputElement).toBeTruthy();
    const outputElement2 = screen.queryByTitle("Save");
    expect(outputElement2).toBeTruthy();
  });
  it("does  show Reorder And Add flair buttons if the button of Cancel was clicked", () => {
    // Arrange
    render(
      <TestingComponent>
        <BuutonsBar />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryAllByTitle("reorder");
    fireEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByTitle("Cancel");
    fireEvent.click(outputElement);
    // expect(outputElement).toBeTruthy();
    const AddFlair = screen.queryByTitle("AddFlair");
    expect(AddFlair).toBeTruthy();
    const reorder = screen.queryByTitle("reorder");
    expect(reorder).toBeTruthy();
  });
  it("does  show Reorder And Add flair buttons if the button of Save was clicked", () => {
    // Arrange
    render(
      <TestingComponent>
        <BuutonsBar />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryAllByTitle("reorder");
    fireEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByTitle("Save");
    fireEvent.click(outputElement);
    // expect(outputElement).toBeTruthy();
    const AddFlair = screen.queryByTitle("AddFlair");
    expect(AddFlair).toBeTruthy();
    const reorder = screen.queryByTitle("reorder");
    expect(reorder).toBeTruthy();
  });
  //   it("does  show New Flair  if the button of Add Flair was clicked", () => {
  //     // Arrange
  //     render(
  //       <TestingComponent>
  //         <BuutonsBar />
  //         <MainInfo />
  //       </TestingComponent>
  //     );

  //     // Act
  //     const buttonElement = screen.queryAllByTitle("AddFlair");
  //     fireEvent.click(buttonElement[0]);

  //     // Assert
  //     const outputElement = screen.queryByTitle("new");
  //     expect(outputElement).toBeTruthy();
  //   });
});
