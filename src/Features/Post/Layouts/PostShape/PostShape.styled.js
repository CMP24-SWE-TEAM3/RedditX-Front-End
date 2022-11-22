import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #cccccc2b;
  height: auto;
  width: 650px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    border-color: black !important;
  }
`;

export const PostBar = styled.div`
  width: 95%;
  heigth: 100%;
  background-color: red;
`;
