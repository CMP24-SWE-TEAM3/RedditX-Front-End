import {
  FollowButton,
  FollowerContainer,
  FollowerLink,
  NameContainer,
  StyledSpan,
} from "./Follower.styled";
import { BASE_URL } from "API/axios";

const Follower = ({ initState, followerID, avatar }) => {
  return (
    <div>
      <FollowerContainer>
        <FollowerLink to={`/user/${followerID}`}>
          <NameContainer>
            <StyledSpan>
              <div>
                <img
                  crossOrigin="anonymous"
                  src={`${BASE_URL}/users/files/${avatar}`}
                  alt="follower_img"
                />
              </div>
            </StyledSpan>
            {followerID.substring(3)}
          </NameContainer>
        </FollowerLink>
        <FollowButton>follow</FollowButton>
      </FollowerContainer>
    </div>
  );
};

export default Follower;
