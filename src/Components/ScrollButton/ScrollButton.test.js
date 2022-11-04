import {shallow} from 'enzyme';

// import Components
import ScrollButton from "./ScrollButton";

describe("Scroll", () => {
    it("this is a test for Scroll Button", () => {
        expect(shallow(<ScrollButton/>)).toMatchSnapshot();

    });
});