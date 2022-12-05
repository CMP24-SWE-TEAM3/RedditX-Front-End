import styled from "styled-components";
export const HeaderImages = styled.h3`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.muted};
  margin-bottom: 32px;
  padding-bottom: 6px;
`;
export const ProfileImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: row wrap;
  margin-bottom: 32px;
`;
export const ProfileImagesHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
  max-width: 80%;
`;
export const ProfileImagesHeaderTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  /* display: -ms-flexbox; */
  display: flex;
  margin-bottom: 4px;
`;
export const ProfileImagesHeaderTitleinner = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.muted};
`;
export const ImageContent = styled.div`
  align-items: flex-start;
  margin-top: 12px;
  flex-direction: column;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`;
export const ImageContentInner = styled.div`
  display: flex;
  height: 120px;
`;
export const ImageProf = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  margin: 0 12px 0 0;
  width: 120px;
  position: relative;
`;
export const ImageLabel = styled.label`
  cursor: pointer;
  display: inline;
`;
export const ImageSpan = styled.span`
  height: 100%;
  width: 100%;
`;
export const Imagerelative = styled.div`
  height: 100%;
  position: relative;
`;
export const ImagerelativeInner = styled.div`
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const ImageModel = styled.div`
  background: ${({ theme }) => theme.lineColor.primary};
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const OuterOne = styled.div`
  margin-bottom: 10px;
`;
export const ImageExact = styled.div`
  background: ${({ theme }) => theme.lineColor.primary};
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  & img {
    width: 100%;
    transform-origin: bottom center;
    display: block;
    transform: scale(1.3);
    ${({ selectedImage }) =>
      !selectedImage &&
      `
    clip-path: polygon(
      0 68.22%,
      12.12% 68.22%,
      12.85% 71.49%,
      13.86% 74.69%,
      15.14% 77.79%,
      16.69% 80.77%,
      18.49% 83.6%,
      20.54% 86.26%,
      22.8% 88.73%,
      25.28% 91%,
      27.94% 93.04%,
      30.77% 94.85%,
      33.75% 96.4%,
      36.85% 97.68%,
      40.05% 98.69%,
      43.32% 99.42%,
      46.65% 99.85%,
      50% 100%,
      53.35% 99.85%,
      56.68% 99.42%,
      59.95% 98.69%,
      63.15% 97.68%,
      66.25% 96.4%,
      69.23% 94.85%,
      72.06% 93.04%,
      74.72% 91%,
      77.2% 88.73%,
      79.46% 86.26%,
      81.51% 83.6%,
      83.31% 80.77%,
      84.86% 77.79%,
      86.14% 74.69%,
      87.15% 71.49%,
      87.88% 68.22%,
      100% 68.22%,
      100% 0,
      0 0
    );

  `}
  }
`;
export const IconDiv = styled.div`
  align-items: center;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  bottom: 8px;
  display: flex;
  height: 36px;
  justify-content: center;
  right: 8px;
  width: 36px;
  border: 1px solid ${({ theme }) => theme.color.link};
  background-color: ${({ theme }) => theme.background.primary};
  & span {
    color: ${({ theme }) => theme.color.link};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
`;
export const ImageSelected = styled.img`
  border-radius: 4px;
  object-fit: cover;
  object-position: top;
  text-indent: -9999px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background.primary};
`;
