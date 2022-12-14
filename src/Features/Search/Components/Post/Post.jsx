import { Link } from "react-router-dom";
import PostFooter from "../PostFooter/PostFooter";
import PostHeader from "../PostHeader/PostHeader";
import { useState } from "react";
import { ContainerPost } from "./Post.styled";
import Post from "Features/Post/Pages/Post/Post";
import RichTextPostBody from "Features/Post/Components/RichTextPostBody/RichTextPostBody";

/**
 * Component that contains the PostslistItems included PostHeader Component and post body and PostFooter Component.
 *
 * @Component
 * @param {object} post - the info of the post
 * @returns {React.Component}
 */

const PostItem = ({ post }) => {
  const [showPost, setShowPost] = useState(false);
  if (post) {
    // console.log(post);
    const postBody = {
      bodyImage: post.attachments[0],
      bodyText: post.textJSON,
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
      headerImage: post.userID.avatar,
      communityName: post.communityID,
      communityID: post.communityID,
      userName: post.userID._id,
      userID: post.userID._id,
      time: post.createdAt,

      nsfw: post.nsfw,
    };
    let images = post.attachments.length;
    let isThereImage = true;
    if (images === 0) {
      isThereImage = false;
    }
    // console.log(postBody.bodyImage);
    // console.log(isThereImage);
    function isJsonString(str) {
      try {
        JSON.parse(str);
      } catch (e) {
        return false;
      }
      return true;
    }
    return (
      <ContainerPost
        pimage={postBody.bodyImage}
        flairColor={postBody.flairColor}
        flairBackgroundColor={postBody.flairBackgroundColor}
        title="post"
        // onClick={(e) => {
        //   e.preventDefault();
        //   setShowPost(true);
        // }}
      >
        {/* <Post show={showPost} setShow={setShowPost} /> */}
        <div className="post-outline">
          <PostHeader postheader={postHeader} />
          <div className="post-body">
            <div className="post-body-content">
              <Link to="#">
                <div>
                  <p className={"post-content"} title="postbody">
                    {/* {postBody.bodyText} */}
                    {isJsonString(postBody.bodyText) && (
                      <RichTextPostBody post={post} />
                    )}
                    {!isJsonString(postBody.bodyText) && postBody.bodyText}
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
                        crossOrigin="anonymous"
                        src={`https://api.redditswe22.tech/posts/files/${postBody.bodyImage}`}
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
