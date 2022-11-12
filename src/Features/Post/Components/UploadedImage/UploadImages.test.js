import { shallow } from "enzyme";
import React from "react";

// Import components
import UploadedImage from "./UploadedImage";

describe("Uploaded images container", () => {
  let file = { name: "image", uploadDate: "2020-10-10",type:"image/png" };
  const deleteFile = () => console.log("delete");
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<UploadedImage file={file} deleteFile={deleteFile} />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
