import {shallow} from 'enzyme';

// import Components
import Navbar from "./Navbar";

describe("Navbar Component", () => {
    it("this is a test for Navbar Component", () => {
        expect(shallow(<Navbar/>)).toMatchSnapshot();

    });
});