import {shallow} from 'enzyme';

// import Components
import CreatePostSideBar from "./CreatePostSideBar";

describe("Create Post Component", () => {
    it("this is a test for side-bar post Component", () => {
        expect(shallow(<CreatePostSideBar/>)).toMatchSnapshot();

    });
});