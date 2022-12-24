import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import Messages from "./Messages";

describe("Community Container component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <Messages
        />
      </TestingComponent>
    );

    let outputElement = screen.getByText("All");
    expect(outputElement).toBeInTheDocument();
    outputElement = screen.getByText("Unread");
    expect(outputElement).toBeInTheDocument();
    
    
  });

  it(`renders Header Elements`, () => {
    render(
      <TestingComponent>
        <Messages
        />
      </TestingComponent>
    );
    let outputElement = screen.getByText("Sent");
    expect(outputElement).toBeInTheDocument();
    outputElement = screen.getByText("Inbox");
    expect(outputElement).toBeInTheDocument();
    
    });



    it(`renders Header Elements2`, () => {
        render(
          <TestingComponent>
            <Messages
            />
          </TestingComponent>
        );

        let outputElement = screen.getByText("Messages");
        expect(outputElement).toBeInTheDocument();
        outputElement = screen.getByText("Send A Private Message");
        expect(outputElement).toBeInTheDocument();
    });



    it(`renders Header Elements3`, () => {
        render(
            <TestingComponent>
            <Messages
            />
            </TestingComponent>
        );


        let outputElement = screen.getByText("Post Replies");
        expect(outputElement).toBeInTheDocument();
    });




    it(`renders Header Elements4`, () => {
        render(
            <TestingComponent>
            <Messages
            />
            </TestingComponent>
        );

        let outputElement = screen.getByText("Username Mentions");
        expect(outputElement).toBeInTheDocument();
    });
}); 