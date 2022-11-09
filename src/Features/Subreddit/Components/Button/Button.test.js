import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import Button from "./Button";

const isJoined = true;
function onJoin() {
  console.log("click Join");
}

Enzyme.configure({ adapter: new Adapter() });
describe("Join and Leave button", () => {
  it("should render without crashing", () => {
    expect(
      shallow(<Button isJoined={isJoined} onJoin={onJoin} />)
    ).toMatchSnapshot();
  });
});
