import Enzyme, { shallow } from "enzyme";
import UserFlairPreview from "./UserFlairPreview";

jest.mock("Features/Post/Services/getFlairs", () => (fetchData, auth) => {});


describe("preview of selected flair", () => {
  it("should render without crashing", () => {
    expect(shallow(<UserFlairPreview />)).toMatchSnapshot();
  });
});
