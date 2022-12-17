import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #cccccc2b;
  height: auto;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "650px")};
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  cursor: ${(p) => (!p.fullPost ? "pointer" : "default")};
  border: 1px solid transparent;
  margin-bottom: 10px;
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
  width: 93%;
`;
