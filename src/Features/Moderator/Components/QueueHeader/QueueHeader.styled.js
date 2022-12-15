import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.color.primary};
  height: 41px;
  div {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    h2 {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      margin: 0;
      margin-right: 7px;
    }
    svg {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
    display: inline-block;
    &:hover {
      background-color: ${({ theme }) => theme.background.muted};
    }
    border-radius: 50%;
  }
`;
