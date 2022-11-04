import {shallow} from 'enzyme';

// import Components
import SignUp from "./SignUp";

describe("Sign Up Component", () => {
    it("this is a test for Sign Up Button", () => {
        expect(shallow(<SignUp/>)).toMatchSnapshot();

    });
});