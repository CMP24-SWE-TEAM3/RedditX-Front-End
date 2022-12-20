/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import ApprovedUsers from "Features/Moderator/Components/ApprovedUsers/ApprovedUsers";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { getApproved } from "Features/Moderator/Services/userManagementApi";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import { useParams } from "react-router-dom";

import {
  Container,
  ButtonsContainer,
  ButtonTwo,
  NameHeader,
  InnerContainer,
} from "./ApprovedPage.styled";
import ApproveUserModal from "../ApproveUserModal/ApproveUserModal";

/**
 * ApprovedPage Layout that is used in User management
 * @returns {React.Component}  ApprovedPage Layout that is used in User management
 */

const ApprovedPage = () => {
  //const communityName = "t5_imagePro235";
  const { subredditId } = useParams();
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getApproved(dataFetch, "t5_" + subredditId, auth?.getToken());
  }, []);

  const [modalShowApproveUser, setModalShowApproveUser] = useState(false);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Container>
        <ButtonsContainer>
          <ButtonTwo
            data-testid="aproveUser"
            onClick={() => {
              setModalShowApproveUser(true);
            }}
          >
            Approve user
          </ButtonTwo>
        </ButtonsContainer>
        <InnerContainer>
          <NameHeader>
            Approved users <AiOutlineInfoCircle></AiOutlineInfoCircle>
          </NameHeader>

          {!isLoading && data.users && (
            <ApprovedUsers
              communityName={subredditId}
              Moderator={data.users}
            ></ApprovedUsers>
          )}
        </InnerContainer>
      </Container>
      {modalShowApproveUser && (
        <ApproveUserModal
          show={modalShowApproveUser}
          onHide={() => setModalShowApproveUser(false)}
        />
      )}
    </>
  );
};

export default ApprovedPage;
