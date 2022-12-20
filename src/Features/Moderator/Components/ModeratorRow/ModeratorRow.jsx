/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";

import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import Moment from "react-moment";

import EditBanUserModal from "Features/Moderator/Layouts/EditBanUserModal/EditBanUserModal";
import { useNavigate } from "react-router-dom";

import {
  muteUser,
  kickModerator,
  kickMember,
  leaveModerator,
} from "Features/Moderator/Services/userManagementApi";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

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
  communityName,
}) => {
  const navigate = useNavigate();

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  const [photoUrl, setPhotoUrl] = useState("");
  /**
   * useEffect to get photo
   */
  useEffect(() => {
    setPhotoUrl("https://api.redditswe22.tech/users/files/" + Moderator.avatar);

    console.log(photoUrl);
  }, []);

  const url =
    "https://api.redditswe22.tech/users/files/user-t2_moazMohamed-1670710644412.jpg";

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

  return (
    <>
      {Moderator && (
        <>
          <Container>
            <ProfileContainer>
              <PhotoAndUsername
                onClick={() => {
                  navigate("/user/" + Moderator._id);
                }}
              >
                <Photo>
                  <img
                    crossOrigin="anonymous"
                    src={`${
                      Moderator && Moderator.avatar ? `${photoUrl}` : url
                    }`}
                    alt="image"
                  />
                </Photo>
                <UserName>{Moderator._id?.substring(3)}</UserName>
              </PhotoAndUsername>
              <Date>
                <Moment fromNow>{Moderator && Moderator.date}</Moment>

                {banned && <span> . {Moderator && Moderator.bannedFor}</span>}
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
                {invited &&
                  Moderator?._id !== auth.getUserName() &&
                  Moderator?.role !== "creator" && (
                    <Edit
                      onClick={() => {
                        leaveModerator(
                          dataFetch,
                          {
                            userID: Moderator._id,
                          },
                          communityName,
                          auth.getToken()
                        );
                      }}
                    >
                      <MdDelete />
                    </Edit>
                  )}
              </Abilities>
            )}
            {approved && Moderator?._id !== auth.getUserName() && (
              <ButtonsContainer>
                <button
                  onClick={() => {
                    navigate(
                      "/message/compose/?from=" +
                        auth.getUserName().substring(3) +
                        "&to=" +
                        Moderator._id.substring(3)
                    );
                  }}
                >
                  Send message
                </button>
                {Moderator?.role !== "creator" && (
                  <button
                    onClick={() => {
                      kickMember(
                        dataFetch,
                        {
                          userID: Moderator._id,
                        },
                        communityName,
                        auth.getToken()
                      );
                    }}
                  >
                    Remove
                  </button>
                )}
              </ButtonsContainer>
            )}
            {muted && (
              <ButtonsContainer>
                <button
                  onClick={() => {
                    muteUser(
                      dataFetch,
                      {
                        userID: Moderator._id,
                        operation: "unmute",
                      },
                      communityName,
                      auth.getToken()
                    );
                  }}
                >
                  Unmute
                </button>{" "}
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
                <h3>MOD NOTE:</h3> <p>{Moderator && Moderator.modNote}</p>
              </ModNote>{" "}
              <ModNote>
                <h3>BANNED FOR:</h3> <p>{Moderator && Moderator.bannedFor}</p>
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
      )}
    </>
  );
};

export default ModeratorRow;
