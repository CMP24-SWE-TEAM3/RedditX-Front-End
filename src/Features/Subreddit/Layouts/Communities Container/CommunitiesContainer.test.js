import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import Container from "./CommunitiesContainer";

describe("Community Container component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <Container
          subscribed = {[{id:1}, {id:2}]}
        />
      </TestingComponent>
    );

    const outputElement = screen.getByRole("heading");
    expect(outputElement).toBeInTheDocument();

    expect(outputElement).toBeVisible();
    
    expect(outputElement).not.toBeNull();
  });

}); 