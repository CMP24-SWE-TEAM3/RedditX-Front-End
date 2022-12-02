import { shallow } from "enzyme";
import React from "react";

// Import components
import NavigationPost from "./NavigationPost";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("Navigation Post", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationPost />);
    });

    it("should render without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
