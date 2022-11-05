import styled from "styled-components";
import Form from "react-bootstrap/Form";
export const SafeSearchStyle = styled.div`
  margin-left: auto;
  @media (max-width: 400px) {
    margin: auto;
    margin-bottom: 24px;
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
