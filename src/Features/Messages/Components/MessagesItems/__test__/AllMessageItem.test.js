import { fireEvent, render, screen } from "@testing-library/react";
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
        time={"2022-11-29T"}
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
        time={"2022-11-29T"}
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
        time={"2022-11-29T"}
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
        time={"2022-11-29T"}
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
        time={"2022-11-29T"}
        msg={"Broken Now"}
        upvote={"neutral"}
        admin={false}
        read={true}
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

  it('Tests Reply Option', () => {
    render(
      <TestingComponent>
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
        <NormalMessageAll 
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
