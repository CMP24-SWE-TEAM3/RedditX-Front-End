import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  max-width: 100%;
`;
export const Paragraph = styled.div`
  width: 100%;
`;

export const ImageContainer = styled.div`
  max-width: 100%;
  max-height: 500px;
  margin-top: 5px;

  img {
    max-width: 100%;
    max-height: 500px;
  }
`;
