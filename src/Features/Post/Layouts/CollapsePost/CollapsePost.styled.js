import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.background.primary};
  height: auto;
  width: 650px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  cursor: ${(p) => (!p.fullPost ? "pointer" : "default")};
  border: 1px solid transparent;

  &:hover {
    border-color: ${(p) => (!p.fullPost ? "black !important" : "transparent")};
  }
  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const PostBar = styled.div`
  width: 95%;
  height: 100%;
  background-color: red;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  width: 100%;
`;

export const StyledImage = styled.img`
  transition: filter 0.5s;
  height: 72px;
  width: 96px;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  background-color: ${({ theme }) => theme.background.lightMuted};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const OuterContianer = styled.div`
  width: 100%;
`;
