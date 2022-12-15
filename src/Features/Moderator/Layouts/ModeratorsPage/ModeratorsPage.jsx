/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import AllModerators from "Features/Moderator/Components/AllModerators/AllModerators";

import EditModerators from "Features/Moderator/Components/EditModerators/EditModerators";

import InvitedModerators from "Features/Moderator/Components/InvitedModerators/InvitedModerators";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import InviteModeratorsModal from "../InviteModeratorsModal/InviteModeratorsModal";

import {
  getModerators,
  leaveModerator,
} from "Features/Moderator/Services/userManagementApi";

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

const ModeratorsPage = () => {
  const communityName = "t5_imagePro235";

  const [modalShowInviteModerator, setModalShowInviteModerator] =
    useState(false);

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
              <InvitedModerators communityName={communityName} Moderator={data.users}></InvitedModerators>
            )}
          </InnerContainer>
        </Container>
      )}

      {modalShowInviteModerator && (
        <InviteModeratorsModal
          show={modalShowInviteModerator}
          setModalShowInviteModerator={setModalShowInviteModerator}
          onHide={() => setModalShowInviteModerator(false)}
        />
      )}
    </>
  );
};

export default ModeratorsPage;
