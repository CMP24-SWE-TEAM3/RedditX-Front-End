import  Index from "./IndexPage";
import Enzyme, { shallow } from "enzyme";
import Adapter from '@zarconontol/enzyme-adapter-react-18'

Enzyme.configure({adapter: new Adapter()});

describe("Indexing Page", () => {
  it("this is a test for the whole A-Z Indexing Page", () => {
    expect(shallow(<Index />)).toMatchSnapshot();
  });
});