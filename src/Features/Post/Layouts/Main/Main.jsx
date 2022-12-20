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
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Main component (the main section in the create post page)
 *
 * @returns {React.Component} Main component (the main section in the create post page)
 */
const Main = () => {
  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();
  const { createPostText, setCreatePostText } = useCreatePostText();
  const { createPostFlags, setCreatePostFlags } = useCreatePostFlags();
  const { createPostFlairs, setCreatePostFlairs } = useCreatePostFlairs();
  const { createPostAttachments, setCreatePostAttachments } =
    useCreatePostAttachments();
  const { submitDestination, setSubmitDestination } = useSubmitDestination();

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
  const handleSubmit = ({
    type = "linkWithImage",
    textJSON = "",
    textHTML = "",
    attachments = [],
  } = {}) => {
    var bodyFormData = new FormData();
    submitDestination.type !== "user" &&
      bodyFormData.append("communityID", submitDestination._id);
    // bodyFormData.append("flair", createPostFlairs);
    bodyFormData.append("title", createPostTitle);
    bodyFormData.append("textJSON", textJSON);
    bodyFormData.append("textHTML", textHTML);
    bodyFormData.append("nsfw", createPostFlags["nsfw"]);
    bodyFormData.append("spoiler", createPostFlags["spoiler"]);
    attachments.forEach((element) => {
      bodyFormData.append("attachments", element, element.path);
    });
    bodyFormData.append("type", type);

    // Call the submit post api (Service)
    submitPost(dataFetch, bodyFormData, auth);
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && data && data._id) {
      navigate(`/post-preview/${data._id}`);
    }
  }, [data]);

  return (
    <Container>
      <Title>
        <h4>Create a post</h4>
      </Title>
      <ChooseCommunity />
      {error}
      <Tabs submitPost={handleSubmit} isLoading={isLoading} />
    </Container>
  );
};

export default Main;
