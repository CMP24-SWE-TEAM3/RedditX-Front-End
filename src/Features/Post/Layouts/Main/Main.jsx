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
import { useAuth } from "Features/Authentication/Contexts/Authentication";

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
  const auth = useAuth();

  /**
   * Function to handle submit the post
   * (Called when the user clicks on the submit button)
   */
  const handleSubmit = (type) => {
    var bodyFormData = new FormData();
    // bodyFormData.append("community", selectedDestination);
    // bodyFormData.append("flair", createPostFlairs);
    bodyFormData.append("title", createPostTitle);
    // TODO: remove letter "a" when the backend is fixed
    if (type === "linkWithImage") {
      bodyFormData.append("textJSON", createPostText);
      // bodyFormData.append("textHTML", createPostText);
    } else {
      bodyFormData.append("textJSON", createPostText);
      bodyFormData.append("textHTML", createPostText);
    }
    bodyFormData.append("nsfw", createPostFlags["nsfw"]);
    bodyFormData.append("spoiler", createPostFlags["spoiler"]);
    createPostAttachments.forEach((element) => {
      bodyFormData.append("attachments", element, element.path);
    });
    bodyFormData.append("type", type);

    // Call the submit post api (Service)
    submitPost(dataFetch, bodyFormData, auth);
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
      {error}
      <Tabs
        submitPost={handleSubmit}
        selectedDestination={selectedDestination}
      />
    </Container>
  );
};

export default Main;
