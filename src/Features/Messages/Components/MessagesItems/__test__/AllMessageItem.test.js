import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import NormalMessageAll from "../AllMessageItem";
describe("AllMessageItem component", () => {

  it('renders Passed Message Author', () => {
    render(
      <TestingComponent>
        <NormalMessageAll 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"time"}
        msg={"Broken Now"}
        upvote={"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Jacob");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders Passed Message Content', () => {
    render(
      <TestingComponent>
        <NormalMessageAll 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"time"}
        msg={"Broken Now"}
        upvote={"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
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
        <NormalMessageAll 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"time"}
        msg={"Broken Now"}
        upvote={"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
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
        <NormalMessageAll 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"time"}
        msg={"Broken Now"}
        upvote={"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByTestId("author-element");
    expect(outputElement).toHaveStyle(`color: #ff0011`);
  });

  it('Tests Message Read', () => {
    render(
      <TestingComponent>
        <NormalMessageAll 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"time"}
        msg={"Broken Now"}
        upvote={"neutral"}
        admin={false}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByTestId("read-test");
    const style = window.getComputedStyle(outputElement);
    console.log(style.color);
    expect(style.backgroundColor).toBe(`rgb(237, 239, 241)`);
  });
});