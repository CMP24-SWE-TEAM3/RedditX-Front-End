import { render } from "@testing-library/react";

import TestingComponent from "Features/Post/TestingComponent";
import LinkTab from "./LinkTab";

describe("Link tab", () => {
  it("renders Link tab component", () => {
    render(
      <TestingComponent>
        <LinkTab />
      </TestingComponent>
    );
  });
});
