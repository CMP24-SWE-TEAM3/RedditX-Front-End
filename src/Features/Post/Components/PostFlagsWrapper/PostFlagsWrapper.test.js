import { shallow } from "enzyme";
import { CreatePostFlagsProvider } from "Features/Post/Contexts/createPostFlags";
import { CreatePostFlairsProvider } from "Features/Post/Contexts/createPostFlairs";
import React from "react";

// Import components
import PostFlagsWrapper from "./PostFlagsWrapper";

describe("Post flag wrapper", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <CreatePostFlagsProvider>
        <CreatePostFlairsProvider>
          <PostFlagsWrapper />
        </CreatePostFlairsProvider>
      </CreatePostFlagsProvider>
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
