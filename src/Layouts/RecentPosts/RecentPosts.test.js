import {shallow} from 'enzyme';

// import Components
import RecentPosts from "./RecentPosts";

describe("Recent Posts Component", () => {
    it("this is a test for Recent Posts Component", () => {
        expect(shallow(<RecentPosts/>)).toMatchSnapshot();

    });
});