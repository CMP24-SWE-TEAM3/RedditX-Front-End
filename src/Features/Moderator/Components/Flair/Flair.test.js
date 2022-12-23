import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Search/TestingComponent";
import Flair from "./Flair";
// import MainInfo from "../MainInfo/MainInfo";
// import Flair from "./Flair";
describe("Flair", () => {
  it("check that the flair edit component render when click on edit button", () => {
    // Arrange
    render(
      <TestingComponent>
        {(provided, snapshot) => (
          <Flair
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            text={"abdo"}
            color={"red"}
            background={"blue"}
            isNew={false}
          />
        )}
      </TestingComponent>
    );
    screen.logTestingPlaygroundURL();

    // // Act
    // Act
    // const buttonElement = screen.getAllByRole("button");
    // fireEvent.click(buttonElement[1]);

    // // Assert
    // const outputElement = screen.queryByTitle("flairEdit");
    // expect(outputElement).toBeInTheDocument();
  });
  //   it("does not show Add Flair button if the button of reorder was clicked", () => {
  //     // Arrange
  //     render(
  //       <TestingComponent>
  //         <Flair />
  //       </TestingComponent>
  //     );

  //     // Act
  //     const buttonElement = screen.queryAllByTitle("reorder");
  //     fireEvent.click(buttonElement[0]);

  //     // Assert
  //     const outputElement = screen.queryByTitle("AddFlair");
  //     expect(outputElement).toBeNull();
  //   });
  //   it("does  show Cancel And Save button if the button of reorder was clicked", () => {
  //     // Arrange
  //     render(
  //       <TestingComponent>
  //         <Flair />
  //       </TestingComponent>
  //     );

  //     // Act
  //     const buttonElement = screen.queryAllByTitle("reorder");
  //     fireEvent.click(buttonElement[0]);

  //     // Assert
  //     const outputElement = screen.queryByTitle("Cancel");
  //     expect(outputElement).toBeTruthy();
  //     const outputElement2 = screen.queryByTitle("Save");
  //     expect(outputElement2).toBeTruthy();
  //   });
  //   it("does  show Reorder And Add flair buttons if the button of Cancel was clicked", () => {
  //     // Arrange
  //     render(
  //       <TestingComponent>
  //         <Flair />
  //       </TestingComponent>
  //     );

  //     // Act
  //     const buttonElement = screen.queryAllByTitle("reorder");
  //     fireEvent.click(buttonElement[0]);

  //     // Assert
  //     const outputElement = screen.queryByTitle("Cancel");
  //     fireEvent.click(outputElement);
  //     // expect(outputElement).toBeTruthy();
  //     const AddFlair = screen.queryByTitle("AddFlair");
  //     expect(AddFlair).toBeTruthy();
  //     const reorder = screen.queryByTitle("reorder");
  //     expect(reorder).toBeTruthy();
  //   });
  //   it("does  show Reorder And Add flair buttons if the button of Save was clicked", () => {
  //     // Arrange
  //     render(
  //       <TestingComponent>
  //         <Flair />
  //       </TestingComponent>
  //     );

  //     // Act
  //     const buttonElement = screen.queryAllByTitle("reorder");
  //     fireEvent.click(buttonElement[0]);

  //     // Assert
  //     const outputElement = screen.queryByTitle("Save");
  //     fireEvent.click(outputElement);
  //     // expect(outputElement).toBeTruthy();
  //     const AddFlair = screen.queryByTitle("AddFlair");
  //     expect(AddFlair).toBeTruthy();
  //     const reorder = screen.queryByTitle("reorder");
  //     expect(reorder).toBeTruthy();
  //   });
});
//test
