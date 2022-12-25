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
  return (
    <CommunityDate
      communityInfo={{
        _id: "t5_2qj8s",
        banner: "https://i.redd.it/6xq2qj8s.jpg",
        description: "This is a community description",
        createdAt: "2021-05-01T00:00:00.000Z",
        icon: "https://i.redd.it/6xq2qj8s.jpg",
      }}
    />
  );
};

describe("Description and created date of subreddit", () => {
  it("should render without crashing", () => {
    render(
      <TestingComponent>
        <CommunityDate
          communityInfo={{
            _id: "t5_2qj8s",
            banner: "https://i.redd.it/6xq2qj8s.jpg",
            description: "This is a community description",
            createdAt: "2021-05-01T00:00:00.000Z",
            icon: "https://i.redd.it/6xq2qj8s.jpg",
          }}
        />
      </TestingComponent>
    );
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
    expect(screen.getByText(`r/2qj8s`)).toBeInTheDocument();
    expect(
      screen.getByText(`This is a community description`)
    ).toBeInTheDocument();
  });
});
