import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SelectYourFlair from "./SelectYourFlair";

function hide() {
  console.log("hide");
}
function onApply() {
  console.log("Apply changes");
}

Enzyme.configure({ adapter: new Adapter() });
describe("modal to select your flair", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SelectYourFlair modalShow={true} hide={hide} onApply={onApply} />
      )
    ).toMatchSnapshot();
  });
});
