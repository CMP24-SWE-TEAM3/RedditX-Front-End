import {
  FollowButton,
  FollowerContainer,
  FollowerLink,
  NameContainer,
  StyledSpan,
} from "./Follower.styled";
import { BASE_URL } from "API/axios";
import { useFollowing } from "Features/User/Contexts/FollowingProvider";
import { useEffect, useState } from "react";
import followUser from "Features/User/Services/followUser";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

const Follower = ({ followerID, avatar }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const { following } = useFollowing();
  const auth = useAuth();
  const { userID } = useUserID();

  const [
    followingResponse,
    followingError,
    followingIsLoading,
    fetchFollowing,
  ] = useFetchFunction();

  const handleFollowing = (type) => {
    followUser(fetchFollowing, auth, {
      action: type ? "sub" : "unsub",
      srName: userID,
    });
  };

  useEffect(() => {
    if (following && following.length !== 0) {
      setIsFollowing(() => {
        return following.find((element) => {
          return element._id === followerID;
        });
      });
    }
  }, [following, followerID]);

  function followingHandler() {
    setIsFollowing((prev) => !prev);
    handleFollowing(isFollowing);
  }

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
        <FollowButton isFollowing={isFollowing} onClick={followingHandler}>
          {isFollowing ? "following" : "follow"}
        </FollowButton>
      </FollowerContainer>
    </div>
  );
};

export default Follower;
