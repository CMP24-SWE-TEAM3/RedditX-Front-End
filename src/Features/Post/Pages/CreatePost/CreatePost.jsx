// Import styled components
import { Container } from "./CreatePost.styled";

// Import components
import Main from "Features/Post/Layouts/Main/Main";
import Sidebar from "Features/Post/Layouts/Sidebar/Sidebar";

// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";
import { CreatePostFlagsProvider } from "Features/Post/Contexts/createPostFlags";
import { CreatePostAttachmentsProvider } from "Features/Post/Contexts/createPostAttachments";
import { CreatePostFlairsProvider } from "Features/Post/Contexts/createPostFlairs";
import { CreatePostTextProvider } from "Features/Post/Contexts/createPostText";

/**
 * Create Post page (Submit page)
 *
 * @returns {React.Component} CreatePost component
 */
const CreatePost = () => {
  return (
    <SubmitDestinationProvider>
      <CreatePostTitleProvider>
        <CreatePostFlagsProvider>
          <CreatePostAttachmentsProvider>
            <CreatePostFlairsProvider>
              <CreatePostTextProvider>
                <Container>
                  <Main />
                  <Sidebar />
                </Container>
              </CreatePostTextProvider>
            </CreatePostFlairsProvider>
          </CreatePostAttachmentsProvider>
        </CreatePostFlagsProvider>
      </CreatePostTitleProvider>
    </SubmitDestinationProvider>
  );
};

export default CreatePost;
