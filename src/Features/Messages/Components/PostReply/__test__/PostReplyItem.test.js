import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import PostReplayItem from "../PostReplyItem";
describe("Post Reply component", () => {

  it('renders Date', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
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
        <PostReplayItem
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
        <PostReplayItem 
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
    const outputElement = screen.getByText("post replies: Mobiles");
    expect(outputElement).toBeInTheDocument();
  });

  it('Tests Author Text Color [Red]', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
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

  it('Tests Author Text', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
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

  it('Tests Reply Option', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.queryAllByText("Reply");
    expect(outputElement[0]).toBeInTheDocument();
  });

  it('No Cancel Button', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Cancel");
    expect(outputElement).not.toBeVisible();
  });

  it('Cancel Button Visible after Clicking Reply', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const buttonElement = screen.getByText("Reply");
    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("Cancel");
    expect(outputElement).toBeVisible();
  });

  it('Input Visible after Clicking Reply', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const buttonElement = screen.getByText("Reply");
    fireEvent.click(buttonElement);
    const outputElement = screen.getByDisplayValue("");
    expect(outputElement).toBeVisible();
  });

  it('Input not visible before Clicking Reply', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByDisplayValue("");
    expect(outputElement).not.toBeVisible();
  });

  it('Save Button not visinble before Clicking Reply', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Save");
    expect(outputElement).not.toBeVisible();
  });
  it('Save Button visinble after Clicking Reply', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const buttonElement = screen.getByText("Reply");
    fireEvent.click(buttonElement);
    const outputElement = screen.getByText("Save");
    expect(outputElement).toBeVisible();
  });

  it('Change Input Value After Clicking Reply', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const buttonElement = screen.getByText("Reply");
    fireEvent.click(buttonElement);
    const outputElement = screen.getByDisplayValue("");
    fireEvent.change(outputElement, {target: {value: "A user"}});
    expect(outputElement.value).toEqual("A user");
  });

  it('Mark as Unread', () => {
    render(
      <TestingComponent>
        <PostReplayItem 
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Mark Unread");
    expect(outputElement).toBeVisible();
  });
 

});
