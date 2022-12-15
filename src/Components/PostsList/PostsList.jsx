import PostShape from "Features/Post/Layouts/PostShape/PostShape";
import { Container1, InnerContainer } from "./PostsList.styled";

const PostsList = ({ PostList }) => {
  console.log("first");

  return (
    <Container1>
      <InnerContainer>
        {PostList.results &&
          PostList.results.map((post, i) => {
            return (
              <div key={i}>
                <PostShape post={post} />
              </div>
            );
          })}
      </InnerContainer>
    </Container1>
  );
};

export default PostsList;
