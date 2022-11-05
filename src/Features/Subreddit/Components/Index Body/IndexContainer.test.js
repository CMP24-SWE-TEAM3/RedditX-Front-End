import IndexContainer from "./IndexContainer";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});
describe("Community Indexing Page Container", () => {
  it("this is a test for Index Container", () => {
    expect(shallow(<IndexContainer />)).toMatchSnapshot();
  });
});