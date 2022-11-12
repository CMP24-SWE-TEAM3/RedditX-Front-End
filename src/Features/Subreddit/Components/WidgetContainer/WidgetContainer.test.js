import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import WidgetContainer from "./WidgetContainer";

Enzyme.configure({ adapter: new Adapter() });
describe("container for widgets", () => {
  it("this is a test for Community Container", () => {
    expect(
      shallow(
        <WidgetContainer headerText="header">
          <></>
        </WidgetContainer>
      )
    ).toMatchSnapshot();
  });
});
