import styled from "styled-components";

export const StyledImageAndVideoFrom = styled.div`
  .form-control:focus {
    box-shadow: none;
    border-color: ${({ theme }) => theme.color.primary};
  }

  .form-control {
    border-color: ${({ theme }) => theme.lineColor.primary};
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
