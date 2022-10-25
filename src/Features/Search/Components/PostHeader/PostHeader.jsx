import CommImage from "../../Assets/CommunityImage.png";
import {
  PostHeaderStyle,
  CommunityInfo,
  CommunityImage,
  PostedBy,
  UserName,
} from "./PostHeader.styled";

const PostHeader = () => {
  return (
    <PostHeaderStyle>
      <CommunityInfo>
        <a href="https://www.w3schools.com/ ">
          <CommunityImage src={CommImage} alt="communityimage" />
        </a>
        <a href="https://www.w3schools.com/" className="community-name">
          r/WallStreetRiches
        </a>
      </CommunityInfo>
      <span className="break">.</span>
      <PostedBy>
        <span className="first">Posted by</span>
        <UserName>
          <a href="https://www.w3schools.com/">u/Old_Salamander_7479</a>
        </UserName>
        <span className="time-post">5 days ago</span>
      </PostedBy>
    </PostHeaderStyle>
  );
};

export default PostHeader;
