import {shallow} from 'enzyme';

// import Components
import CommunityCard from "./CommunityCard";

describe("Community Card  Component", () => {
    it("this is a test for Community Card  Component", () => {
        expect(shallow(<CommunityCard/>)).toMatchSnapshot();

    });
});