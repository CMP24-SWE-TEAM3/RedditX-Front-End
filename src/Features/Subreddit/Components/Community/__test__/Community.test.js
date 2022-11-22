import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import Community from "../Community";
describe("CommunityCardItem component", () => {

  it('renders "join" if the button was NOT clicked', () => {
    render(
      <TestingComponent>
        <Community
          img="logo.svg"
          title = {"r/Gaming"}
          index = {1}
          communityID={"1"}
          description={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          members={10}
          isJoined={false}
        />
      </TestingComponent>
    );

    const outputElement = screen.getByText("Join");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders "Joined" if the JoinState is True', async () => {
    // Arrange
    render(
      <TestingComponent>
        <Community
          img="logo.svg"
          title = {"r/Gaming"}
          index = {1}
          communityID={"1"}
          description={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          members={10}
          isJoined={true}
        />
      </TestingComponent>
    );
    // Assert
    const outputElement = screen.getByText("Joined");
    expect(outputElement).toBeInTheDocument();
  });

  it('does not render "Join" if the button was clicked, transition from false to true', () => {
    // Arrange
    render(
      <TestingComponent>
        <Community
          img="logo.svg"
          title = {"r/Gaming"}
          index = {1}
          communityID={"1"}
          description={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          members={10}
          isJoined={false}
        />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Join");
    expect(outputElement).toBeNull();
  });


  it('does not render "Joined" if the button was clicked, transition from true to false', () => {
    // Arrange
    render(
      <TestingComponent>
        <Community
          img="logo.svg"
          title = {"r/Gaming"}
          index = {1}
          communityID={"1"}
          description={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          members={10}
          isJoined={true}
        />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Joined");
    expect(outputElement).toBeNull();
  });

  it('Testing for Title according to passed Props', () => {
    // Arrange
    render(
      <TestingComponent>
        <Community
          img="logo.svg"
          title = {"r/Gaming"}
          index = {1}
          communityID={"1"}
          description={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          members={10}
          isJoined={true}
        />
      </TestingComponent>
    );

    // Assert
    //Assertion for Titles
    let outputElement = screen.getAllByText("r/Gaming");
    expect(outputElement.length).toBe(2);
    
    //Assertion for Members Count
    outputElement = screen.getByText("10");
    expect(outputElement).toBeInTheDocument();
    
    //Assertion for Index
    outputElement = screen.getByText("1");
    expect(outputElement).toBeInTheDocument();
  });
});