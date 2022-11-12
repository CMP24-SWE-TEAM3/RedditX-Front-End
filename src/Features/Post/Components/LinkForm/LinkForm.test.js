import { mount, shallow } from "enzyme";
import React from "react";

// Import components
import LinkForm from "./LinkForm";

// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";

describe("Link form", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <SubmitDestinationProvider>
        <CreatePostTitleProvider>
          <LinkForm />
        </CreatePostTitleProvider>
      </SubmitDestinationProvider>
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
