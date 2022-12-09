/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useState } from "react";



import {
  Container,
  SearchContainer,
  SearchInput,
  ButtonsContainer,
  ButtonOne,
  ButtonTwo,
} from "./ApproveUser.styled";

const defaultFormFields = {
  userName: "",
};

const USER_REGEX = /^[A-z0-9-_]{3,20}$/;

/**
 * ApproveUser Layout that is used in User management
 * @returns {React.Component}  ApproveUser Layout that is used in User management
 */

const ApproveUser = ({ setModalShowApproveUser }) => {
  /**
   * state to handel any change the user make in the input fields
   */
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { userName } = formFields;

  /**
   * state to know if the userName is valid or not to control what to show to the user
   */
  const [validName, setValidName] = useState(false);

  /**
   * useEffect for userName field to check if the userName that the user entered is valid or not
   */
  useEffect(() => {
    setValidName(USER_REGEX.test(userName));
  }, [userName]);

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
            placeholder="Enter Username"
            onChange={handleChange}
          ></SearchInput>
        </SearchContainer>
        <ButtonsContainer>
          {/* <ButtonOne
            onClick={() => {
                setModalShowApproveUser(false);
            }}
          >
            Cancel
          </ButtonOne> */}
          <ButtonTwo disabled={!validName} valid={validName}>
            Add user
          </ButtonTwo>
        </ButtonsContainer>
      </Container>
    </>
  );
};

export default ApproveUser;
