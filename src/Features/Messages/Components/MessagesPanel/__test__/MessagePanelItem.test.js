import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import MessageBannelItem from "../MessagePanelItem";
describe("Message Panel Item component", () => {

  it('renders Date', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const outputElement = screen.getByText("Tue Nov 29 2022");
    expect(outputElement).toBeInTheDocument();
  });

  
  it('renders Passed Message Content', () => {
    render(
      <TestingComponent>
        <MessageBannelItem
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
    const outputElement = screen.getByText("Broken Now");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Subheading', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const outputElement = screen.getByText("Mobiles:");
    expect(outputElement).toBeInTheDocument();
  });

  it('Tests Author Text Color [Red]', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const outputElement = screen.queryAllByText("Jacob");
    expect(outputElement[1]).toHaveStyle(`color: #ff0011`);
  });

  it('Tests Author Text', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const outputElement = screen.queryAllByText("Jacob");
    expect(outputElement).not.toBeNull();
  });

  it('Tests Reply Option', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
        <MessageBannelItem 
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
        <MessageBannelItem 
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
        <MessageBannelItem 
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
        <MessageBannelItem 
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
        <MessageBannelItem 
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
        <MessageBannelItem 
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
        <MessageBannelItem 
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

  it('Test Delete Button Visible', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const buttonElement = screen.getByText("Delete");
    expect(buttonElement).toBeInTheDocument();
  });

  it('No Delete Button Visible after clicking Delete', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const buttonElement = screen.getByText("Delete");
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    const buttonElementAfter = screen.queryByText("Delete");
    expect(buttonElementAfter).not.toBeVisible();
  });

  it('Test Yes Button Not Visible', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const buttonElement = screen.getByText("Yes");
    expect(buttonElement).not.toBeVisible();
  });

  it('Test Yes Button Visible after Delete', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const buttonElement = screen.getByText("Delete");
    fireEvent.click(buttonElement);
    const yes = screen.getByText("Yes");
    expect(yes).toBeVisible();
  });

  it('Test Delete Button Visible after hitting No', () => {
    render(
      <TestingComponent>
        <MessageBannelItem 
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
    const buttonElement = screen.getByText("Delete");
    fireEvent.click(buttonElement);
    const no = screen.getByText("No");
    fireEvent.click(no);
    const outputElement = screen.getByText("Delete");
    expect(outputElement).toBeVisible();
  });
});


