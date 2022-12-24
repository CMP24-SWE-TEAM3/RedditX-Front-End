import { shallow, mount } from "enzyme";
import { enzymeFind } from "styled-components/test-utils";
import EditModerators from "./EditModerators";
import { ThemeProvider } from "styled-components";
import darkTheme from "Theme/darkTheme";
import { BrowserRouter } from "react-router-dom";
import { SearchInput } from "./EditModerators.styled";

const Moderator = [
  {
    _id: "mohamedRomee",
  },
];
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const communityName = "t5_imagepro";

describe("EditModerators Component", () => {
  it("this is a test for EditModerators Component", () => {
    const wrapper = mount(
      <BrowserRouter>
        <ThemeProvider theme={darkTheme}>
          <EditModerators Moderator={Moderator} communityName={communityName} />{" "}
        </ThemeProvider>
      </BrowserRouter>
    );

    const renderedComponent = enzymeFind(wrapper, SearchInput);
    expect(renderedComponent.prop("className")).toBeDefined();
  });
});
