import {shallow} from 'enzyme';

// import Components
import SearchBar from "./SearchBar";

describe("Search Bar Component", () => {
    it("this is a test for Search", () => {
        expect(shallow(<SearchBar/>)).toMatchSnapshot();

    });
});