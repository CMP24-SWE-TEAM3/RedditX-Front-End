import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import Header from "../Header";
describe("Header component for Index Page", () => {

  it('renders static Header', () => {
    render(
      <TestingComponent>
        <Header />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Community Directory");
    expect(outputElement).toBeInTheDocument();
  });
});