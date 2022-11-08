import {shallow} from 'enzyme';

// import Components
import DropDownItem from "./DropDownItem";

describe("Drop Down Item Component", () => {
    it("this is a test for Drop Down Item Component", () => {
        expect(shallow(<DropDownItem/>)).toMatchSnapshot();

    });
});