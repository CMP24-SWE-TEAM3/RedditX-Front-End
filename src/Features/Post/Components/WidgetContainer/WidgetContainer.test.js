import Enzyme, { shallow } from "enzyme";
import WidgetContainer from "./WidgetContainer";

describe("container for widgets", () => {
  it("this is a test for Community Container", () => {
    expect(shallow(<WidgetContainer />)).toMatchSnapshot();
  });
});
