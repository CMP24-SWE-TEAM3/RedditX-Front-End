import styled from "styled-components";
import Form from "react-bootstrap/Form";
export const MainLinks = styled.div`
  transition: 0.3s;
  & .links {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  @media (max-width: 400px) {
    & .links {
      flex-direction: column-reverse;
    }
  }
  & .inner-links {
    display: flex;
    /* align-items: center; */
    @media (max-width: 635px) {
      display: none;
    }
  }
  & .inner-links a {
    position: relative;
    margin-right: 4px;
    text-decoration: none;
  }
  & .inner-links a button {
    background-color: transparent;
    padding: 12px 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.titleText_of_link};
    /* color: #1a1a1b; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    border-radius: 9999px;
    width: auto;
    border: none;
    outline: none;
    cursor: pointer;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
  }
  & .inner-links a button:hover {
    background-color: ${({ theme }) => theme.background.fill};
  }
  & .inner-links a.active button {
    background-color: ${({ theme }) => theme.background.active};
  }
  & .safe-search {
    margin-left: auto;
  }

  & .safe-search-inner {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  & .safe-search-inner label {
    margin-right: 30px;
  }
`;
export const StyledSwitch = styled(Form)`
  & .form-check-input {
    font-size: 20px;
  }
  & .form-switch {
    display: flex;
    align-items: center;
  }
  & label {
    display: none;
  }
  & .form-check {
    margin-bottom: 5px;
  }
`;
