import VotingBar from "Features/Post/Components/VotingBar/VotingBar";
import PostPublisher from "Features/Post/Components/PostPublisher/PostPublisher";
import PostContent from "Features/Post/Components/PostContent/PostContent";
import PostFooter from "Features/Post/Components/PostFooter/PostFooter";

import {
  Container,
  ContentContainer,
  DraftEditorContainerOuter,
  CancelButton,
  SubmitButton,
  ButtonsContainer,
} from "./PostShape.styled";

import { useState } from "react";
import { DraftEditorContainer } from "Features/Post/Components/DraftEditor/DraftEditor.styled";
import DraftEditor from "Features/Post/Components/DraftEditor/DraftEditor";
import submitEditPost from "Features/Post/Services/submitEditPost";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/**
 * PostShape Component
 * @returns {React.Component} PostShape component
 */
const PostShape = ({
  fullPost,
  post,
  fullWidth,
  handlePostEdit,
  editPost,
  setEditPost,
}) => {
  const [makeHidden, setMakeHidden] = useState(false);
  const [editPostText, setEditPostText] = useState("");
  const [editPostHtmlText, setEditPostHtmlText] = useState("");
  const auth = useAuth();
  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const navigate = useNavigate();
  const editPostHandler = () => {
    submitEditPost(
      dataFetch,
      {
        linkID: "t3_" + post._id,
        textHTML: editPostHtmlText,
        textJSON: editPostText,
      },
      auth
    );
  };
  useEffect(() => {
    if (!isLoading && data && data.response && data.response._id) {
      navigate(`/post-preview/${data.response._id}`);
    }
  }, [data]);
  return (
    <>
      {!makeHidden && (
        <Container fullWidth={fullWidth} fullPost={fullPost}>
          <VotingBar
            number={post.votesCount ? post.votesCount : 0}
            id={post._id}
            voters={post.voters ? post.voters : []}
          />
          <ContentContainer>
            <PostPublisher fullPost={fullPost} post={post} />
            {!editPost && <PostContent post={post} />}
            {editPost && (
              <DraftEditorContainerOuter>
                <DraftEditorContainer>
                  <DraftEditor
                    text={editPostText}
                    setText={setEditPostText}
                    setTextHTML={setEditPostHtmlText}
                    load={post.textJSON}
                  />
                </DraftEditorContainer>

                <ButtonsContainer>
                  <CancelButton onClick={() => setEditPost(false)}>
                    Cancel
                  </CancelButton>
                  <SubmitButton onClick={editPostHandler}>
                    {!isLoading && "Save"}
                    {isLoading && (
                      <Spinner animation="border" variant="light" />
                    )}
                  </SubmitButton>
                </ButtonsContainer>
              </DraftEditorContainerOuter>
            )}
            <PostFooter
              handlePostEdit={handlePostEdit}
              post={post}
              setMakeHidden={setMakeHidden}
            />
          </ContentContainer>
        </Container>
      )}
    </>
  );
};

export default PostShape;
