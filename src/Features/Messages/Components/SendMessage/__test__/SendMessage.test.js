import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import SendAMessage from "../SendMessage";
describe("SendMessage component", () => {

  it('renders Subheading', () => {
    render(
      <TestingComponent>
        <SendAMessage
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Send A Private Message");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders Error Message On Failed Submission', () => {
    render(
      <TestingComponent>
        <SendAMessage
        />
      </TestingComponent>
    );
    const buttonElement = screen.getByText('Send');
    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("please enter a username");
    expect(outputElement).toBeInTheDocument();
  });

  it('Changes Value of an Input Field', () => {
    render(
      <TestingComponent>
        <SendAMessage
        />
      </TestingComponent>
    );
    const InputElements = screen.getAllByDisplayValue('');
    fireEvent.change(InputElements[0], {target: {value: "A user"}});
    // const outputElement = screen.getByText("please enter a username");
    expect(InputElements[0].value).toEqual("A user");
  });

  it('renders Subject Error Message When Subject is null', () => {
    render(
      <TestingComponent>
        <SendAMessage
        />
      </TestingComponent>
    );
    
    const buttonElement = screen.getByText('Send');
    const InputElements = screen.getAllByDisplayValue('');
    fireEvent.change(InputElements[0], {target: {value: "A user"}});
    fireEvent.change(InputElements[2], {target: {value: "A user"}});

    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("please enter a subject");
    expect(outputElement).toBeVisible();
  });

  it('renders Messsge Error Message When Messsge is null', () => {
    render(
      <TestingComponent>
        <SendAMessage
        />
      </TestingComponent>
    );
    
    const buttonElement = screen.getByText('Send');
    const InputElements = screen.getAllByDisplayValue('');
    fireEvent.change(InputElements[0], {target: {value: "A user"}});
    fireEvent.change(InputElements[1], {target: {value: "A user"}});

    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("we need something here");
    expect(outputElement).toBeVisible();
  });

  it('renders Username Error Message When Username is null', () => {
    render(
      <TestingComponent>
        <SendAMessage
        />
      </TestingComponent>
    );
    
    const buttonElement = screen.getByText('Send');
    const InputElements = screen.getAllByDisplayValue('');
    fireEvent.change(InputElements[2], {target: {value: "A user"}});
    fireEvent.change(InputElements[1], {target: {value: "A user"}});

    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("please enter a username");
    expect(outputElement).toBeVisible();
  });
});


