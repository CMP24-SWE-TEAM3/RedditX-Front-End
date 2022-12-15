/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import BannedUsers from "Features/Moderator/Components/BannedUsers/BannedUsers";

import BanUserModal from "../BanUserModal/BanUserModal";

import { AiOutlineInfoCircle } from "react-icons/ai";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { getBanned } from "Features/Moderator/Services/userManagementApi";

import {
  Container,
  ButtonsContainer,
  ButtonTwo,
  NameHeader,
  InnerContainer,
} from "./BannedPage.styled";

/**
 * BannedPage Layout that is used in User management
 * @returns {React.Component}  BannedPage Layout that is used in User management
 */

const BannedPage = () => {
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getBanned(dataFetch, communityName, auth.getToken());
  }, []);

  const [modalShowBaneUser, setModalShowBaneUser] = useState(false);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data.users && (
        <Container>
          <ButtonsContainer>
            <ButtonTwo
              onClick={() => {
                setModalShowBaneUser(true);
              }}
            >
              Ban user
            </ButtonTwo>
          </ButtonsContainer>
          <InnerContainer>
            <NameHeader>
              Banned users <AiOutlineInfoCircle></AiOutlineInfoCircle>
            </NameHeader>

            {!isLoading && data.users && (
              <BannedUsers Moderator={data.users}></BannedUsers>
            )}
          </InnerContainer>
        </Container>
      )}

      {modalShowBaneUser && (
        <BanUserModal
          show={modalShowBaneUser}
          onHide={() => setModalShowBaneUser(false)}
          setModalShowBaneUser={setModalShowBaneUser}
        />
      )}
    </>
  );
};

export default BannedPage;
