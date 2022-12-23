import TestingComponent from "Features/Search/TestingComponent";
import { fireEvent, render, screen } from "@testing-library/react";
import NavbarRule from "./NavbarRule";

it("Navbar Rule should be found", async () => {
  const setShowModal = jest.fn();
  const setShowModalDrop = jest.fn();
  render(
    <TestingComponent>
      <NavbarRule
        setShowModal={setShowModal}
        setShowDragDrop={setShowModalDrop}
      />
    </TestingComponent>
  );
});
