import styled from "styled-components";
import Form from "react-bootstrap/Form";
import ReactLanguageSelect from "react-languages-select";
import {
    CountryDropdown,
    RegionDropdown,
  } from "react-country-region-selector";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
export const InnerContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background.primary};
  margin: 20px;
  border-radius: 5px;
  width: 70%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: end;
  background-color: ${({ theme }) => theme.lineColor.primary};
  padding: 10px 0;
`;
export const ButtonOne = styled.button`
  background-color: transparent;
  border-radius: 100px;
  padding: 2px 20px;
  border: 1px solid;
  color: ${({ theme }) => theme.btnColor.primary};
  font-weight: 500;
  margin: 0 10px;
`;
export const ButtonTwo = styled.button`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 100px;
  padding: 2px 20px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.background.primary};
  font-weight: 500;
  margin: 0 10px;
`;
export const NameHeader = styled.h2`
  font-size: ${(p) => (p.small ? "15px" : "18px")};
  color: ${({ theme }) => theme.color.primary};

  svg {
    color: #0079d3;
  }
`;
export const CommuintyProfile = styled.h4`
  font-size: 10px;
  margin-bottom: -10px;
  color: ${({ theme }) => theme.borderColor.primary};
`;
export const EditMod = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.color.primary};
`;

export const SearchContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor.primary} !important;
  color: ${({ theme }) => theme.borderColor.primary};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 5px;
`;
export const TopicInput = styled.input`
  max-height: 100%;
  padding: 5px;
  border: none !important;
  color: ${({ theme }) => theme.borderColor.primary};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 5px;

  &:focus,
  &:active {
    border: none !important;
    outline: none !important;
  }
`;

export const Par = styled.p`
  font-size: 12px;
  color: ${({ theme }) => theme.borderColor.primary};
`;
export const TopicsContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor.primary} !important;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
`;
export const SelectedTopics = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  p {
    height: 30px !important;
    margin: 3px 3px;
    color: ${({ theme }) => theme.color.secondary};
    cursor: pointer;
    padding: 0 3px;
    background-color: ${({ theme }) => theme.lineColor.primary};
  }

  svg {
    color: ${({ theme }) => theme.borderColor.primary};
  }
`;
export const AddTopic = styled.button`
  width: 100%;
  height: auto;
  background: none;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.borderColor.primary} !important;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px #eee;
`;
export const Content = styled.button`
  background: none;
  display: flex;
  justify-content: start;
  color: ${({ theme }) => theme.borderColor.primary};
  border: none;
  font-size: 12px;
`;
export const Close = styled.button`
  background: none;
  display: flex;
  justify-content: start;
  border: none;
  color: ${({ theme }) => theme.color.primary};
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.borderColor.primary}; !important;
  color: ${({ theme }) => theme.borderColor.primary};
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 5px;
`;

export const MySwitch = styled(Form)`
  width: 50px;
  input#custom-switch {
    width: 40px;
    height: 24px;
  }
`;
export const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;


export const WelcomeOne = styled.div``;
export const WelcomeTwo = styled.div``;

export const MyLanguage = styled(ReactLanguageSelect)`
border: 1px solid ${({ theme }) => theme.borderColor.primary}; !important;
border-radius: 5px;
width: 100%;

  button {
    padding: 0;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const RegionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyCountry = styled(CountryDropdown)`
border: 1px solid ${({ theme }) => theme.borderColor.primary}; !important;
border-radius: 5px;
width: 45%;
background-color: transparent;
color: ${({ theme }) => theme.color.primary};
  button {
    padding: 0;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const MyRegion = styled(RegionDropdown)`
border: 1px solid ${({ theme }) => theme.borderColor.primary}; !important;
border-radius: 5px;
width: 45%;
background-color: transparent;
color: ${({ theme }) => theme.color.primary};
  button {
    padding: 0;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const CheckFormContainer = styled.div`
  margin-bottom: 30px;
  h6 {
    margin-bottom: 20px !important;
    color: ${({ theme }) => theme.color.primary};
  }
`;

export const FormCheckContainer = styled.div`
  display: flex;
  margin-bottom: 16px;

  .form-check-input {
    width: 1em;
    height: 1em;
    margin-top: 0.2em !important;

    :checked {
      background-color: #0079d3;
    }

    :focus {
      box-shadow: none;
    }
  }
`;

export const LabelForm = styled.label`
  display: flex;
  align-items: center;
`;

export const Ico = styled.div`
  margin: 0 4px;
  align-self: baseline;
  color: #878a8c;
  svg {
    vertical-align: unset !important;
  }
`;

export const FormCheckLabel = styled.label`
  font-size: 14px;
  line-height: 18px;
  font-weight: 500;
  display: flex;
  vertical-align: top;
  padding-left: 2px;
  margin-top: -1px;
  align-items: center;
  color: ${({ theme }) => theme.color.primary};
`;

export const Adult = styled.div`
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
`;

export const AdultCheck = styled.label`
  align-items: center;
  display: flex;

  .form-check-input {
    width: 1.3em;
    height: 1.3em;
    fill: #878a8c;

    :focus {
      box-shadow: none;
    }

    :checked {
      background-color: #0079d3;
    }
  }
`;

export const NSFW = styled.span`
  font-size: 12px;
  line-height: 17px;
  display: inline-block;
  background-color: #ff585b;
  font-weight: 500;
  border-radius: 2px;
  padding: 0 4px;
  color: ${({ theme }) => theme.background.primary} !important;
  margin: 0 4px 0 8px;
`;