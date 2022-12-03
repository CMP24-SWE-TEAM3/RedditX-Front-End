import { Link } from "react-router-dom";
import CommImage from "../../Assets/CommunityImage.png";
import Moment from "react-moment";
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
  // console.log(postheader);
  if (postheader) {
    return (
      <PostHeaderStyle>
        <CommunityInfo>
          <Link to={`/subreddit/${postheader.communityID}`}>
            {postheader.headerImage && (
              <CommunityImage
                src={require(`../../Assets/${postheader.headerImage}`)}
                alt="communityimage"
              />
            )}
          </Link>
          {postheader.communityName && (
            <Link
              to={`/subreddit/${postheader.communityID}`}
              className="community-name"
              title="commName"
            >
              r/{postheader.communityName.substring(3)}
            </Link>
          )}
        </CommunityInfo>
        <span className="break">.</span>
        <PostedBy>
          <span className="first">Posted by</span>
          <UserName>
            {postheader.userName && (
              <Link to="#" title="userName">
                u/{postheader.userName.substring(3)}
                {/* u/Old_Salamander_7479 */}
              </Link>
            )}
          </UserName>

          <span className="time-post">
            <Moment fromNow>{postheader.time}</Moment>
          </span>
          {postheader.nsfw && (
            <Flair nsfw={postheader.nsfw} title="flair">
              {postheader.nsfw && <span>nsfw</span>}
            </Flair>
          )}
        </PostedBy>
      </PostHeaderStyle>
    );
  }
};

export default PostHeader;
