import {shallow} from 'enzyme';

// import Components
import DropDownLeft from "./DropDownLeft";

describe("Drop Down list Component", () => {
    it("this is a test for Drop Down list Component", () => {
        expect(shallow(<DropDownLeft/>)).toMatchSnapshot();

    });
});