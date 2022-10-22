import styled from "styled-components";

export const StyledLinkForm = styled.div`
  .form-control:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  .form-control {
    resize: none;
    background-color: ${({ theme }) => theme.background.primary};
    caret-color: ${({ theme }) => theme.color.primary};
  }

  .title-group {
    display: flex;
    align-items: center;
    position: relative;
    span {
      position: absolute;
      right: 10px;
      font-size: 12px;
      color: ${({ theme }) => theme.color.muted};
      font-weight: 600;
    }
  }
`;
