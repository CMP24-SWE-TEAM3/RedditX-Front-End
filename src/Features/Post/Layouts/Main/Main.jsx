// Import styled components
import { Title, Container } from "./Main.styled";

// Import components and layouts
import ChooseCommunity from "Features/Post/Components/ChooseCommunity/ChooseCommunity";
import Tabs from "Features/Post/Layouts/Tabs/Tabs";

// Import hooks
import { useState } from "react";

// Import api
import axios from "API/axios";
import useFetchFunction from "Hooks/useFetchFunction";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";
import { useCreatePostText } from "Features/Post/Contexts/createPostText";
import { useCreatePostFlags } from "Features/Post/Contexts/createPostFlags";
import { useCreatePostFlairs } from "Features/Post/Contexts/createPostFlairs";
import { useCreatePostAttachments } from "Features/Post/Contexts/createPostAttachments";

/**
 * Main component (the main section in the create post page)
 *
 * @returns {React.Component} Main component (the main section in the create post page)
 */
const Main = () => {
  // State to store the selected community
  const [selectedDestination, setSelectedDestination] = useState(null);

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();
  const { createPostText, setCreatePostText } = useCreatePostText();
  const { createPostFlags, setCreatePostFlags } = useCreatePostFlags();
  const { createPostFlairs, setCreatePostFlairs } = useCreatePostFlairs();
  const { createPostAttachments, setCreatePostAttachments } =
    useCreatePostAttachments();
  const submitPost = () => {
    // console.log({
    //   title: createPostTitle,
    //   originalText: createPostText,
    //   ...createPostFlags,
    //   ...createPostFlairs,
    //   attachments: createPostAttachments,
    // });
    dataFetch({
      axiosInstance: axios,
      method: "post",
      url: "/submit/",
      requestConfig: {
        data: {
          title: createPostTitle,
          originalText: createPostText,
          ...createPostFlags,
          ...createPostFlairs,
          attachments: createPostAttachments,
        },
      },
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
      <Tabs submitPost={submitPost} selectedDestination={selectedDestination} />
    </Container>
  );
};

export default Main;
