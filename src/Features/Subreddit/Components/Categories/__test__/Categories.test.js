import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Subreddit/Utils/TestingComponent"
import ContextComponent from "Features/Subreddit/Utils/ContextComponent";
import Categories from "../Categories";
describe("CommunityCardItem component", () => {

  it('Testing Static Elements', () => {
    render(   
      
      <ContextComponent> 
        <TestingComponent>
              <Categories />
        </TestingComponent>
      </ContextComponent>
    );

    //Assertion For See More Button
    let outputElement = screen.getByRole("button");
    expect(outputElement.textContent).toBe("See More");

    //Assertion For Categories Heading
    outputElement = screen.getByRole("heading");
    expect(outputElement.textContent).toBe("Categories");

    //Assertion For First Category [Fixed]
    outputElement = screen.getByText("All Communities");
    expect(outputElement).toBeInTheDocument();
  });


  it('Testing Button Click', () => {
    render(   
      
      <ContextComponent> 
        <TestingComponent>
              <Categories />
        </TestingComponent>
      </ContextComponent>
    );

    //Act
    let outputElement = screen.getByRole("button");
    fireEvent.click(outputElement);

    //Assertion For Button Content After Click [Text Changes on Click]
    expect(outputElement.textContent).toBe("See Less");

    //Act
    fireEvent.click(outputElement);

    //Assertion For Button Content After Click [Text Changes on Click]
    expect(outputElement.textContent).toBe("See More");
  });



});