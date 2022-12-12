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

const UserSideCard = () => {
  const [toggle, setToggle] = useState(false);
  const username = "khaled";
  const location = useLocation();
  const url = location.pathname;
  const urlArr = url.split("/");
  const active = urlArr[3];

  function toggleHandler() {
    setToggle((prev) => !prev);
  }

  const Background = () => {
    return <BackgroundContainer></BackgroundContainer>;
  };

  const ProfilePic = () => {
    return (
      <AvatarContainer>
        <img
          src="https://i.redd.it/snoovatar/avatars/801e1410-8bcf-4441-96f3-8e8300dce484.png"
          alt="avatar"
        />
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
          {toggle?"Fewer":"More"} Options
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
        <UserName>{username}</UserName>
        {active && (
          <UsernameLink
            to=""
            display={active}
          >{`u/${username} . 5d`}</UsernameLink>
        )}
        {!active && <UsernameSpan>{`u/${username} . 5d`}</UsernameSpan>}
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
