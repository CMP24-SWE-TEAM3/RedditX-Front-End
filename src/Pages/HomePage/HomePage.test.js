import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";

// import Components
import HomePage from "./HomePage";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
describe("Home Page", () => {
  it("this is a test for Home Page", () => {
    expect(
      shallow(
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      )
    ).toMatchSnapshot();
  });
});
