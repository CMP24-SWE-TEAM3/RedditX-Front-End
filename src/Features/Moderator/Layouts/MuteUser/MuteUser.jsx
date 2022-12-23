/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useState } from "react";

import { muteUser } from "Features/Moderator/Services/userManagementApi";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import {
  Container,
  SearchContainer,
  SearchInput,
  AbilityContainer,
  Ability,
  Head,
  Par,
  ButtonsContainer,
  ButtonTwo,
  TextArea,
} from "./MuteUser.styled";

const defaultFormFields = {
  userName: "",
  reason: "",
};

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;

/**
 * MuteUser Layout that is used in User management
 * @param {Function} setModalShowApproveUser function to show or hide the modal of mute user
 * @param {String} communityName the community id
 * @returns {React.Component}  MuteUser Layout that is used in User management
 */

const MuteUser = ({ communityName, setModalShowApproveUser }) => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { userName, reason } = formFields;

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validName, setValidName] = useState(false);

  /**
   * state to know the lenght of the reason text area
   */
  const [reasonLength, setReasonLength] = useState(0);

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

  /**
   * useEffect for reason field to check the lenght of the reason
   */
  useEffect(() => {
    setReasonLength(reason.length);
  }, [reason]);

  /**
   * Function to handle any change on the input field of the login form (check if the userName or the email or the password is valid or not)
   * @param {*} event
   */

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValidName(USER_REGEX.test(userName));
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <Container>
        <SearchContainer>
          <SearchInput
            name="userName"
            value={userName}
            placeholder="Username to mute"
            onChange={handleChange}
          ></SearchInput>
        </SearchContainer>
        <AbilityContainer>
          <Ability>
            <Head>Note about why they are muted</Head>
            <Par>Only visible to other moderators. Not visible to user</Par>
          </Ability>
        </AbilityContainer>

        <TextArea
          rows="10"
          name="reason"
          value={reason}
          placeholder="Reason they were muted"
          onChange={handleChange}
        ></TextArea>
        <Par fullWidth={true}>{300 - reasonLength} Characters remaining</Par>
        <ButtonsContainer>
          {/* <ButtonOne
            onClick={() => {
                setModalShowApproveUser(false);
            }}
          >
            Cancel
          </ButtonOne> */}
          <ButtonTwo
            disabled={!validName}
            valid={validName}
            onClick={() => {
              muteUser(
                dataFetch,
                {
                  userID: "t2_" + userName,
                  operation: "mute",
                },
                "t5_" + communityName,
                auth.getToken()
              );
              setModalShowApproveUser(false);
            }}
          >
            Mute user
          </ButtonTwo>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default MuteUser;
