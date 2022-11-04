import {shallow} from 'enzyme';

// import Components
import ModeratorButton from "./ModeratorButton";

describe("Moderator button Component", () => {
    it("this is a test for Moderator Component", () => {
        expect(shallow(<ModeratorButton/>)).toMatchSnapshot();

    });
});