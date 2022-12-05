/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

import AllModerators from "Features/Moderator/Components/AllModerators/AllModerators";

import EditModerators from "Features/Moderator/Components/EditModerators/EditModerators";

import InvitedModerators from "Features/Moderator/Components/InvitedModerators/InvitedModerators";

import { AiOutlineInfoCircle } from "react-icons/ai";

import {
  Container,
  ButtonsContainer,
  ButtonOne,
  ButtonTwo,
  NameHeader,
  InnerContainer,
  EditMod
} from "./ModeratorsPage.styled";

/**
 * ModeratorsPage Layout that is used in User management
 * @returns {React.Component}  ModeratorsPage Layout that is used in User management
 */

const ModeratorsPage = () => {
  const communityName = " r/Eln2aa4yn";

  let Moderator = [
    {
      userName: "Romy",
      date: "2022/011/15, 15:05:45",
      photo:
        "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
    },
    {
      userName: "Hamza",
      date: "2022/011/15, 15:05:45",
      photo:
        "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
    },
    {
      userName: "Ziad",
      date: "2022/011/15, 15:05:45",
      photo:
        "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
    },
    {
      userName: "Body",
      date: "2022/011/15, 15:05:45",
      photo:
        "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
    },
    {
      userName: "Khaled",
      date: "2022/011/15, 15:05:45",
      photo:
        "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
    },
    {
      userName: "Waleed",
      date: "2022/011/15, 15:05:45",
      photo:
        "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
    },
  ];

  return (
    <>
      <Container>
        <ButtonsContainer>
          <ButtonOne>Leave as mod</ButtonOne>
          <ButtonTwo>Invite user as mod</ButtonTwo>
        </ButtonsContainer>
       <InnerContainer>
       <NameHeader>
          Moderators of {communityName}{" "}
          <AiOutlineInfoCircle></AiOutlineInfoCircle>
        </NameHeader>

        <AllModerators Moderator={Moderator}></AllModerators>
        <br></br>
        <EditMod>You can edit these moderators</EditMod>
        <EditModerators Moderator={Moderator}></EditModerators>
        <br></br>
        <EditMod>Invited moderators</EditMod>
        <InvitedModerators Moderator={Moderator}></InvitedModerators>
       </InnerContainer>
      </Container>
    </>
  );
};

export default ModeratorsPage;
