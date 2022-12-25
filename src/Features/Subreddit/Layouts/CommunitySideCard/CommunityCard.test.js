import { fireEvent, render, screen } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import CommunitySideCard from "./CommunityCard";

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
        <CommunitySideCard
          communityList = {comm}
        />
      </TestingComponent>
    );

    const outputElement = screen.getByRole("heading");
    expect(outputElement).toBeInTheDocument();

    expect(outputElement).toBeVisible();
    
    expect(outputElement).not.toBeNull();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.textContent.slice(0,7)).toEqual('See All');
  });

}); 