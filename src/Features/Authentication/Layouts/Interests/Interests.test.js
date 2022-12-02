import { shallow } from "enzyme";
import React from "react";

import Interests from "./Interests";

describe("Interests Component", () => {
  const interests = ["interest1", "interest2"];

  const setInterests = jest.fn();
  const setGenderScreen = jest.fn();
  const setInterestsScreen = jest.fn();
  const setPhotoUploadScreen = jest.fn();
  const wrapper = shallow(
    <Interests
      interests={interests}
      setInterests={setInterests}
      setGenderScreen={setGenderScreen}
      setInterestsScreen={setInterestsScreen}
      setPhotoUploadScreen={setPhotoUploadScreen}
    />
  );

  it("this is a test for Interests Component", () => {
    expect(shallow(<Interests interests={interests} />)).toMatchSnapshot();
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((interests) => [interests, setInterests]);
    wrapper.find('[id="fun"]').simulate("click");
    expect(setInterests).toBeCalled();
    wrapper.find('[id="cont"]').simulate("click");
    expect(setGenderScreen).toBeCalled();
    expect(setInterestsScreen).toBeCalled();
    expect(setPhotoUploadScreen).toBeCalled();
  });

  it("this is a test for the back button in Interests Component", () => {
   
    const handleClick = jest.spyOn(React, "useState");
    handleClick.mockImplementation((interests) => [interests, setInterests]);
    wrapper.find('[id="back"]').simulate("click");
    expect(setInterestsScreen).toBeCalled();
    expect(setGenderScreen).toBeCalled();
    expect(setPhotoUploadScreen).toBeCalled();
  });

  
});
