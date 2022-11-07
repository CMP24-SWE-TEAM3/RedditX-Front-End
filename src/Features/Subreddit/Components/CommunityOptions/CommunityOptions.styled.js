import Form from "react-bootstrap/Form";
import styled from "styled-components";

export const Container = styled.div`
  border-top: 1px solid rgba(26, 26, 27, 0.07);
  margin-top: 16px;
  padding-top: 16px;

  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    width: 20px;
  }
`;

export const OptionsButtons = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  padding: 0 12px;
  position: relative;
  border: 1px solid transparent;
  min-height: 32px;
  min-width: 32px;
  width: 100%;
  background: transparent;
  align-items: center;
  box-sizing: border-box;
  border-radius: 20px;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #ececec;
  }
`;

export const CommunityTheme = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;

  span {
    margin-right: 8px;
  }
`;

export const StyledForm = styled(Form)`
  //1em === 14px

  .form-switch .form-check-input {
    width: 37px;
    cursor: pointer;
  }

  .form-check-input {
    height: 24px;
    /* margin-top: 0.25em;*/
  }
  form-check-input:checked {
    background-color: ${({ theme }) => theme.color.secondary};
    border-color: ${({ theme }) => theme.color.secondary};
  }

  input:focus {
    box-shadow: none;
  }
`;
