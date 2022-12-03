import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import ChooseCommunity from "./ChooseCommunity";

jest.mock(
  "Features/Post/Services/getCommunitiesList",
  () => (fetchData, auth) => {
    return {
      communities: [
        {
          icon: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          _id: "t5_imagepro",
          description: "This is a community description",
          name: "go 1",
          category: "Gaming",
          coverImg:
            "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          title: "Final post test",
          isJoined: true,
          stats: {
            members: 100,
            online: 100,
          },
          rankChange: 0,
        },
      ],
    };
  }
);

describe("Choose community", () => {
  it("test search input show", async () => {
    render(
      <TestingComponent>
        <ChooseCommunity />
      </TestingComponent>
    );
    const inputCommunity = screen.getByTestId("search-communities");
    let dropDown = screen.queryByTestId("communities-drop-down");
    expect(inputCommunity).toBeVisible();
    expect(dropDown).toBeNull();
    expect(inputCommunity.placeholder).toBe("Choose a community");
    expect(screen.queryByTestId("search-icon")).toBeNull();
  });

  it("test search input not show", async () => {
    render(
      <TestingComponent>
        <ChooseCommunity />
      </TestingComponent>
    );
    const inputCommunity = screen.getByTestId("search-communities");
    fireEvent.click(inputCommunity);
    let dropDown = screen.queryByTestId("communities-drop-down");
    dropDown = screen.queryByTestId("communities-drop-down");
    expect(dropDown).toBeInTheDocument();
    expect(screen.getByTestId("search-icon")).toBeInTheDocument();
  });
});
