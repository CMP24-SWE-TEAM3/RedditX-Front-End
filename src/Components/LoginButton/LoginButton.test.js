import {shallow} from 'enzyme';

// import Components
import LoginButton from "./LoginButton";

describe("Login Button Component", () => {
    it("this is a test for Login Button", () => {
        expect(shallow(<LoginButton/>)).toMatchSnapshot();

    });
});