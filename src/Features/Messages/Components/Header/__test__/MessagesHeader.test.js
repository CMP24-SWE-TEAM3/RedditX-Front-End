import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import MessagesHeader from "../MessagesHeader";
describe("Message Header component", () => {

  it('renders static Main Link 1', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Send A Private Message");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Main Link 2', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Sent");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Main Link 3', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Inbox");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Sub Link 1', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("All");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Sub Link 2', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Unread");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Sub Link 3', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Messages");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Sub Link 4', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Post Replies");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Sub Link 5', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Username Mentions");
    expect(outputElement).toBeInTheDocument();
  });

  it('Tests Non Existence of a Link Text', () => {
    render(
      <TestingComponent>
        <MessagesHeader />
      </TestingComponent>
    );
    const outputElement = screen.queryByText("Comment Replies");
    expect(outputElement).toBeNull();
  });

});