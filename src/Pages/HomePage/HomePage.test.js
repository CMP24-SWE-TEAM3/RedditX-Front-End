import {shallow} from 'enzyme';

// import Components
import HomePage from "./HomePage";

describe("Home Page", () => {
    it("this is a test for Home Page", () => {
        expect(shallow(<HomePage/>)).toMatchSnapshot();

    });
});