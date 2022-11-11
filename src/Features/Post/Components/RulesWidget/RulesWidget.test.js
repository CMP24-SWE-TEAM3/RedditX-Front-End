import Enzyme, { shallow } from "enzyme";
import RulesWidget from "./RulesWidget";

describe("widget show rules", () => {
  it("should render without crashing", () => {
    expect(shallow(<RulesWidget />)).toMatchSnapshot();
  });
});
