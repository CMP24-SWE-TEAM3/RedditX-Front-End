/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";



import ApprovedUsers from "Features/Moderator/Components/ApprovedUsers/ApprovedUsers";

import { AiOutlineInfoCircle } from "react-icons/ai";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { getModerators } from "Features/Moderator/Services/UserManagementApi/UserManagementApi";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import {
  Container,
  ButtonsContainer,
  ButtonTwo,
  NameHeader,
  InnerContainer,
} from "./ApprovedPage.styled";

/**
 * ApprovedPage Layout that is used in User management
 * @returns {React.Component}  ApprovedPage Layout that is used in User management
 */

const ApprovedPage = ({ setModalShowApproveUser }) => {
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getModerators(dataFetch, communityName, auth.getToken());
  }, []);

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
              <ApprovedUsers Moderator={data.users}></ApprovedUsers>
            )}
          </InnerContainer>
        </Container>
      )}
    </>
  );
};

export default ApprovedPage;
