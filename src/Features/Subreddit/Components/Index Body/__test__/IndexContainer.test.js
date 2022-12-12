import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import IndexContainer from "../IndexContainer";

describe("Index Body component Heading", () => {

  it('renders static Header', () => {
<<<<<<< HEAD
    const arr = [{id:1, title:'First'}, {id:2, title:'Second'}];
    render(
      <TestingComponent>
        <IndexContainer communityIndex={arr}/>
=======
    render(
      <TestingComponent>
        <IndexContainer />
>>>>>>> settings
      </TestingComponent>
    );
    const outputElement = screen.getByRole("heading");
    expect(outputElement.textContent).toContain("Browse communities", {exact: false})
  });

});