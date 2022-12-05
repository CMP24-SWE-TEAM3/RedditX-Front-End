/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import Moment from "react-moment";

import {
  Container,
  ProfileContainer,
  Photo,
  UserName,
  Date,
  Abilities,
  PhotoAndUsername,
  Edit
} from "./ModeratorRow.styled";

/**
 * ModeratorRow component that is used in User management
 * @returns {React.Component}  ModeratorRow component that is used in User management
 */

const ModeratorRow = ({Moderator, edit, invited}) => {

    

  return (
    <>
      <Container>
        <ProfileContainer>
          <PhotoAndUsername>
            <Photo>
              <img
                src={Moderator.photo}
                alt="image"
              />
            </Photo>
            <UserName>{Moderator.userName}</UserName>
          </PhotoAndUsername>
          <Date><Moment fromNow>{Moderator.date}</Moment></Date>
        </ProfileContainer>
        <Abilities>Everything {edit && <Edit><MdEdit/></Edit>} {invited && <Edit><MdDelete/></Edit>}</Abilities>
      </Container>
    </>
  );
};

export default ModeratorRow;
