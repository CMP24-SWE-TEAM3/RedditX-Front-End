// Import bootstrap components
import Form from "react-bootstrap/Form";

// Import components
import DragAndDropFile from "Features/Post/Components/DragDropFile/DragDropFile";
import PostFlagsWrapper from "Features/Post/Components/PostFlagsWrapper/PostFlagsWrapper";
import PostFormFooter from "Features/Post/Components/PostFormFooter/PostFormFooter";
import FlairModal from "Features/Post/Components/FlairModal/FlairModal";

// Import styled components
import {
  PostButton,
  StyledImageAndVideoFrom,
  CancelButton,
  SubmitButtons,
} from "./ImageAndVideoForm.styled";

// Import hooks
import { useState, useRef } from "react";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";
import { useCreatePostTitle } from "Features/Post/Contexts/createPostTitle";

// API services
import getPostFlairs from "Features/Post/Services/getFlairs";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

// Import contexts
import { useCreatePostAttachments } from "Features/Post/Contexts/createPostAttachments";

// Import hooks
import { useEffect } from "react";

/**
 * Image and video form component (The form that appears when you click on the image and video tab in main section)
 * @param {Function} submitPost - Function to submit the post
 * @returns {React.Component} - Image and video form component (The form that appears when you click on the image and video tab in main section)
 */
const ImageAndVideoForm = ({ submitPost }) => {
  // State for flair modal
  const [modalShow, setModalShow] = useState(false);

  // State for flair
  const [flairIndex, setFlairIndex] = useState(null);

  // State for title
  const { createPostTitle, setCreatePostTitle } = useCreatePostTitle();

  // State for files
  const [files, setFiles] = useState([]);

  // Ref for title
  const titleRef = useRef(null);

  // Context for selected submit destination
  const { submitDestination } = useSubmitDestination();

  // Context for attachments
  const { createPostAttachments, setCreatePostAttachments } =
    useCreatePostAttachments();

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
  const onModalHide = () => {
    setModalShow(false);
    setFlairIndex(null);
  };

  /**
   * Handle form submit
   */
  const submitForm = () => {
    setCreatePostAttachments(files);
    submitPost("image");
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
      <StyledImageAndVideoFrom>
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
        <DragAndDropFile files={files} setFiles={setFiles} />
        <PostFlagsWrapper flairHandler={setModalShow} />
        <SubmitButtons>
          <CancelButton variant="light">Cancel</CancelButton>
          <PostButton
            // disabled={!submitDestination || !createPostTitle}
            disabled={!createPostTitle}
            onClick={submitForm}
            id="post"
          >
            Post
          </PostButton>
        </SubmitButtons>
      </StyledImageAndVideoFrom>
      <PostFormFooter id={"ImageAndVideoForm"} />
    </>
  );
};

export default ImageAndVideoForm;
