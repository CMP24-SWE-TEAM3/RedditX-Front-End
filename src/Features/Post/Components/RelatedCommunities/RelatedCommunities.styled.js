import styled from "styled-components";

export const Container = styled.div`
  margin-top: 16px;
  width: 312px;

  .content {
    background-color: rgb(255, 255, 255);
    border-color: rgb(204, 204, 204);
    fill: rgb(26, 26, 27);
    color: rgb(26, 26, 27);
    border-radius: 4px;
    overflow: visible;
    word-wrap: break-word;
  }
`;

export const Title = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  fill: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  padding: 0 12px 12px;
  display: flex;
  border-radius: 3px 3px 0 0;

  :first-child {
    padding: 12px 0 0;
  }

  h2 {
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    text-transform: none;
    padding-left: 10px;
  }
`;
export const ContentBody = styled.div`
  max-height: none;
  padding: 12px;

  :first-child {
    width: 100%;
  }
`;
export const Item = styled.div`
  /* display: inline-flex;*/
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 12px 0 4px;

  .child-item {
    align-items: center;
    display: flex;
    flex-direction: row;
  }
`;
export const Ico = styled.div`
  flex: 0 0;
  :first-child {
    height: 32px;
    width: 32px;
    margin: 0 8px 16px 0;
  }

  img {
    border-radius: 100%;
    height: 32px;
    width: 32px;
  }
`;
export const Description = styled.div`
  flex: 1 1 100%;
  width: 100%;
  :first-child {
    position: relative;
  }
  a {
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 144px;
    color: inherit;
    text-decoration: inherit;
  }
  p {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
`;
export const JoinBtn = styled.div`
  flex-basis: 106px;
  flex: 0 0;
  button {
    border: none;
    width: fit-content;
    /* color: ${({ flip }) =>
      flip === "join"
        ? `${({ theme }) => theme.background.primary}`
        : `${({ theme }) => theme.color.secondary}`};
    background-color: ${({ flip }) =>
      flip === "join"
        ? `${({ theme }) => theme.color.secondary}`
        : `${({ theme }) => theme.background.primary}`}; */
    background-color: ${({ flip }) =>
      flip === "join" ? "#0079d3" : "#f6f7f8"};
    color: ${({ flip }) => (flip === "join" ? "#fff" : "#0079d3")};

    font-family: Noto Sans, Arial, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: unset;
    line-height: 17px;
    text-transform: unset;
    min-height: 32px;
    min-width: 106px;
    padding: 4px 16px;
    align-items: center;
    border-radius: 9999px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    text-align: center;

    :hover {
      background-color: ${({ flip }) =>
        flip === "join"
          ? `${({ theme }) => theme.background.hover_background_button_blue}`
          : `${({ theme }) => theme.borderColor.sideBtnHover}`};
    }
  }
`;
