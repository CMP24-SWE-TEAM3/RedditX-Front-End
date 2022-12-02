import { render, screen } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import CommunityCardItem from "../CommunityCardItem";
describe("CommunityCardItem component", () => {

  
  it('Testing for Title according to passed Props', () => {
    // Arrange
    render(
      <TestingComponent>
        <CommunityCardItem
          title = {"r/Gaming"}
          index = {1}
        />
      </TestingComponent>
    );

    // Assert
    //Assertion for Titles
    let outputElement = screen.getByText("r/Gaming");
    expect(outputElement).toBeInTheDocument();
    
    //Assertion for Index
    outputElement = screen.getByText("1");
    expect(outputElement).toBeInTheDocument();
  });
});