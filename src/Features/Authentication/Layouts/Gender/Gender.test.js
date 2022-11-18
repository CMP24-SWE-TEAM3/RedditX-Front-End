import { shallow } from "enzyme";

import React from "react";

import Gender from "./Gender";

describe("Gender Component", () => {
  const setGender = jest.fn();
  const setGenderScreen = jest.fn();
  const setInterestsScreen = jest.fn();
  const setPhotoUploadScreen = jest.fn();
  const wrapper = shallow(
    <Gender
      setGender={setGender}
      setGenderScreen={setGenderScreen}
      setInterestsScreen={setInterestsScreen}
      setPhotoUploadScreen={setPhotoUploadScreen}
    />
  );

  it("this is a test for Gender Component", () => {
    expect(wrapper).toMatchSnapshot();

    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((gender) => [gender, setGender]);

    wrapper.find('[id="chooseMan"]').simulate("click");

    expect(setGender).toBeCalled();
    expect(setGenderScreen).toBeCalled();
    expect(setInterestsScreen).toBeCalled();
    expect(setPhotoUploadScreen).toBeCalled();
  });
});
