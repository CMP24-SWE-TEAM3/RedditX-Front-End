import styled from "styled-components";
// import Form from "react-bootstrap/Form";
export const Container = styled.div`
  transition: margin-top 0.3s ease;
  background-color: ${({ theme }) => theme.canvas};

  /* padding-top: 48px; */
  & .outer-container {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 48px);
  }
  & .content-container {
    max-width: 1024px;
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
  }
  & .inner-container {
    display: flex;
    flex-direction: column;
    max-width: calc(100% - 48px);
    flex-grow: 1;
    padding: 24px 0 0;
  }

  /* @media (min-width: 640px) {
    & .inner-container {
      padding: 24px 24px;
    }
  } */
`;
// export const StyledSwitch = styled(Form)`
//   .form-check-input {
//     font-size: 20px;
//   }
//   .form-switch {
//     display: flex;
//     align-items: center;
//   }
//   label {
//     display: none;
//   }
//   .form-check {
//     margin-bottom: 5px;
//   }
// `;
