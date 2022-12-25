import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import Unread from "./Unread";

describe("Community Container component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <Unread
        />
      </TestingComponent>
    );

    const outputElement = screen.queryByText("there doesn't seem to be anything here");
    expect(outputElement).toBeInTheDocument();
    expect(outputElement).not.toBeNull();
    expect(outputElement).toBeVisible();
  });

}); 