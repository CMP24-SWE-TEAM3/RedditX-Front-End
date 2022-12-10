/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import Moment from "react-moment";

import EditBanUserModal from "Features/Moderator/Layouts/EditBanUserModal/EditBanUserModal";

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
  const [photoUrl, setPhotoUrl] = useState("");
  /**
   * useEffect to get photo
   */
  useEffect(() => {
    setPhotoUrl("https://api.redditswe22.tech/users/files/" + Moderator.avatar);
  }, []);

  /**
   * state to handel more details dropdown for mutted
   */
  const [showDrop, setShowDrop] = useState(false);
  /**
   * state to handel more details dropdown for banned
   */
  const [showDropBanned, setShowDropBanned] = useState(false);
  /**
   * state to handel edit modal
   */
  const [showEditModal, setShowEditModal] = useState(false);

  const date = "2022/011/15, 15:05:45";

  return (
    <>
      <Container>
        <ProfileContainer>
          <PhotoAndUsername>
            <Photo>
              <img crossOrigin="anonymous" src={photoUrl} alt="image" />
            </Photo>
            <UserName>{Moderator._id.substring(3)}</UserName>
          </PhotoAndUsername>
          {/* <Date>
            <Moment fromNow>{date}</Moment>

            {banned && <span> . {Moderator.bannedFor}</span>}
          </Date> */}
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
            <button
              onClick={() => {
                setShowEditModal(true);
              }}
            >
              Edit
            </button>{" "}
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

      {banned && showEditModal && (
        <EditBanUserModal
        setShowEditModal={setShowEditModal}
          moderator={Moderator}
          show={banned && showEditModal}
          onHide={() => setShowEditModal(false)}
        />
      )}
    </>
  );
};

export default ModeratorRow;
