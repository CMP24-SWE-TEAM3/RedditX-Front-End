import styled from "styled-components";

export const AddDescription = styled.div`
  transition: all 0.1s linear 0s;
  display: block;
  background-color: #f6f7f8;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
  margin-top: 8px;
  border: 1px solid #dae0e6;
  cursor: pointer;

  div {
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    color: ${({ theme }) => theme.color.secondary};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.color.secondary};
  }
`;

export const BirthDay = styled.div`
  margin-top: 12px;

  .cake-day {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    display: flex;
    flex-flow: row nowrap;
  }

  .icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
    margin: -2px 8px 0 0;
  }

  .text {
    color: #7c7c7c;
  }
`;

export const Private = styled.div`
  margin-top: 8px;

  div.container {
    padding: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
  span.icon {
    height: 16px;
    padding-right: 4px;
    vertical-align: top;
    font-size: 20px;
    font-weight: 400;
    line-height: 20px;
    width: 20px;
  }

  span.text {
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
`;

export const DescriptionContainer = styled.div`
  cursor: pointer;
  transition: all 0.1s linear 0s;
`;

export const DescriptionInnerContainer = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  transition: all 0.1s linear 0s;
  margin-bottom: 8px;
  position: relative;

  :hover {
    border: 1px solid ${({ theme }) => theme.color.secondary};
    padding: 4px;
  }
`;
export const DescriptionContent = styled.div`
  font-family: "Noto Sans", Arial, sans-serif;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  word-wrap: break-word;

  span.icon {
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
    margin-bottom: 2px;
    color: ${({ theme }) => theme.color.secondary};
    display: inline-block;
    margin-left: 4px;
  }
`;

export const InputContainer = styled.div`
  transition: none;
  border: 1px solid ${({ theme }) => theme.color.secondary};
  display: block;
  background-color: ${({ theme }) => theme.button.muted};
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
  margin-top: 8px;
  cursor: pointer;

  textarea {
    overflow: hidden;
    overflow-wrap: break-word;
    height: 21px;
    display: flex;
    /* max-height:200px; */
    resize: none;
    cursor: auto;
    color: ${({ theme }) => theme.color.primary};
    outline: none;
    background-color: transparent;
    border: none;
    padding: 0;
    width: 100%;
    font-family: "Noto Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const CharContainer = styled.div`
  flex: 100%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.borderColor.primary};
  padding-top: 5px;
`;

export const CancelButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  margin-right: 8px;
  color: red;
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  align-self: flex-end;
  user-select: none;
`;

export const SaveButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.color.secondary};
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  align-self: flex-end;
  user-select: none;
`;
