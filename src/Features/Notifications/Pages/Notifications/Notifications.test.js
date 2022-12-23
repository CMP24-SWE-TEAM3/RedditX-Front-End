import { fireEvent, render, screen } from "@testing-library/react";
import { Notifications } from "Features/Notifications/Pages/Notifications/Notifications.jsx";
import TestingComponent from "Features/Search/TestingComponent";
describe("Notifications page", () => {
  it("this is a test for Notifications page", () => {
    <TestingComponent>
      render(
      <Notifications />
      );
    </TestingComponent>;
  });
});
//test
