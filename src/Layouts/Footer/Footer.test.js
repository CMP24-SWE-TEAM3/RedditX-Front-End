import {shallow} from 'enzyme';

// import Components
import Footer from "./Footer";

describe("Footer Component", () => {
    it("this is a test for Footer Component", () => {
        expect(shallow(<Footer/>)).toMatchSnapshot();

    });
});