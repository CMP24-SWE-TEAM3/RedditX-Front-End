import {
  Container,
  InnerContainer,
  BackgroundContainer,
  SettingsLink,
  AvatarContainer,
  UserName,
  UsernameLink,
  KarmaCakeContainer,
  UsernameSpan,
  KarmaContainer,
  KarmaTitle,
  KarmaNo,
  BlockedButton,
  ButtonContainer,
  LinkButton,
  MoreOptionsContainer,
  MoreOptionsButton,
  IconDiv,
  ImageContentInner,
  ImageExact,
  ImageLabel,
  ImageProf,
  ImageRelative,
  ImageRelativeInner,
  ImageSelected,
  ImageSpan,
  UserAboutContainer,
  FollowersLink,
  StyledFollowButton,
} from "./UserSideCard.styled";
import profile from "Features/User/Assets/images/icon.jpg";
import { VscGear } from "react-icons/vsc";
import { GiFlowerEmblem } from "react-icons/gi";
import { TbCake } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
import uploadUserPhoto from "Features/Authentication/Services/uploadUserPhoto";
import { TbCameraPlus } from "react-icons/tb";
import { BASE_URL } from "API/axios";
import { useUserAbout } from "Features/User/Contexts/UserAboutProvider";
import { useUserID } from "Features/User/Contexts/UserIDProvider";
import { useIsMe } from "Features/User/Contexts/IsMeProvider";
import { useFollowers } from "Features/User/Contexts/FollowersProvider";
import Moment from "react-moment";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { TiInfo } from "react-icons/ti";
import { MdChevronRight } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import BlockModal from "Features/User/Components/BlockModal/BlockModal";
import blockUser from "Features/User/Services/blockUser";
import { useFollowing } from "Features/User/Contexts/FollowingProvider";
import followUser from "Features/User/Services/followUser";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const UserSideCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);
  const [blockText, setBlockText] = useState("Blocked");
  // const [followText, setFollowText] = useState("Follow")
  const location = useLocation();
  const url = location.pathname;
  const urlArr = url.split("/");
  const active = urlArr[3];

  const { userAbout } = useUserAbout();
  const { userID } = useUserID();
  const { isMe } = useIsMe();
  const { followers } = useFollowers();

  // if(userID )

  useEffect(() => {
    console.log("Date user", userAbout && userAbout.createdAt);
    if (userAbout && userAbout.createdAt)
      setDate(new Date(userAbout.createdAt));
  }, [userAbout]);

  const image = useRef();

  const auth = useAuth();

  const [data, error, isLoading, dataFetch] = useFetchFunction();
  const [selectedImage, setSelectedImage] = useState(null);
  const bodyFormData = new FormData();

  useEffect(() => {
    // uploadUserPhoto(dataFetch, bodyFormData, auth);
    if (selectedImage != null) {
      // console.log(selectedImage);
      bodyFormData.append("action", "upload");
      bodyFormData.append("attachment", selectedImage, selectedImage.name);
      uploadUserPhoto(dataFetch, bodyFormData, auth);
      // console.log(selectedImage);
    }
  }, [selectedImage]);

  function toggleHandler() {
    setToggle((prev) => !prev);
  }

  const Background = () => {
    return <BackgroundContainer></BackgroundContainer>;
  };

  const ProfilePic = () => {
    return (
      <AvatarContainer>
        <div>
          <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
            style={{ display: "none" }}
            ref={image}
          />
        </div>
        <ImageContentInner>
          <ImageProf>
            <ImageLabel>
              <ImageSpan role={"presentation"}>
                <ImageRelative>
                  <ImageRelativeInner>
                    <ImageExact selectedImage={true}>
                      {!selectedImage && (
                        <img
                          crossOrigin="anonymous"
                          src={
                            userAbout
                              ? userAbout.avatar
                                ? `${BASE_URL}/users/files/${userAbout.avatar}`
                                : profile
                              : profile
                          }
                          alt=""
                        />
                      )}
                      {selectedImage && (
                        <ImageSelected
                          src={URL.createObjectURL(selectedImage)}
                          alt=""
                        />
                      )}
                    </ImageExact>
                  </ImageRelativeInner>
                </ImageRelative>
              </ImageSpan>
              {isMe && (
                <IconDiv
                  onClick={() => {
                    image.current.click();
                  }}
                  className="camera"
                >
                  <span>
                    <TbCameraPlus />
                  </span>
                </IconDiv>
              )}
            </ImageLabel>
          </ImageProf>
        </ImageContentInner>
      </AvatarContainer>
    );
  };

  const KarmaCake = () => {
    return (
      <KarmaCakeContainer>
        <KarmaContainer>
          <KarmaTitle>Karma</KarmaTitle>
          <KarmaNo>
            <span className="icon">
              <GiFlowerEmblem />
            </span>
            {userAbout && userAbout.totalKarma && (
              <span className="number"> {userAbout.totalKarma} </span>
            )}
            {((userAbout && !userAbout.totalKarma) || !userAbout) && (
              <span className="number"> 0 </span>
            )}
          </KarmaNo>
        </KarmaContainer>
        <KarmaContainer>
          <KarmaTitle>Cake Day</KarmaTitle>
          <OverlayTrigger
            placement={"bottom"}
            overlay={
              <Tooltip>
                {userAbout && userAbout.createdAt && (
                  <Moment fromNow>{userAbout.createdAt}</Moment>
                )}
              </Tooltip>
            }
            delay="200"
          >
            <KarmaNo>
              <span className="icon">
                <TbCake />
              </span>
              {userAbout && date && (
                <span className="number">
                  {/* <Moment format="MMM D YYYY"> {date} </Moment> */}
                  {" " +
                    MONTHS[date.getMonth()] +
                    " " +
                    date.getDate() +
                    ", " +
                    date.getFullYear()}
                </span>
              )}
            </KarmaNo>
          </OverlayTrigger>
        </KarmaContainer>
        {isMe && followers && (
          <FollowersLink to="followers">
            <KarmaContainer>
              <KarmaTitle>Followers</KarmaTitle>
              <KarmaNo>
                <span className="icon">
                  <BsFillPersonFill />
                </span>
                <span className="number">
                  {followers.length}
                  <MdChevronRight
                    fontSize={"20px"}
                    style={{ marginLeft: "10px" }}
                  />
                </span>
              </KarmaNo>
            </KarmaContainer>
          </FollowersLink>
        )}
      </KarmaCakeContainer>
    );
  };

  const MoreOptions = () => {
    return (
      <MoreOptionsContainer>
        <MoreOptionsButton className="right" onClick={toggleHandler}>
          {toggle ? "Fewer" : "More"} Options
        </MoreOptionsButton>
      </MoreOptionsContainer>
    );
  };

  const MoreOptionsContent = () => {
    return (
      <MoreOptionsContainer>
        <MoreOptionsButton className="left">Block User</MoreOptionsButton>
      </MoreOptionsContainer>
    );
  };

  const UserAbout = ({ text }) => {
    return <UserAboutContainer>{text}</UserAboutContainer>;
  };

  const UnBlockButton = () => {
    return (
      <BlockedButton
        onMouseLeave={onOutBlockHandler}
        onMouseEnter={onInBLockHandler}
        onClick={() => {
          setShow(true);
          setBlockText("Blocked");
        }}
      >
        {blockText}
      </BlockedButton>
    );
  };

  function onInBLockHandler() {
    setBlockText("Unblock");
  }

  function onOutBlockHandler() {
    setBlockText("Block");
  }

  const [unBlockResponse, errorUnBlock, loadingUnBlock, unBlockData] =
    useFetchFunction();

  console.log(
    "unblock response",
    unBlockResponse,
    "error:",
    errorUnBlock,
    "loading",
    loadingUnBlock
  );

  const handleUnBlock = () => {
    blockUser(unBlockData, auth, {
      userID: userID,
      action: false,
    });
  };

  function unBlockHandler() {
    setShow(false);
    handleUnBlock();
  }

  const FollowButton = () => {
    return (
      <StyledFollowButton
        text={isFollowing ? "Unfollow" : "Follow"}
        onClick={followingHandler}
      >
        {isFollowing ? "unFollow" : "Follow"}
      </StyledFollowButton>
    );
  };

  const { following } = useFollowing();

  const [
    followingResponse,
    followingError,
    followingIsLoading,
    fetchFollowing,
  ] = useFetchFunction();

  const handleFollowing = (type) => {
    followUser(fetchFollowing, auth, {
      action: type ? "unsub" : "sub",
      srName: userID,
    });
  };

  useEffect(() => {
    if (following && following.length !== 0) {
      setIsFollowing(() => {
        return following.find((element) => {
          return element._id === userID;
        });
      });
    }
  }, [following, userID]);

  function followingHandler() {
    setIsFollowing((prev) => !prev);
    handleFollowing(isFollowing);
  }

  return (
    <Container>
      <InnerContainer>
        <Background />
        {isMe && (
          <SettingsLink to="/settings">
            <VscGear />
          </SettingsLink>
        )}
        <ProfilePic />
        <UserName>
          {userID && userID.substring(3)}
          {userAbout && userAbout.over18 && (
            <OverlayTrigger
              placement={"right"}
              overlay={<Tooltip>NSFW - AdultContent</Tooltip>}
              delay="200"
            >
              <span>
                <TiInfo
                  style={{
                    color: "#ff4500",
                    marginLeft: "4px",
                    verticalAlign: "middle",
                    height: "20px",
                    width: "20px",
                  }}
                />
              </span>
            </OverlayTrigger>
          )}
        </UserName>
        {active && (
          <UsernameLink to="" display={active}>
            {userID && `u/${userID.substring(3)} .`}
            {userAbout && userAbout.createdAt && (
              <Moment fromNow>{userAbout.createdAt}</Moment>
            )}
          </UsernameLink>
        )}
        {!active && (
          <UsernameSpan>
            {userID && `u/${userID.substring(3)} . `}
            {userAbout && userAbout.createdAt && (
              <Moment fromNow>{userAbout.createdAt}</Moment>
            )}
          </UsernameSpan>
        )}
        {userAbout && userAbout.about && <UserAbout text={userAbout.about} />}
        <KarmaCake />
        <ButtonContainer>
          {isMe && <LinkButton to={"/submit"}> {`New Post`} </LinkButton>}
          {false && <UnBlockButton />}
          {!isMe && <FollowButton />}
        </ButtonContainer>
        {toggle && <MoreOptionsContent />}
        <MoreOptions />
      </InnerContainer>
      <BlockModal
        show={show}
        onCancel={() => {
          setShow(false);
        }}
        onHide={() => {
          setShow(false);
        }}
        onUnBlock={unBlockHandler}
      />
    </Container>
  );
};

export default UserSideCard;
