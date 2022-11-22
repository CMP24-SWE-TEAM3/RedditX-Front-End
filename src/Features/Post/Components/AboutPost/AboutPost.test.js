import { shallow } from "enzyme";
import React from "react";

// Import components
import AboutPost from "./AboutPost";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockedUsedNavigate,
}));

describe("About Post", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<AboutPost />);
    });

    it("should render without crashing", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
