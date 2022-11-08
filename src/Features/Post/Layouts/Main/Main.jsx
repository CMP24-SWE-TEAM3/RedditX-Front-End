// Import styled components
import { Title, Container } from "./Main.styled";

// Import components and layouts
import ChooseCommunity from "Features/Post/Components/ChooseCommunity/ChooseCommunity";
import Tabs from "Features/Post/Layouts/Tabs/Tabs";

// Import hooks
import { useState } from "react";

// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/selectedDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";
import { CreatePostFlagsProvider } from "Features/Post/Contexts/createPostFlags";
import { CreatePostAttachmentsProvider } from "Features/Post/Contexts/createPostAttachments";
import { CreatePostFlairsProvider } from "Features/Post/Contexts/createPostFlairs";

/**
 * Main component (the main section in the create post page)
 *
 * @returns {React.Component} Main component (the main section in the create post page)
 */
const Main = () => {
  // State to store the selected community
  const [selectedDestination, setSelectedDestination] = useState(null);
  return (
    <SubmitDestinationProvider>
      <CreatePostTitleProvider>
        <CreatePostFlagsProvider>
          <CreatePostAttachmentsProvider>
            <CreatePostFlairsProvider>
              <Container>
                <Title>
                  <h4>Create a post</h4>
                </Title>
                <ChooseCommunity
                  selectedDestination={selectedDestination}
                  setSelectedDestination={setSelectedDestination}
                />
                <Tabs selectedDestination={selectedDestination} />
              </Container>
            </CreatePostFlairsProvider>
          </CreatePostAttachmentsProvider>
        </CreatePostFlagsProvider>
      </CreatePostTitleProvider>
    </SubmitDestinationProvider>
  );
};

export default Main;
