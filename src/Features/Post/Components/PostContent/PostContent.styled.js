import { Carousel } from "react-bootstrap";
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
  .carousel-control-next,
  .carousel-control-prev {
    border: 1px solid #6a6f73 !important;
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%) !important;
    background-color: #1c1d1f !important;
    height: 3em !important;
    width: 3em !important;
    border-radius: 100% !important;
    margin: auto !important;
  }

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

export const CarouselItem = styled(Carousel.Item)`
  height: ${(height) => height};
`;

export const Flair = styled.span`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
  word-break: normal;
  padding: 0 4px;
  margin-right: auto;
`;
