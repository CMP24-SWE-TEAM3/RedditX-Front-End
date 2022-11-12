import {shallow} from 'enzyme';

// import Components
import CommunityCardItem from "./CommunityCardItem";

describe("Community Card Item Component", () => {
    it("this is a test for Community Card Item Component", () => {
        expect(shallow(<CommunityCardItem/>)).toMatchSnapshot();

    });
});