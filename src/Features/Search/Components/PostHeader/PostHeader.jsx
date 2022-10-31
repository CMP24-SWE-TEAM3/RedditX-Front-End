import { Link } from "react-router-dom";
import CommImage from "../../Assets/CommunityImage.png";
import {
  PostHeaderStyle,
  CommunityInfo,
  CommunityImage,
  PostedBy,
  UserName,
} from "./PostHeader.styled";

/**
 * Component that contains the Post Header element.
 *
 * @Component
 * @returns {React.Component}
 */
const PostHeader = () => {
  return (
    <PostHeaderStyle>
      <CommunityInfo>
        <Link href="https://www.w3schools.com/ ">
          <CommunityImage src={CommImage} alt="communityimage" />
        </Link>
        <Link href="https://www.w3schools.com/" className="community-name">
          r/WallStreetRiches
        </Link>
      </CommunityInfo>
      <span className="break">.</span>
      <PostedBy>
        <span className="first">Posted by</span>
        <UserName>
          <Link href="https://www.w3schools.com/">u/Old_Salamander_7479</Link>
        </UserName>
        <span className="time-post">5 days ago</span>
      </PostedBy>
    </PostHeaderStyle>
  );
};

export default PostHeader;
