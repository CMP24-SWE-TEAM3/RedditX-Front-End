/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";



import BannedUsers from "Features/Moderator/Components/BannedUsers/BannedUsers";

import { AiOutlineInfoCircle } from "react-icons/ai";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { getBanned } from "Features/Moderator/Services/UserManagementApi/UserManagementApi";

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

const BannedPage = ({ setModalShowBaneUser }) => {
  
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * useEffect to get all moderators
   */
  useEffect(() => {
    getBanned(dataFetch, communityName, auth.getToken());
  }, []);

  // let Moderator = [
  //   {
  //     userName: "Romy",
  //     modNote: "Zsherifz",
  //     bannedFor: "Rome don't post nor comment",
  //     date: "2022/011/15, 15:05:45",
  //     photo:
  //       "https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815",
  //   },
   
  // ];

  return (
    <>
    {isLoading && <LoadingSpinner/>}
      {!isLoading&& data.users && <Container>
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
            Banned users{" "}
            <AiOutlineInfoCircle></AiOutlineInfoCircle>
          </NameHeader>

         {!isLoading&& data.users && <BannedUsers  Moderator={data.users}></BannedUsers>}
        </InnerContainer>
      </Container>}
    </>
  );
};

export default BannedPage;
