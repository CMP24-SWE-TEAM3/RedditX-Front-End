import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import MessageBannel from "./MessagePanel";

describe("Community Container component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <MessageBannel
        />
      </TestingComponent>
    );

    const outputElement = screen.getByText("there doesn't seem to be anything here");
    expect(outputElement).toBeInTheDocument();

    expect(outputElement).toBeVisible();
    
    expect(outputElement).not.toBeNull();
  });

}); 