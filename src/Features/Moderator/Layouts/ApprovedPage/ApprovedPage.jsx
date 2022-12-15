/* eslint-disable jsx-a11y/img-redundant-alt */
import {useState, useEffect } from "react";

import ApprovedUsers from "Features/Moderator/Components/ApprovedUsers/ApprovedUsers";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { getApproved } from "Features/Moderator/Services/UserManagementApi/userManagementApi";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

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
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getApproved(dataFetch, communityName, auth.getToken());
  }, []);

  const [modalShowApproveUser, setModalShowApproveUser] = useState(false);

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && data.users && (
        <Container>
          <ButtonsContainer>
            <ButtonTwo
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
              <ApprovedUsers communityName={communityName} Moderator={data.users}></ApprovedUsers>
            )}
          </InnerContainer>
        </Container>
      )}
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
