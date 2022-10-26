import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Banner = styled.div`
  height: 80px;
  background: ${(props) => props.banner.color}
    url(${(props) => props.banner.url}) no-repeat center / cover;
`;

export const HeaderContent = styled.div`
  width: 100%;
  background-color: #fff;
  height: 78px;
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
  }

  img {
    background-color: #fff;
    background-size: cover;
    border-radius: 100%;
    border: 4px solid #fff;
    display: inline-block;
    height: 72px;
    width: 72px;
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
  }

  .title {
    color: #000;
    display: inline-block;
    font-size: 28px;
    font-weight: 700;
    line-height: 32px;
    overflow: hidden;
    padding: 0 2px 4px 0;
    text-overflow: ellipsis;
    width: 100%;
  }

  .subtitle {
    font-size: 14px;
    font-weight: 500;
    line-height: 0;
    color: #7c7c7c;
  }
`;
