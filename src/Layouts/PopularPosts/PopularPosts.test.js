import {shallow} from 'enzyme';

// import Components
import PopularPosts from "./PopularPosts";

describe("Popular Posts Component", () => {
    it("this is a test for Popular Posts Component", () => {
        expect(shallow(<PopularPosts/>)).toMatchSnapshot();

    });
});