import styled from "styled-components";


export const ProfileLogoStyled = styled.img`
  width: 140%;
  transform-origin: bottom center;
  display: block;
  transform: scale(1.3);
  clip-path: polygon(0 68.22%,12.12% 68.22%,12.85% 71.49%,13.86% 74.69%,15.14% 77.79%,16.69% 80.77%,18.49% 83.6%,20.54% 86.26%,22.8% 88.73%,25.28% 91%,27.94% 93.04%,30.77% 94.85%,33.75% 96.4%,36.85% 97.68%,40.05% 98.69%,43.32% 99.42%,46.65% 99.85%,50% 100%,53.35% 99.85%,56.68% 99.42%,59.95% 98.69%,63.15% 97.68%,66.25% 96.4%,69.23% 94.85%,72.06% 93.04%,74.72% 91%,77.2% 88.73%,79.46% 86.26%,81.51% 83.6%,83.31% 80.77%,84.86% 77.79%,86.14% 74.69%,87.15% 71.49%,87.88% 68.22%,100% 68.22%,100% 0,0 0);

`
export const ProfileButtonStyled = styled.button`
  flex-basis: 38px;
  margin-right: 8px;
  border-radius: 50%;
  width: 38px;
  border: none;
  height: 38px;
  background-color: ${({theme}) => theme.background.search_bar_background};

  & .cap {
    position: relative;
    height: 100%;
  }

  & .cover {
    border-radius: 50%;
    width: 38px;
    height: 38px;
  }

  & .last {
    background: ${({theme}) => theme.lineColor.primary};
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  & .profile-container {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
`