import {shallow} from 'enzyme';

// import Components
import NotificationButton from "./NotificationButton";

describe("Notification button Component", () => {
    it("this is a test for Notification button Component", () => {
        expect(shallow(<NotificationButton/>)).toMatchSnapshot();

    });
});