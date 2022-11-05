import styled from "styled-components";
export const ContainerCreateComm = styled.div`
  .create {
    background: ${({ theme }) => theme.background.primary};
    border: thin solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 6%);
    margin-bottom: 16px;
    max-width: 100%;
  }
  @media (max-width: 500px) {
    display: none;
  }
  .create .content {
    background: ${({ theme }) => theme.background.primary};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.titleText_of_link};
    overflow: hidden;
    position: relative;
  }
  .create img.first {
    height: 120px;
    width: 100%;
  }
  .create img.second {
    height: 126px;
    width: 70px;
    left: 50%;
    position: absolute;
    top: 57px;
    transform: translateX(-50%);
  }
  .txt {
    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    margin-top: 70px;
    text-align: center;
    color: ${({ theme }) => theme.color.titleText_of_link};
  }
  .btn-create {
    padding: 12px;
  }
  button {
    width: 100%;
    position: relative;
    background-color: ${({ theme }) => theme.background.fill};
    /* border: 1px solid transparent; */
    color: ${({ theme }) => theme.color.secondary};

    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 32px;
    padding: 4px 16px;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
  .btn-create button {
  }
`;
