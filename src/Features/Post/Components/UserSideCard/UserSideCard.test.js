import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
import UserSideCard from "./UserSideCard";

jest.mock("Features/Post/Services/getUser", () => (fetchData, auth) => {});

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

describe("UserSideCard", () => {
  it("should be able to render without crashing", async () => {
    render(
      <TestingComponent>
        <UserSideCard />
      </TestingComponent>
    );
  });
});
