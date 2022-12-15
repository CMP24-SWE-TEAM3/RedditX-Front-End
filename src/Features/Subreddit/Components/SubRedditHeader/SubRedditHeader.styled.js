import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Banner = styled.div`
  height: 80px;
  background: ${({ banner }) =>` #33a8ff  url(${banner?"https://api.redditswe22.tech/subreddits/files/"+banner:""}) no-repeat center`};
  /* background-image: ${({ banner }) =>` url(${banner?"https://api.redditswe22.tech/subreddits/files/"+banner: ""}) `}; */
  /* background-image: url("https://api.redditswe22.tech/subreddits/files/community-banner-t5_imagePro235-1670710355874.jpg"); */

`;

export const Image = styled.img`
max-width: 100%;
height: auto;
`

export const IconAlt = styled.div`
    background-color: #0079d3;
    border-radius: 100%;
    border: 4px solid #fff;
    display: inline-block;
    height: 74px;
    width: 74px;
    color: white;
    text-align: center;
    font-size: 60px;
    line-height: 45px;
    cursor: default;
`
//#33a8ff 
export const HeaderContent = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  height: 78px;
  @media (max-width: 400px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
  }
`;

export const HeaderDetails = styled.div`
  max-width: 984px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 16px 0 24px;

  .content {
    height: 100%;
    display: flex;
    align-items: flex-start;
    margin-bottom: 12px;
    margin-top: -14px;
    @media (max-width: 400px) {
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
    }
  }

  img {
    background-color: ${({ theme }) => theme.background.primary};
    background-size: cover;
    border-radius: 100%;
    border: 4px solid #fff;
    display: inline-block;
    height: 72px;
    width: 72px;

    @media (max-width: 400px) {
      height: 100px;
      width: 100px;
    }
  }

  @media (max-width: 400px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
  }
`;

export const Info = styled.div`
  align-items: flex-start;
  flex: 1;
  display: inline-flex;
  padding-left: 16px;
  margin-top: 24px;
  justify-content: space-between;
  position: relative;
  width: calc(100% - 80px);

  .title-info {
    display: inline-block;
    max-width: calc(100% - 96px);
    padding-right: 24px;

    @media (max-width: 400px) {
      padding: 0;
      margin-bottom: 5px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }

  .title {
    color: ${({ theme }) => theme.color.primary};
    display: inline-block;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    overflow: hidden;
    padding: 0 2px 4px 0;
    text-overflow: ellipsis;
    width: 100%;

    @media (max-width: 400px) {
      overflow: visible;
      width: fit-content;
    }
  }

  .subtitle {
    font-size: 14px;
    font-weight: 500;
    line-height: 0;
    color: ${({ theme }) => theme.color.muted};
  }

  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
