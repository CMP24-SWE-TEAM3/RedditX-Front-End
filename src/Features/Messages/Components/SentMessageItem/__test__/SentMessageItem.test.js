import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import SentMessageItem from "../SentMessageItem";
describe("Sent Message Item component", () => {

  it('renders Date', () => {
    render(
      <TestingComponent>
        <SentMessageItem 
        author={"Jacob"}
        subject={"Mobiles"}
        time={"2022-11-30T"}
        msg={"Broken Now"}
        admin={true}
        id={2}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("sent Wed Nov 30 2022");
    expect(outputElement).toBeInTheDocument();
  });

  
  it('renders Passed Message Content', () => {
    render(
      <TestingComponent>
        <SentMessageItem
        author={"Jacob"}
        subject={"Mobiles"}
        time={"2022-11-30T"}
        msg={"Broken Now"}
        admin={true}
        id={2}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Broken Now");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Subheading', () => {
    render(
      <TestingComponent>
        <SentMessageItem 
       author={"Jacob"}
       subject={"Mobiles"}
       time={"2022-11-30T"}
       msg={"Broken Now"}
       admin={true}
       id={2}
       key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Mobiles:");
    expect(outputElement).toBeInTheDocument();
  });

  it('Tests Author Text Color [Red]', () => {
    render(
      <TestingComponent>
        <SentMessageItem 
        author={"Jacob"}
        subject={"Mobiles"}
        time={"2022-11-30T"}
        msg={"Broken Now"}
        admin={true}
        id={2}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.queryAllByText("Jacob");
    expect(outputElement[0]).toHaveStyle(`color: #ff0011`);
  });

  it('Tests Author Text Color not [Red]', () => {
    render(
      <TestingComponent>
        <SentMessageItem 
       author={"Jacob"}
       subject={"Mobiles"}
       time={"2022-11-30T"}
       msg={"Broken Now"}
       admin={false}
       id={2}
       key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.queryAllByText("Jacob");
    expect(outputElement[0]).not.toHaveStyle(`color: #ff0011`);
  });

  it('Tests Author Text', () => {
    render(
      <TestingComponent>
        <SentMessageItem 
        author={"Jacob"}
        subject={"Mobiles"}
        time={"2022-11-30T"}
        msg={"Broken Now"}
        admin={true}
        id={2}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.queryAllByText("Jacob");
    expect(outputElement).not.toBeNull();
  });
});


