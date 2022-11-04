import {shallow} from 'enzyme';

// import Components
import Post from "./Post";

describe("Post Button Component", () => {
    it("this is a test for Post Button", () => {
        expect(shallow(<Post/>)).toMatchSnapshot();

    });
});