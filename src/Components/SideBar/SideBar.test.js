import {shallow} from 'enzyme';

// import Components
import SideBar from "./SideBar";

describe("Side Bar Component", () => {
    it("this is a test for Side Bar", () => {
        expect(shallow(<SideBar/>)).toMatchSnapshot();

    });
});