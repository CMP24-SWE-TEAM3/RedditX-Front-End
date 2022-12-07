/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import Moment from "react-moment";

import {
  Container,
  ProfileContainer,
  Photo,
  UserName,
  Date,
  Abilities,
  PhotoAndUsername,
  Edit,
  ButtonsContainer,
  MoreDetails,
  MoreDetailsBanned,
  ModNote,
} from "./ModeratorRow.styled";

/**
 * ModeratorRow component that is used in User management
 * @returns {React.Component}  ModeratorRow component that is used in User management
 */

const ModeratorRow = ({
  Moderator,
  edit,
  invited,
  approved,
  muted,
  banned,
}) => {
  /**
   * state to handel more details dropdown for mutted
   */
  const [showDrop, setShowDrop] = useState(false);
  /**
   * state to handel more details dropdown for banned
   */
  const [showDropBanned, setShowDropBanned] = useState(false);

  return (
    <>
      <Container>
        <ProfileContainer>
          <PhotoAndUsername>
            <Photo>
              <img src={Moderator.photo} alt="image" />
            </Photo>
            <UserName>{Moderator.userName}</UserName>
          </PhotoAndUsername>
          <Date>
            <Moment fromNow>{Moderator.date}</Moment>

            {banned && <span> . {Moderator.bannedFor}</span>}
          </Date>
        </ProfileContainer>
        {!approved && !muted && !banned && (
          <Abilities>
            Everything{" "}
            {edit && (
              <Edit>
                <MdEdit />
              </Edit>
            )}{" "}
            {invited && (
              <Edit>
                <MdDelete />
              </Edit>
            )}
          </Abilities>
        )}
        {approved && (
          <ButtonsContainer>
            <button>Send message</button> <button>Remove</button>
          </ButtonsContainer>
        )}
        {muted && (
          <ButtonsContainer>
            <button>Unmute</button>{" "}
            <button
              onClick={() => {
                setShowDrop(!showDrop);
              }}
            >
              More Details {!showDrop && <IoIosArrowDown />}{" "}
              {showDrop && <IoIosArrowUp />}
            </button>
          </ButtonsContainer>
        )}
        {banned && (
          <ButtonsContainer>
            <button>Edit</button>{" "}
            <button
              onClick={() => {
                setShowDropBanned(!showDropBanned);
              }}
            >
              More Details {!showDrop && <IoIosArrowDown />}{" "}
              {showDrop && <IoIosArrowUp />}
            </button>
          </ButtonsContainer>
        )}
      </Container>
      {showDrop && <MoreDetails>No mod note.</MoreDetails>}
      {showDropBanned && (
        <MoreDetailsBanned>
          <ModNote>
            <h3>MOD NOTE:</h3> <p>{Moderator.modNote}</p>
          </ModNote>{" "}
          <ModNote>
            <h3>BANNED FOR:</h3> <p>{Moderator.bannedFor}</p>
          </ModNote>{" "}
        </MoreDetailsBanned>
      )}
    </>
  );
};

export default ModeratorRow;
