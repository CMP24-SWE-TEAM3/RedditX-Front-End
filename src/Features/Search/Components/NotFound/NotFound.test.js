import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import NotFound from "./NotFound";
describe("NotFound component", () => {
  test("renders NotFound", async () => {
    render(
      <TestingComponent>
        <NotFound />
      </TestingComponent>
    );
  });
});
// n
