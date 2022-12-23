import { shallow } from "enzyme";
import { screen, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import VotingBar from "./VotingBar";

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

describe("VotingBar Component", () => {
  const wrapper = shallow(<VotingBar number={200} />);

  it("this is a test for VotingBar Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("this is a test for VotingBar Component 2", () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <VotingBar number={200} />
      </ThemeProvider>
    );
    expect(screen.queryByTestId("count").innerHTML).toEqual("200");
  });

  it("this is a test for VotingBar Component 3", async () => {
    render(
      <ThemeProvider theme={darkTheme}>
        <VotingBar number={200} />
      </ThemeProvider>
    );
    const up = screen.queryByTestId("up");
    up.click();

    await waitFor(() => {
      expect(screen.queryByTestId("count").innerHTML).toEqual("201");
    });
    const down = screen.queryByTestId("down");
    down.click();

    await waitFor(() => {
      expect(screen.queryByTestId("count").innerHTML).toEqual("199");
    });
  });
});
