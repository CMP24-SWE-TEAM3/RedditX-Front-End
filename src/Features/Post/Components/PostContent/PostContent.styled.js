import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${({ theme }) => theme.background.primary};
  max-width: 100%;
`;
export const Paragraph = styled.div`
  width: 100%;
  text-align: start;
  color: ${({ theme }) => theme.color.primary};
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

export const PostTitle = styled.h5`
  width: 100%;
  text-align: start;
  color: ${({ theme }) => theme.color.primary};
`;
