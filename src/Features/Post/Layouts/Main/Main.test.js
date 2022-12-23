import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Main from "./Main";

jest.mock("Features/Post/Services/submitPost", () => (fetchData, auth) => {});

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

jest.mock("Hooks/useFetchFunction.js", () => () => {
  return [
    "data",
    "error",
    "loading",
    jest.fn().mockReturnValue({
      data: {
        name: "test",
        type: "subreddit",
      },
    }),
  ];
});
describe("Main section", () => {
  it("renders Main component", () => {
    render(
      <TestingComponent>
        <Main />
      </TestingComponent>
    );
    const headingElement = screen.getByText("Create a post");
    expect(headingElement).toBeVisible();
  });
});
