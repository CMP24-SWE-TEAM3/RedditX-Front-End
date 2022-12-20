import {shallow} from 'enzyme';

// import Components
import ProfilePostButton from "./ProfilePostButton";

describe("Profile Post button Component", () => {
    it("this is a test for Profile Post Button Component", () => {
        expect(shallow(<ProfilePostButton/>)).toMatchSnapshot();

    });
});