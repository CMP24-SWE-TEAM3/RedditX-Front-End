import Enzyme, { shallow } from "enzyme";
import UserFlairPreview from "./UserFlairPreview";

describe("preview of selected flair", () => {
  it("should render without crashing", () => {
    expect(shallow(<UserFlairPreview />)).toMatchSnapshot();
  });
});
