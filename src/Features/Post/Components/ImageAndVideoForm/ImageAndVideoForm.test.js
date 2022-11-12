import { shallow } from "enzyme";
import React from "react";

// Import components
import ImageAndVideoForm from "./ImageAndVideoForm";

// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";

describe("Image and video form", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SubmitDestinationProvider>
        <CreatePostTitleProvider>
          <ImageAndVideoForm />
        </CreatePostTitleProvider>
      </SubmitDestinationProvider>
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
