import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import CommunityDate from "./CommunityDate";
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";
import { useEffect } from "react";

const MockSubmitDest = () => {
  const { submitDestination, setSubmitDestination } = useSubmitDestination();
  useEffect(() => {
    setSubmitDestination({
      name: "test",
      description: "test",
    });
  }, []);
  return <CommunityDate />;
};
describe("Description and created date of subreddit", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <CommunityDate />
      </TestingComponent>
    );
  });

  it("should render its component without crashing without submit destination", () => {
    render(
      <TestingComponent>
        <CommunityDate />
      </TestingComponent>
    );
    expect(screen.getByAltText("community")).toBeInTheDocument();
    expect(screen.queryByTestId("community-name")).not.toBeInTheDocument();
    expect(
      screen.queryByTestId("community-description")
    ).not.toBeInTheDocument();
  });
  it("should render its component without crashing with submit destination", () => {
    render(
      <TestingComponent>
        <MockSubmitDest />
      </TestingComponent>
    );
    expect(screen.getByAltText("community")).toBeInTheDocument();
    expect(screen.getByTestId("community-name")).toBeInTheDocument();
    expect(screen.getByTestId("community-description")).toBeInTheDocument();
    expect(screen.getByText(`r/test`)).toBeInTheDocument();
    expect(screen.getByText(`test`)).toBeInTheDocument();
  });
});
