import { render } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import TestingComponent from "Features/Post/TestingComponent";
import UserFlairPreview from "./UserFlairPreview";

jest.mock("Features/Post/Services/getFlairs", () => (fetchData, auth) => {});

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

describe("UserFlairPreview", () => {
  it("should be able to render without crashing", async () => {
    render(
      <TestingComponent>
        <UserFlairPreview />
      </TestingComponent>
    );
  });
});
