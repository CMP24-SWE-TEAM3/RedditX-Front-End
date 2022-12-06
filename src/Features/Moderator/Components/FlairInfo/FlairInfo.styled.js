import styled from "styled-components";
export const FlaironeEdit = styled.div`
  transition: 0.5s;
  background-color: ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.color.primary};
  padding: 16px;
`;
export const FlaironeEditInner = styled.div`
  transition: 0.5s;
  display: flex;
`;
export const FlaironeEditApperence = styled.div`
  transition: 0.5s;
  flex: 1;
  max-width: 280px;
  min-width: 0;
  & legend {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.muted};
  }
`;
export const FlairText = styled.div`
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;
export const FlairTexSpant = styled.span`
  transition: 0.5s;
  display: block;
  margin-bottom: 8px;
`;
export const InDiv = styled.span`
  transition: 0.5s;
  /* border: 1px solid var(--newCommunityTheme-line); */
  background-color: ${({ theme }) => theme.background.lightMuted};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  background-color: hsla(0, 0%, 100%, 0);
  border-left: 0.1px solid transparent;
  position: relative;
  z-index: 1;

  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  & input {
    background-color: ${({ theme }) => theme.background.lightMuted};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.primary};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    /* background-color: hsla(0, 0%, 100%, 0); */
    border-left: 0.1px solid transparent;
    position: relative;
    z-index: 1;

    outline: none;
    user-select: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    /* border: 1px solid ${({ theme }) => theme.color.link}; */
    border: none;
    outline: none;
    padding: 8px 30px 8px 8px;

    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    font-family: inherit;
  }
  & input:focus {
    transition: 0.5s;
    outline: 1px solid ${({ theme }) => theme.color.link};
  }
`;
export const Remain = styled.div`
  transition: 0.5s;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.borderColor.primary};
  margin: 6px 4px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
`;
export const BackgroundFlair = styled.div`
  transition: 0.5s;
  margin-top: 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  & label {
    display: flex;
    align-items: center;
  }
  & label span {
    flex: 1;
  }
`;
export const BackgroundFlairPicker = styled.div`
  transition: 0.5s;
  background-color: ${(props) => props.PickColor || " #ccc"};
  fill: rgb(0, 0, 0);
  cursor: pointer;
  height: 24px;
  width: 24px;
  align-items: center;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  & span {
    font-size: 20px;
    display: none;
  }
  &:hover span {
    /* font-size: 200px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const DownButtons = styled.div`
  transition: 0.5s;
  justify-content: flex-end;
  margin-top: 24px;
  display: flex;
  align-items: center;
`;
export const CancelBtn = styled.button`
  transition: 0.5s;
  margin-left: 8px;
  min-width: 100px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  background: transparent;
`;
export const SaveBtn = styled.button`
  transition: 0.5s;
  margin-left: 8px;
  min-width: 100px;
  position: relative;
  border: none;
  background-color: ${({ theme }) => theme.color.link};
  color: ${({ theme }) => theme.background.primary};
  fill: ${({ theme }) => theme.background.primary};
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  padding: 4px 16px;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  width: auto;
  /* background: transparent; */
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
export const TextFlairPicker = styled.button`
  transition: 0.5s;
  background-color: ${(props) => (props.Black ? "#878a8c" : "#fff")};
  color: ${(props) => (props.Black ? "#fff" : "#878a8c")};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  align-items: center;
  border-radius: 2px;
  border: 1px ${({ theme }) => theme.borderColor.primary};
  box-sizing: border-box;
  display: flex;
  height: 24px;
  justify-content: center;
  padding: 4px;
  width: 24px;
  & span {
    font-size: 20px;
    display: none;
  }
  &:hover span {
    /* font-size: 200px; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:disabled,
  &:focus:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    border-color: #ccc;
    color: #666666;
    cursor: not-allowed;
  }
`;
