import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import IndexPage from "./IndexPage";

describe("IndexPage component", () => {

  it(`renders Directort`, () => {
    render(
      <TestingComponent>
        <IndexPage
        />
      </TestingComponent>
    );

    const outputElement = screen.getByText("Community Directory");
    expect(outputElement).toBeInTheDocument();

    expect(outputElement).toBeVisible();
    
    expect(outputElement).not.toBeNull();
  });

}); 