import { Link } from "react-router-dom";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { ContainerPost } from "./Post.styled";

/**
 * Component that contains the PostslistItems included PostHeader Component and post body and PostFooter Component.
 *
 * @Component
 * @param {object} post - the info of the post
 * @returns {React.Component}
 */

const PostItem = ({ post }) => {
  if (post) {
    // console.log(post);
    const postBody = {
      bodyImage: post.attachments[0],
      bodyText: post.text,
      flair: post.flairText,
      flairColor: post.flairTextColor,
      flairBackgroundColor: post.flairBackGround,
      flairID: post.flairID,
    };
    const postFooter = {
      upVotes: post.votesCount,
      Comments: post.insightCnt,
    };
    const postHeader = {
      headerImage: post.attachments[0],
      communityName: post.communityID,
      communityID: post.communityID,
      userName: post.userID,
      userID: post.userID,
      time: post.createdAt,

      nsfw: post.nsfw,
    };
    let images = post.attachments.length;
    let isThereImage = true;
    if (images === 0) {
      isThereImage = false;
    }

    // console.log(isThereImage);
    return (
      <ContainerPost
        pimage={postBody.bodyImage}
        flairColor={postBody.flairColor}
        flairBackgroundColor={postBody.flairBackgroundColor}
        title="post"
      >
        <div className="post-outline">
          <PostHeader postheader={postHeader} />
          <div className="post-body">
            <div className="post-body-content">
              <Link to="#">
                <div>
                  <p className={"post-content"} title="postbody">
                    {postBody.bodyText}
                  </p>
                </div>
              </Link>
              <span className="flair" title="postFlair">
                {postBody.flair}
              </span>
            </div>
            {isThereImage && (
              <div className="post-image">
                <div className="img">
                  <Link to="#">
                    <div className="image">
                      <img
                        src={require(`../../Assets/CommunityImage.png`)}
                        alt="userImage"
                        className="image"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <PostFooter postfooter={postFooter} />
        </div>
      </ContainerPost>
    );
  }
};

export default PostItem;
