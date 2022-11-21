// import Components
import {
  Container,
  ModalBodyContainer,
  DraftEditorContainer,
  UserName,
  UserNameContainer,
  CommentsContainer,
} from "./Post.styled";
import NavigationPost from "Features/Post/Components/NavigationPost/NavigationPost";
import CommentDraftEditor from "Features/Post/Components/CommentDarftEditor/CommentDarftEditor";
import { useState, useEffect } from "react";
import Comment from "Features/Post/Components/Comment/Comment";

const Post = ({ show, setShow }) => {
  // State for files in drat editor
  const [files, setFiles] = useState([]);

  // State for text in draft editor
  const [text, setText] = useState("");

  const handleClose = () => setShow(false);

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
    <Container show={show} onHide={handleClose}>
      <NavigationPost />
      <ModalBodyContainer>
        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
        commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
        atque a dolores quisquam quisquam adipisci possimus laboriosam.
        Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.
        Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
        incidunt dolore amet atque facilis ipsum deleniti rem!
      </ModalBodyContainer>
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
    </Container>
  );
};

export default Post;
