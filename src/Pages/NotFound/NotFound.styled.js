import styled from "styled-components";

export const Image = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  max-height: 80%;
  object-fit: cover;
`;

export const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  h1 {
    font-size: 18px;
    font-weight: normal;
    margin-top: 50px;
  }
`;
