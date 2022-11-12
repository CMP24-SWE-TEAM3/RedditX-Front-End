import Enzyme, { shallow } from "enzyme";
import OnlineMembers from "./OnlineMembers";

describe("show members and online members", () => {
  it("should render without crashing", () => {
    expect(shallow(<OnlineMembers />)).toMatchSnapshot();
  });
});
