import styled from "styled-components";
export const ContainerNotFound = styled.div`
  /* @media (min-width: 960px) {
    max-width: 976px;
  }
  @media (min-width: 640px) {
    width: calc(100vw - 48px);
  } */
  align-items: center;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 16px;
  text-align: center;
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.titleText_of_link};
  img {
    width: 134px;
    height: 126px;
  }
  h2 {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    padding: 16px 0;
  }
  p {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: ${({ theme }) => theme.color.muted};
  }
`;
