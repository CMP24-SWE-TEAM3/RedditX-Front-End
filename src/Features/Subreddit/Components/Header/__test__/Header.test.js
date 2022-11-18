import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import Header from "../Header";
describe("CommunityCardItem component", () => {

  it('renders static Header', () => {
    render(
      <TestingComponent>
        <Header />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Today's Top Growing Communities");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders static Subheading', () => {
    render(
      <TestingComponent>
        <Header />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Browse Reddit's top growing communities. Find the top communities in your favorite category.");
    expect(outputElement).toBeInTheDocument();
  });
});