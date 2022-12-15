import styled from "styled-components";

export const Page = styled.div`
  background:  ${({ theme }) => theme.lineColor.primary};
  color:  ${({ theme }) => theme.color.primary};
  transition: 0.3s;
  font: normal x-small verdana, arial, helvetica, sans-serif;
  z-index: 1;
  min-height: 550px;
  font-weight: 500;
`;
export const Margin = styled.div`
  padding: 20px 0;
`;
export const Content = styled.div`
  padding: 10px 20px;
  margin: 00px auto;
  width: 70%;
  min-width: 700px;
  background: ${({ theme }) => theme.background.primary};
  color:  ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;

export const Spacer = styled.div`
  margin-bottom: 5px;
`;
export const FormField = styled.form`
  margin: 0;
  padding: 0;
`;

export const FieldDiv = styled.div`
  background-color: inherit;
  padding: 0;
  border-radius: 0;
  width: unset;
  font-size: large;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  margin-top: auto;
`;

export const FieldContent = styled.div`
  margin-top: 5px;
  border: none;
  vertical-align: top;
`;

export const FromSelection = styled.select`
  font-size: 100%;
  width: 492px;
  padding: 3px;
  margin: 0 0 15px;
  border: 1px solid gray;
  transition: 0.3s;
`;

export const TitleDescription = styled.span`
  color: ${({ theme }) => theme.borderColor.primary};
  transition: 0.3s;
  font-size: 14px;
`;

export const Inputs = styled.input`
  font-size: 100%;
  width: 492px;
  padding: 3px;
  margin: 10px 0;
  border: 1px solid gray;
`;

export const MessageContainer = styled.div`
  width: 500px;
  color:  ${({ theme }) => theme.color.primary};
  transition: 0.3s;
`;

export const Message = styled.textarea`
  line-height: 1.5em;
  width: 492px;
  margin: 10px 0;
`;

export const SendBtn = styled.button`
  display: inline-block;
  border-radius: 4px;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.color.secondary};
  border-color:  ${({ theme }) => theme.color.secondary};
  padding: 6px 16px 4px;
  color: ${({ theme }) => theme.btnColor.text};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 12px;
`;

export const Heading = styled.h1`
  font-size: 18px;
  font-weight: normal;
  margin: 10px 0;
  margin-top: auto;
  text-transform: capitalize;
`;
export const Error = styled.span`
  display: none;
  color:  ${({ theme }) => theme.color.danger};
  transition: 0.3s;
  font-size: 11px;
  margin-top: -8px;
  &.active {
    display: block;
  }
`;
