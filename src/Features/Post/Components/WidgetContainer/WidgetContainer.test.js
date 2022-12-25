import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

import WidgetContainer from "./WidgetContainer";

describe("container for widgets", () => {
  it("should be able to render without crashing", async () => {
    render(
      <TestingComponent>
        <WidgetContainer />
      </TestingComponent>
    );
  });

  it("should be able to render its contents", async () => {
    render(
      <TestingComponent>
        <WidgetContainer
          headerText={"test header text"}
          children={<span data-testid="span-test"></span>}
        />
      </TestingComponent>
    );
    expect(screen.getByText("test header text")).toBeInTheDocument();
    expect(screen.getByTestId("span-test")).toBeInTheDocument();
  });
});
