import { shallow } from "enzyme";
import React from "react";

// Import components
import ChooseCommunity from "./ChooseCommunity";

// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";

describe("Choose community", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SubmitDestinationProvider>
        <CreatePostTitleProvider>
          <ChooseCommunity />
        </CreatePostTitleProvider>
      </SubmitDestinationProvider>
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
