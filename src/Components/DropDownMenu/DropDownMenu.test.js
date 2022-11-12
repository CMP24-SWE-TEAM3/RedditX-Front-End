import {shallow} from 'enzyme';

// import Components
import DropDownMenu from "./DropDownMenu";

describe("Drop Down Menu Component", () => {
    it("this is a test for Drop Down Menu", () => {
        expect(shallow(<DropDownMenu/>)).toMatchSnapshot();

    });
});