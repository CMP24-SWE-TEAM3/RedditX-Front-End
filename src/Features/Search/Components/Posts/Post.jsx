import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { ContainerPost } from "./Post.styled";

/**
 * Component that contains the PostslistItems included PostHeader Component and post body and PostFooter Component.
 *
 * @Component
 * @returns {React.Component}
 */

const PostItem = () => {
  return (
    <ContainerPost>
      <div className="post-outline">
        <PostHeader />
        <div className="post-body">
          <div className="post-body-content">
            <a href="https://www.w3schools.com/">
              <div>
                <p>
                  John Oliver Refers to NFL’s ‘Monday Night Football’ as
                  “Primetime Programming Where People Kill Themselves for
                  Entertainment”
                </p>
              </div>
            </a>
            <span className="flair">flair</span>
          </div>
          <div className="post-image">
            <div className="img">
              <a href="https://www.w3schools.com/">
                <div className="image"></div>
              </a>
            </div>
          </div>
        </div>
        <PostFooter />
      </div>
    </ContainerPost>
  );
};

export default PostItem;
