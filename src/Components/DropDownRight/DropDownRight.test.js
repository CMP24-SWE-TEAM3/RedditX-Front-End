import {shallow} from 'enzyme';

// import Components
import DropDownRightButton from "./DropDownRight";

describe("Drop down right Component", () => {
    it("this is a test for Drop down Component", () => {
        expect(shallow(<DropDownRightButton/>)).toMatchSnapshot();

    });
});