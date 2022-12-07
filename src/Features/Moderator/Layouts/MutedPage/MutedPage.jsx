/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";



import MutedUsers from "Features/Moderator/Components/MutedUsers/MutedUsers";

import { AiOutlineInfoCircle } from "react-icons/ai";

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

const MutedPage = ({ setModalShowMuteUser }) => {
  

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
            Muted users{" "}
            <AiOutlineInfoCircle></AiOutlineInfoCircle>
          </NameHeader>

          <MutedUsers  Moderator={Moderator}></MutedUsers>
        </InnerContainer>
      </Container>
    </>
  );
};

export default MutedPage;
