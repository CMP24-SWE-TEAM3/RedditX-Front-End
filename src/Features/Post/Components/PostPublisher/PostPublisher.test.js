import { shallow } from "enzyme";
import { screen, render, waitFor } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import PostPublisher from "./PostPublisher";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("PostPublisher Component", () => {
  const wrapper = shallow(<PostPublisher fullPost={true} />);

  it("this is a test for PostPublisher Component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("this is a test for PostPublisher Component 2", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <PostPublisher fullPost={false} />
        </ThemeProvider>
      </BrowserRouter>
    );
    expect(screen.queryByTestId("makeFollow")).not.toBeInTheDocument();
  });

  it("this is a test for PostPublisher Component 3", async () => {
    render(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <PostPublisher fullPost={true} />
        </ThemeProvider>
      </BrowserRouter>
    );
    const makeFollow = screen.queryByTestId("makeFollow");
    expect(makeFollow).toHaveStyle(`color: gray;`);
    makeFollow.click();

    await waitFor(() => {
      expect(makeFollow).toHaveStyle(`color: red;`);
    });
  });
});
