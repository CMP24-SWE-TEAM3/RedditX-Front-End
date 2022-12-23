import { render, screen } from "@testing-library/react";
import WidgetContainer from "./WidgetContainer";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

describe("container for widgets", () => {
  it("text in header should appear", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <WidgetContainer headerText="header">
          <></>
        </WidgetContainer>
      </SubredditTestingComponent>
    );

    //assert
    const headerElement = screen.getByText("header");
    expect(headerElement).toBeInTheDocument();
  });
});
