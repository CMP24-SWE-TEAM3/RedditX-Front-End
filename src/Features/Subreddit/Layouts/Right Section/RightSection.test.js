import { fireEvent, render, screen } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import RightSection from "./RightSection";

const comm = {communities: [{
    _id: "t5_dfd",
    icon: "t5_dfd",
    category: "Funny",
}, {
    _id: "t5_dddfd",
    icon: "t5_dfd",
    category: "Funny",
}]}
describe("Community Card component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <RightSection
          communityList = {comm}
        />
      </TestingComponent>
    );

    let buttonElement = screen.getByText('a');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('b');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('c');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('d');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('e');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('f');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('g');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('h');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('i');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('j');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('k');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('l');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('m');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('n');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('o');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('p');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('q');
    expect(buttonElement).toBeInTheDocument();

    buttonElement = screen.getByText('r');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('s');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('t');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('u');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('v');
    expect(buttonElement).toBeInTheDocument();
    buttonElement = screen.getByText('w');
    expect(buttonElement).toBeInTheDocument();
  });

}); 