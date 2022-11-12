import {shallow} from 'enzyme';

// import Components
import Navigation from "./Navigation";

describe("Navbar Component", () => {
    it("this is a test for Navbar Component", () => {
        expect(shallow(<Navigation/>)).toMatchSnapshot();

    });
});