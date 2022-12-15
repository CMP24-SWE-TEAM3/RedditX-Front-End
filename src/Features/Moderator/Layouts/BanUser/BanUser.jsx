/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useState } from "react";

import { BsDot } from "react-icons/bs";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

import { banUser } from "Features/Moderator/Services/userManagementApi";

import LoadingSpinner from "Features/Authentication/Components/LoadingSpinner/LoadingSpinner";

import {
  Container,
  SearchContainer,
  SearchInput,
  AbilityContainer,
  CheckBox,
  Ability,
  Head,
  Par,
  ButtonsContainer,
  ButtonTwo,
  TextArea,
  MyDropdown,
  Per,
} from "./BanUser.styled";

const defaultFormFields = {
  userName: "",
  reason: "",
  modNote: "",
  days: "",
};

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;

/**
 * BanUser Layout that is used in User management
 * @returns {React.Component}  BanUser Layout that is used in User management
 */

const BanUser = ({ setModalShowBaneUser }) => {
  const communityName = "t5_imagePro235";

  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const auth = useAuth();

  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { userName, reason, modNote, days } = formFields;

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validName, setValidName] = useState(false);
  /**
   * state to know the selected value for the reason of ban
   */
  const [selectReason, setSelectReason] = useState("None");

  /**
   * state to know the lenght of the reason text area
   */
  const [reasonLength, setReasonLength] = useState(0);

  /**
   * state to know the lenght of the modNote
   */
  const [modNoteLength, setModNoteLength] = useState(0);

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
   * useEffect for modNote field to check the lenght of the modNote
   */
  useEffect(() => {
    setModNoteLength(modNote.length);
  }, [modNote]);

  /**
   * Function to handle any change on the input field of the login form (check if the userName or the email or the password is valid or not)
   * @param {*} event
   */

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValidName(USER_REGEX.test(userName));
    setFormFields({ ...formFields, [name]: value });
  };

  const handleReason = (sReason) => {
    setSelectReason(sReason);
  };
  const handleBan = () => {
    banUser(
      dataFetch,
      {
        userID: "t2_" + userName,
        operation: "ban",
      },
      communityName,
      auth.getToken()
    );
    setModalShowBaneUser(false);
  };

  return (
    <>
      <Container>
        <AbilityContainer>
          <Ability>
            <Par>ENTER USERNAME</Par>
            <SearchInput
              name="userName"
              value={userName}
              placeholder="u/username"
              onChange={handleChange}
            ></SearchInput>
          </Ability>
        </AbilityContainer>
        <AbilityContainer>
          <Ability>
            <Par>REASON FOR BAN</Par>
            <MyDropdown>
              <MyDropdown.Toggle variant="success" id="dropdown-basic">
                {selectReason}
              </MyDropdown.Toggle>

              <MyDropdown.Menu>
                <MyDropdown.Item
                  onClick={() => {
                    handleReason("Danger");
                  }}
                >
                  Danger
                </MyDropdown.Item>
                <MyDropdown.Item
                  onClick={() => {
                    handleReason("Spam");
                  }}
                >
                  Spam
                </MyDropdown.Item>
                <MyDropdown.Item
                  onClick={() => {
                    handleReason("Personal And Confidential Information");
                  }}
                >
                  Personal And Confidential Information
                </MyDropdown.Item>
                <MyDropdown.Item
                  onClick={() => {
                    handleReason("Threating, Harassing, Or Inciting Violence");
                  }}
                >
                  Threating, Harassing, Or Inciting Violence
                </MyDropdown.Item>
                <MyDropdown.Item
                  onClick={() => {
                    handleReason("Other");
                  }}
                >
                  Other
                </MyDropdown.Item>
              </MyDropdown.Menu>
            </MyDropdown>
          </Ability>
        </AbilityContainer>

        <AbilityContainer>
          <Ability>
            <Par>MOD NOTE</Par>
            <SearchInput
              name="modNote"
              value={modNote}
              placeholder="Mod note"
              onChange={handleChange}
            ></SearchInput>
          </Ability>
        </AbilityContainer>
        <Par fullWidth={true}>{300 - modNoteLength} Characters remaining</Par>

        <AbilityContainer>
          <Ability>
            <Par>HOW LONG?</Par>
            <SearchContainer>
              <SearchInput
                days={true}
                name="days"
                value={days}
                onChange={handleChange}
              ></SearchInput>
              <span>Days</span>
              <CheckBox>
                <input
                  className="form-check-input w-5vm"
                  type="checkbox"
                  id="EveryThing"
                  name="EveryThing"
                  value="EveryThing"
                ></input>
              </CheckBox>
              <Per>Permanent</Per>
            </SearchContainer>
          </Ability>
        </AbilityContainer>
        <Head fullWidth={true}>
          Note to include in ban message <BsDot />
        </Head>
        <TextArea
          rows="10"
          name="reason"
          value={reason}
          placeholder="Reason they were muted"
          onChange={handleChange}
        ></TextArea>
        <Par fullWidth={true}>{5000 - reasonLength} Characters remaining</Par>
        <ButtonsContainer>
          <Head>
            Visible to banned user <BsDot />
          </Head>
          <ButtonTwo
            disabled={!validName}
            valid={validName}
            onClick={() => {
              handleBan();
            }}
          >
            Ban user
          </ButtonTwo>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default BanUser;
