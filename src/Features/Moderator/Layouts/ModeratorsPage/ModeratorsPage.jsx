/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import AllModerators from "Features/Moderator/Components/AllModerators/AllModerators";

import EditModerators from "Features/Moderator/Components/EditModerators/EditModerators";

import InvitedModerators from "Features/Moderator/Components/InvitedModerators/InvitedModerators";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import {
  getModerators,
  leaveModerator,
} from "Features/Moderator/Services/UserManagementApi/UserManagementApi";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import {
  Container,
  ButtonsContainer,
  ButtonOne,
  ButtonTwo,
  NameHeader,
  InnerContainer,
  EditMod,
} from "./ModeratorsPage.styled";

/**
 * ModeratorsPage Layout that is used in User management
 * @returns {React.Component}  ModeratorsPage Layout that is used in User management
 */

const ModeratorsPage = ({ setModalShowInviteModerator }) => {
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getModerators(dataFetch, communityName, auth.getToken());
  }, []);

  /**
   * Function to leave as moderator
   */
  const handleLeave = () => {
    leaveModerator(
      dataFetch,
      {
        userID: auth.getUserName(),
      },
      communityName,
      auth.getToken()
    );
  };

  // let Moderator = [
  //   {
  //     userName: "Romy",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
  //   {
  //     userName: "Hamza",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
  //   {
  //     userName: "Ziad",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
  //   {
  //     userName: "Body",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
  //   {
  //     userName: "Khaled",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
  //   {
  //     userName: "Waleed",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
  // ];

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data.users && (
        <Container>
          <ButtonsContainer>
            <ButtonOne
              onClick={() => {
                handleLeave();
              }}
            >
              Leave as mod
            </ButtonOne>
            <ButtonTwo
              onClick={() => {
                setModalShowInviteModerator(true);
              }}
            >
              Invite user as mod
            </ButtonTwo>
          </ButtonsContainer>
          <InnerContainer>
            <NameHeader>
              Moderators of {communityName}{" "}
              <AiOutlineInfoCircle></AiOutlineInfoCircle>
            </NameHeader>

            {!isLoading && data.users && (
              <AllModerators Moderator={data.users}></AllModerators>
            )}
            <br></br>
            <EditMod>You can edit these moderators</EditMod>
            {!isLoading && data.users && (
              <EditModerators Moderator={data.users}></EditModerators>
            )}
            <br></br>
            <EditMod>Invited moderators</EditMod>
            {!isLoading && data.users && (
              <InvitedModerators Moderator={data.users}></InvitedModerators>
            )}
          </InnerContainer>
        </Container>
      )}
    </>
  );
};

export default ModeratorsPage;
