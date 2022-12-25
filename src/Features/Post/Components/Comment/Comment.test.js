import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Comment from "./Comment";

jest.mock(
  "Features/Post/Services/getCommunityInfo",
  () => (fetchData, auth) => {
    return {
      communities: [],
    };
  }
);
jest.mock("Features/Post/Services/submitReply", () => (fetchData, auth) => {
  return {
    communities: [],
  };
});
jest.mock("Features/Post/Services/getUser", () => (fetchData, auth) => {
  return {
    communities: [],
  };
});
jest.mock("Features/Post/Services/submitSave", () => (fetchData, auth) => {
  return {
    communities: [],
  };
});
jest.mock("Features/Post/Services/submitSpam", () => (fetchData, auth) => {
  return {
    communities: [],
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
describe("Comment Controls", () => {
  it("test Comment renders correctly", async () => {
    render(
      <TestingComponent>
        <Comment
          comment={{
            votesCount: 10,
            userID: 10,
            voters: [],
            _id: "10010",
            createdAt: 10,
            textJSON: `{"blocks":[{"key":"afmo3","text":"My comment","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}`,
            authorId: { _id: "1asda0" },
          }}
        />
      </TestingComponent>
    );
    expect(screen.getByText("Reply")).toBeInTheDocument();
    expect(screen.getByText("Report")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Edit")).toBeInTheDocument();
  });
});
