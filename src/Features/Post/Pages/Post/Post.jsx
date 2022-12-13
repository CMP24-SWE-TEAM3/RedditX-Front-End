// import Components
import {
  Container,
  ModalBodyContainer,
  DraftEditorContainer,
  UserName,
  UserNameContainer,
  CommentsContainer,
  PostContent,
  AsidePostChild,
  AsidePost,
} from "./Post.styled";
import NavigationPost from "Features/Post/Components/NavigationPost/NavigationPost";
import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import RulesWidget from "Features/Post/Components/RulesWidget/RulesWidget";
import AboutPost from "Features/Post/Components/AboutPost/AboutPost";
import ModeratorWidget from "Features/Post/Components/ModeratorWidget/ModeratorWidget";
import RelatedCommunities from "Features/Post/Components/RelatedCommunities/RelatedCommunities";
import CommentDraftEditor from "Features/Post/Components/CommentDarftEditor/CommentDarftEditor";
import { useState, useEffect } from "react";
import Comment from "Features/Post/Components/Comment/Comment";
/**
 *
 * Component that displays post with comments , likes displayed on show modal
 * @param show
 * @param setShow
 * @return {React.Component}
 */
const Post = ({ post, show, setShow }) => {
  // State for files in drat editor
  const [files, setFiles] = useState([]);
  // State for text in draft editor
  const [text, setText] = useState("");
  // State for handle show of modal window

  const comments = [
    {
      id: 1,
      username: "u/username",
      time: "1 hour ago",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
      replies: [
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
          replies: [
            {
              id: 1,
              username: "u/username",
              time: "1 hour ago",
              body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
            },
          ],
        },
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis odit, voluptates laudantium mollitia aperiam nisi iste blanditiis amet doloribus dolorum libero exercitationem pariatur unde nostrum. Ab voluptatum architecto quis inventore.",
        },
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "lorem ipsum dolor sit amet",
        },
        {
          id: 1,
          username: "u/username",
          time: "1 hour ago",
          body: "lorem ipsum dolor sit amet",
        },
      ],
    },
    {
      id: 1,
      username: "u/username",
      time: "1 hour ago",
      body: "lorem ipsum dolor sit amet",
    },
  ];
  return (
    <Container show={show} onHide={setShow} backdrop={"true"}>
      <NavigationPost setHandleShowModal={setShow} />
      <ModalBodyContainer>
        <PostContent>
          <PostShape post={post} fullPost={true} />
          <UserNameContainer>
            Comment as <UserName>Abdelrahman_Hamza</UserName>
          </UserNameContainer>
          <DraftEditorContainer>
            <CommentDraftEditor
              files={files}
              setFiles={setFiles}
              text={text}
              setText={setText}
            />
          </DraftEditorContainer>
          <CommentsContainer>
            {comments.map((comment) => (
              <Comment comment={comment} />
            ))}
          </CommentsContainer>
        </PostContent>
        <AsidePost>
          <AsidePostChild>
            <AboutPost />
            <RulesWidget />
            <RelatedCommunities />
            <ModeratorWidget />
          </AsidePostChild>
        </AsidePost>
      </ModalBodyContainer>
    </Container>
  );
};

export default Post;
