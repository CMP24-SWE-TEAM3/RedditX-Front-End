import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import IndexContainer from "../IndexContainer";

describe("Index Body component Heading", () => {

  it('renders static Header', () => {
    render(
      <TestingComponent>
        <IndexContainer />
      </TestingComponent>
    );
    const outputElement = screen.getByRole("heading");
    expect(outputElement.textContent).toContain("Browse communities", {exact: false})
  });

});