// Import styled components
import { Title, Container } from "./Main.styled";

// Import components and layouts
import ChooseCommunity from "Features/Post/Components/ChooseCommunity/ChooseCommunity";
import Tabs from "Features/Post/Layouts/Tabs/Tabs";

// Import hooks
import { useState } from "react";

// Import api
import useFetchFunction from "Hooks/useFetchFunction";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";
import { useCreatePostText } from "Features/Post/Contexts/createPostText";
import { useCreatePostFlags } from "Features/Post/Contexts/createPostFlags";
import { useCreatePostFlairs } from "Features/Post/Contexts/createPostFlairs";
import { useCreatePostAttachments } from "Features/Post/Contexts/createPostAttachments";
import submitPost from "Features/Post/Services/submitPost";

/**
 * Main component (the main section in the create post page)
 *
 * @returns {React.Component} Main component (the main section in the create post page)
 */
const Main = () => {
  // State to store the selected community
  const [selectedDestination, setSelectedDestination] = useState(null);

  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();
  const { createPostText, setCreatePostText } = useCreatePostText();
  const { createPostFlags, setCreatePostFlags } = useCreatePostFlags();
  const { createPostFlairs, setCreatePostFlairs } = useCreatePostFlairs();
  const { createPostAttachments, setCreatePostAttachments } =
    useCreatePostAttachments();

  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  /**
   * Function to handle submit the post
   * (Called when the user clicks on the submit button)
   */
  const handleSubmit = () => {
    // Call the submit post api (Service)
    submitPost(dataFetch, {
      title: createPostTitle,
      originalText: createPostText,
      ...createPostFlags,
      ...createPostFlairs,
      attachments: createPostAttachments,
    });
  };
  return (
    <Container>
      <Title>
        <h4>Create a post</h4>
      </Title>
      <ChooseCommunity
        selectedDestination={selectedDestination}
        setSelectedDestination={setSelectedDestination}
      />
      <Tabs
        submitPost={handleSubmit}
        selectedDestination={selectedDestination}
      />
    </Container>
  );
};

export default Main;
