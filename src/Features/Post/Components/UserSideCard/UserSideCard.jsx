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
  ButtonContainer,
  LinkButton,
  MoreOptionsContainer,
  MoreOptionsButton,
} from "./UserSideCard.styled";
import { VscGear } from "react-icons/vsc";
import { GiFlowerEmblem } from "react-icons/gi";
import { TbCake } from "react-icons/tb";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect } from "react";
import getMyData from "Features/Post/Services/getMyData";
import { BASE_URL } from "API/axios";
import getUser from "Features/Post/Services/getUser";

const UserSideCard = ({ userId }) => {
  console.log("userId", userId);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const url = location.pathname;
  const urlArr = url.split("/");
  const active = urlArr[3];
  const [userData, errorUserData, isLoadingUserData, dataFetchUserData] =
    useFetchFunction();
  console.log(userData);
  const auth = useAuth();
  useEffect(() => {
    getUser(dataFetchUserData, userId || auth.getUserName(), auth);
  }, []);
  function toggleHandler() {
    setToggle((prev) => !prev);
  }

  const Background = () => {
    return <BackgroundContainer></BackgroundContainer>;
  };

  const ProfilePic = () => {
    return (
      <AvatarContainer>
        {!isLoadingUserData &&
          userData &&
          userData.about &&
          userData.about.user && (
            <img
              crossOrigin="anonymous"
              src={`${BASE_URL}/users/files/${userData.about.user.avatar}`}
              alt="avatar"
            />
          )}
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
            <span className="number"> 100 </span>
          </KarmaNo>
        </KarmaContainer>
        <KarmaContainer>
          <KarmaTitle>Cake Day</KarmaTitle>
          <KarmaNo>
            <span className="icon">
              <TbCake />
            </span>
            <span className="number"> December 2, 2022 </span>
          </KarmaNo>
        </KarmaContainer>
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

  return (
    <Container>
      <InnerContainer>
        <Background />
        {
          <SettingsLink to="#">
            <VscGear />
          </SettingsLink>
        }
        <ProfilePic />
        <UserName>
          {userId || (auth.isLoggedIn() && auth.getUserName())}
        </UserName>
        {active && (
          <UsernameLink to="" display={active}>{`u/${
            userId || (auth.isLoggedIn() && auth.getUserName())
          } . 5d`}</UsernameLink>
        )}
        {!active && (
          <UsernameSpan>{`u/${
            userId || (auth.isLoggedIn() && auth.getUserName())
          } . 5d`}</UsernameSpan>
        )}
        <KarmaCake />
        <ButtonContainer>
          <LinkButton to={"/submit"}> {`New Post`} </LinkButton>
        </ButtonContainer>
        {toggle && <MoreOptionsContent />}
        <MoreOptions />
      </InnerContainer>
    </Container>
  );
};

export default UserSideCard;
