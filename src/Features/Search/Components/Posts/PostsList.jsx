import PostItem from "./Post";
import { ContainerPostsList } from "./PostsList.styled";

const PostsList = () => {
  return (
    <ContainerPostsList>
      <div className="Posts-List">
        <div className="Sub-List">
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
          <PostItem />
        </div>
      </div>
    </ContainerPostsList>
  );
};

export default PostsList;
