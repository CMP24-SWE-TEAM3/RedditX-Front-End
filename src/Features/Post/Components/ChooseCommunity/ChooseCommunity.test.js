import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
// Import contexts
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

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
jest.mock("Features/Post/Services/getUser", () => (fetchData, auth) => {
  return {
    user: {
      userInfo: {
        about: {
          user: {
            avatar:
              "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
          },
        },
      },
    },
  };
});

jest.mock("Features/Authentication/Contexts/Authentication", () => ({
  __esModule: true, // this property makes it work
  useAuth: function () {
    return {
      getUserName: jest.fn().mockReturnValue("username"),
      getToken: jest.fn().mockReturnValue("token"),
      isLoggedIn: jest.fn().mockReturnValue(true),
    };
  },
  AuthProvider: ({ children }) => {
    return (
      <mock-authprovider data-testid="auth-provider">
        {children}
      </mock-authprovider>
    );
  },
}));
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
