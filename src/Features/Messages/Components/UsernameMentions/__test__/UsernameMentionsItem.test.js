import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import UsernameMentionItem from "../UsernameMentionsItem";
describe("Username Mention Item component", () => {

  it('renders Date', () => {
    render(
      <TestingComponent>
        <UsernameMentionItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-30T"}
        msg={"Broken Now"}
        upvote = {"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Wed Nov 30 2022");
    expect(outputElement).toBeInTheDocument();
  });

  
  it('renders Passed Message Content', () => {
    render(
      <TestingComponent>
        <UsernameMentionItem
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        upvote = {"neutral"}
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
        <UsernameMentionItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        upvote = {"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("username mention: Mobiles");
    expect(outputElement).toBeInTheDocument();
  });

  it('Tests Author Text Color [Red]', () => {
    render(
      <TestingComponent>
        <UsernameMentionItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        upvote = {"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
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
        <UsernameMentionItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        upvote = {"neutral"}
        admin={false}
        read={false}
        id={2}
        block={false}
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
        <UsernameMentionItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        upvote = {"neutral"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.queryAllByText("Jacob");
    expect(outputElement).not.toBeNull();
  });
});


