import { Link } from "react-router-dom";
import CommImage from "../../Assets/CommunityImage.png";
import {
  PostHeaderStyle,
  CommunityInfo,
  CommunityImage,
  PostedBy,
  UserName,
  Flair,
} from "./PostHeader.styled";

/**
 * Component that contains the Post Header element.
 *
 * @Component
 * @param {object} postheader - the info of post header
 * @returns {React.Component}
 */
const PostHeader = ({ postheader }) => {
  return (
    <PostHeaderStyle>
      <CommunityInfo>
        <Link to="#">
          <CommunityImage
            src={require(`../../Assets/${postheader.headerImage}`)}
            alt="communityimage"
          />
        </Link>
        <Link to="#" className="community-name" title="commName">
          r/{postheader.communityName}
        </Link>
      </CommunityInfo>
      <span className="break">.</span>
      <PostedBy>
        <span className="first">Posted by</span>
        <UserName>
          <Link to="#" title="userName">
            u/{postheader.userName}
            {/* u/Old_Salamander_7479 */}
          </Link>
        </UserName>

        <span className="time-post">{postheader.time}</span>
        {postheader.nsfw && (
          <Flair nsfw={postheader.nsfw} title="flair">
            {postheader.nsfw && <span>nsfw</span>}
          </Flair>
        )}
      </PostedBy>
    </PostHeaderStyle>
  );
};

export default PostHeader;
