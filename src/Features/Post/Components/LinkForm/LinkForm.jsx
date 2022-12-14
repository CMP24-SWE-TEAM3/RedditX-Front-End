// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";
import FlairModal from "Features/Post/Components/FlairModal/FlairModal";

// Import styled components
import {
  PostButton,
  SaveDraftButton,
  StyledLinkForm,
  SubmitButtons,
} from "./LinkForm.styled";

// Import hooks
import { useState, useRef, useEffect } from "react";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";
import { useCreatePostText } from "Features/Post/Contexts/createPostText";

// API services
import getPostFlairs from "Features/Post/Services/getFlairs";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

/**
 * The form of link in create post page (Link tab)
 * @param {Function} submitPost - Function to submit the post
 * @returns {React.Component} - Link Form component (The form that appears when you click on the link tab in main section)
 */
const LinkForm = ({ submitPost }) => {
  // State for flair modal
  const [modalShow, setModalShow] = useState(false);

  // State for flair
  const [flairIndex, setFlairIndex] = useState(null);

  // Context for title
  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();

  // Context for text
  const { createPostText, setCreatePostText } = useCreatePostText();

  // State for link
  const [url, setUrl] = useState("");

  // Ref for title
  const titleRef = useRef(null);

  // Context for selected submit destination
  const { submitDestination } = useSubmitDestination();

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

  // const [flairs, error, isLoading, reload] = useFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "/flairs/",
  //   requestConfig: {
  //     headers: {
  //       "Content-Language": "en-US",
  //     },
  //   },
  // });
  // Fetch flairs
  let [flairs, error, isLoading, fetchData] = useFetchFunction();
  const auth = useAuth();
  useEffect(() => {
    if (submitDestination)
      getPostFlairs(fetchData, submitDestination._id, auth);
  }, [submitDestination]);
  // TODO: Remove this statement
  flairs = [
    {
      id: "t7_63248d012f459a937e2684fd",
      text: "Flair 1 text",
      flairBackGroundColor: "rgb(70, 209, 96)",
      flairTextColor: "rgb(255, 255, 255)",
      modOnly: true,
      allowUserEdits: true,
    },
    {
      id: "t7_63248d012f459a937e1223123d",
      text: "Flair 2 text",
      flairBackGroundColor: "blue",
      flairTextColor: "rgb(255, 255, 255)",
      modOnly: true,
      allowUserEdits: true,
    },
    {
      id: "t1_632012f459a937e1223123d",
      text: "Flair 3 text",
      flairBackGroundColor: "red",
      flairTextColor: "rgb(70, 209, 96)",
      modOnly: true,
      allowUserEdits: true,
    },
  ];
  const onModalHide = () => {
    setModalShow(false);
    setFlairIndex(null);
  };

  /**
   * Handle form submit
   */
  const submitForm = () => {
    setCreatePostText(url);
    submitPost({ type: "link", textJSON: url, textHTML: url });
  };
  return (
    <>
      <FlairModal
        show={modalShow}
        onHide={onModalHide}
        flairIndex={flairIndex}
        setFlairIndex={setFlairIndex}
        flairList={flairs}
        error={error}
        isLoading={isLoading}
        postOrUser="post"
      />
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
            id="title"
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
            id="url"
          />
        </Form.Group>
        <PostFlagsWrapper flairHandler={setModalShow} />
        <SubmitButtons>
          {/* <SaveDraftButton variant="light">Save Draft</SaveDraftButton> */}
          <PostButton
            disabled={!submitDestination || !createPostTitle}
            onClick={submitForm}
            id="post"
          >
            Post
          </PostButton>
        </SubmitButtons>
      </StyledLinkForm>
      <PostFormFooter id={"LinkForm"} />
    </>
  );
};

export default LinkForm;
