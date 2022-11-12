import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SaveChangesModal from "./SaveChangesModal";

/**
 * @param {boolean} show - boolean to show modal
 * @param {function} onDiscard - handle on click discard
 * @param {function} onSave - handle on click save
 * @param {function} onHide - handle on click x
 * @param {boolean} showX - boolean to show x button or not
 */
function out() {
  console.log("clicked");
}

Enzyme.configure({ adapter: new Adapter() });
describe("modal to check unsaved changes", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SaveChangesModal
          show={true}
          onDiscard={out}
          onSave={out}
          onHide={out}
          showX={true}
        />
      )
    ).toMatchSnapshot();
  });
});
