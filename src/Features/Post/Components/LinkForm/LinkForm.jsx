// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";

// Import styled components
import {
  PostButton,
  SaveDraftButton,
  StyledLinkForm,
  SubmitButtons,
} from "./LinkForm.styled";

// Import hooks
import { useState, useRef } from "react";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/selectedDestination";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";

// API
import useFetchFunction from "Hooks/useFetchFunction";
import axios from "API/axios";
/**
 * The form of link in create post page (Link tab)
 *
 * @returns {React.Component} - Link Form component (The form that appears when you click on the link tab in main section)
 */
const LinkForm = () => {
  // Context for title
  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();

  // State for link
  const [url, setUrl] = useState("");

  // Ref for title
  const titleRef = useRef(null);

  // Context for selected submit destination
  const { submitDestination } = useSubmitDestination();

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  /**
   * Handle title change
   *
   * @param {Event} e - Event
   */
  const handleTitleChange = (e) => {
    if (e.target.value.length <= 300) {
      setCreatePostTitle(e.target.value);
      titleRef.current.style.height = titleRef.current.scrollHeight + "px";
    }
  };

  /**
   * Handle key down
   *
   * @param {Event} e - Event
   */
  const handleKeyDown = (e) => {
    // Prevent enter key (new line)
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const submitForm = (e) => {
    dataFetch({
      axiosInstance: axios,
      method: "post",
      url: "/submit/",
      requestConfig: {
        data: {
          title: createPostTitle,
          text: url,
          nsfw: false,
          spoiler: false,
        },
      },
    });
  };
  return (
    <>
      <StyledLinkForm>
        <Form.Group className="title-group mb-3">
          <Form.Control
            ref={titleRef}
            as="textarea"
            placeholder="Title"
            value={createPostTitle}
            onChange={handleTitleChange}
            onKeyDown={handleKeyDown}
            rows={1}
            className="title-input"
          />
          <span>{createPostTitle.length}/300</span>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="Url"
            rows={3}
            onKeyDown={handleKeyDown}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </Form.Group>
        <PostFlagsWrapper />
        <SubmitButtons>
          {/* <SaveDraftButton variant="light">Save Draft</SaveDraftButton> */}
          <PostButton disabled={!submitDestination || !createPostTitle}>
            Post
          </PostButton>
        </SubmitButtons>
      </StyledLinkForm>
      <PostFormFooter id={"LinkForm"} />
    </>
  );
};

export default LinkForm;
