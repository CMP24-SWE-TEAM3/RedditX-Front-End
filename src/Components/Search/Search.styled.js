import styled from "styled-components";

export const ItemContainer = styled.span`
  display: block;
  text-align: left;
`;
export const SearchItem = styled.div`
  z-index: 40;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  height: 40px;
  color: ${({ theme }) => theme.color.primary};

  .wrapper {
    background-color: ${({ theme }) => theme.background.post_background};
    height: 40px !important;
    box-shadow: none;
    border-radius: 20px;
    font-size: 14px;
    box-shadow: 0 0 !important;
    ul {
      background-color: ${({ theme }) => theme.background.primary};
    }

    ::placeholder {
      font-size: 14px;
      color: ${({ theme }) => theme.lineColor.secondary};
    }
  }
`;
