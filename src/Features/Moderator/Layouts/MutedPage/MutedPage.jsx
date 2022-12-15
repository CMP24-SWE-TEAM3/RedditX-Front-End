/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import MutedUsers from "Features/Moderator/Components/MutedUsers/MutedUsers";

import { AiOutlineInfoCircle } from "react-icons/ai";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { getMutted } from "Features/Moderator/Services/userManagementApi";

import MuteUserModal from "../MuteUserModal/MuteUserModal";

import {
  Container,
  ButtonsContainer,
  ButtonTwo,
  NameHeader,
  InnerContainer,
} from "./MutedPage.styled";

/**
 * MutedPage Layout that is used in User management
 * @returns {React.Component}  MutedPage Layout that is used in User management
 */

const MutedPage = () => {
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getMutted(dataFetch, communityName, auth.getToken());
  }, []);

  const [modalShowMuteUser, setModalShowMuteUser] = useState(false);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data.users && (
        <Container>
          <ButtonsContainer>
            <ButtonTwo
              onClick={() => {
                setModalShowMuteUser(true);
              }}
            >
              Mute user
            </ButtonTwo>
          </ButtonsContainer>
          <InnerContainer>
            <NameHeader>
              Muted users <AiOutlineInfoCircle></AiOutlineInfoCircle>
            </NameHeader>

            {!isLoading && data.users && (
              <MutedUsers communityName={communityName} Moderator={data.users}></MutedUsers>
            )}
          </InnerContainer>
        </Container>
      )}
      {modalShowMuteUser && (
        <MuteUserModal
          communityName={communityName}
          show={modalShowMuteUser}
          onHide={() => setModalShowMuteUser(false)}
        />
      )}
    </>
  );
};

export default MutedPage;
