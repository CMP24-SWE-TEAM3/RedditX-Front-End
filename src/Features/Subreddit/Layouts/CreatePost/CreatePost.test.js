import {shallow} from 'enzyme';

// import Components
import CreatePost from "./CreatePost";

describe("Create Post Component", () => {
    it("this is a test for Create Post Component", () => {
        expect(shallow(<CreatePost/>)).toMatchSnapshot();

    });
});