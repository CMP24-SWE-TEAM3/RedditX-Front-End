import {shallow} from 'enzyme';

// import Components
import CreatePostButton from "./CreatePostButton";

describe("Create Post button Component", () => {
    it("this is a test for Create post button", () => {
        expect(shallow(<CreatePostButton/>)).toMatchSnapshot();

    });
});