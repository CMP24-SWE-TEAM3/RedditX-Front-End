import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import CollapsePostFooter from "./CollapsePostFooter";

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
describe("Collapse Post Footer Controls", () => {
  it("test CollapsePostFooter renders correctly", async () => {
    render(
      <TestingComponent>
        <CollapsePostFooter post={{ commentNumber: 10 }} />
      </TestingComponent>
    );
    expect(screen.getByText("Comments")).toBeInTheDocument();
    expect(screen.getByText("Share")).toBeInTheDocument();
    expect(screen.getByText("Award")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });
});
