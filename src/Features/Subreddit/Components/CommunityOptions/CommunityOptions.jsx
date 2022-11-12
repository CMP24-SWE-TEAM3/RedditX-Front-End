import { useState } from "react";
import Form from "react-bootstrap/Form";
import { BsEye } from "react-icons/bs";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import {
  CommunityTheme,
  Container,
  OptionsButtons,
  StyledForm
} from "./CommunityOptions.styled";

/**
 * Dropdown community option component 
 * 
 * @returns {React.Component}
 */
const CommunityOptions = () => {
  const [down, setDown] = useState(true);
  const [toggle, setToggle] = useState(true);
  function clickHandler() {
    setDown((prev) => !prev);
  }

  /**
   * handler when click switch
   */
  function toggleHandler() {
    setToggle((prev) => !prev);
  }

  /**
   * switch component
   * 
   * @returns {React.Component}
   */
  function Switch() {
    return (
      <StyledForm>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={toggle}
          onChange={toggleHandler}
        />
      </StyledForm>
    );
  }

  return (
    <Container>
      <OptionsButtons onClick={clickHandler}>
        community options
        {down && (
          <span className="icon">
            <RiArrowDownSLine />
          </span>
        )}
        {!down && (
          <span className="icon">
            <RiArrowUpSLine />
          </span>
        )}
      </OptionsButtons>
      {!down && (
        <CommunityTheme>
          <label>
            <span className="icon">
              <BsEye />
            </span>
            Community theme
          </label>
          <Switch />
        </CommunityTheme>
      )}
    </Container>
  );
};

export default CommunityOptions;
