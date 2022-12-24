import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import UsernameMentions from "./UsernameMentions";

describe("Community Container component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <UsernameMentions mentions = {[]}
        />
      </TestingComponent>
    );


    let outputElement = screen.queryAllByText("Tue Nov 29 2022");
    expect(outputElement).not.toBeNull();

    outputElement = screen.getByText("Ahmed");
    expect(outputElement).toBeInTheDocument();

    expect(outputElement).toBeVisible();
    
    expect(outputElement).not.toBeNull();

    outputElement = screen.getByText("username mention: Mod");
    expect(outputElement).toBeInTheDocument();

    expect(outputElement).toBeVisible();
    
    expect(outputElement).not.toBeNull();
  });

}); 