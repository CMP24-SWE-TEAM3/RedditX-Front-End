import {shallow} from 'enzyme';

// import Components
import SearchDropDown from "./SearchDropDown";

describe("Search Drop Down Component", () => {
    it("this is a test for Search Drop Down", () => {
        expect(shallow(<SearchDropDown/>)).toMatchSnapshot();

    });
});