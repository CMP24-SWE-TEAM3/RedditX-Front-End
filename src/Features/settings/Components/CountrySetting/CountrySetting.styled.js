import styled from "styled-components";
import DropdownButton from "react-bootstrap/DropdownButton";
import { AiFillCaretDown } from "react-icons/ai";

export const SelectionSpan = styled.span`
  margin-top: 16px;
  min-width: 30ch;
  display: flex;
  position: relative;
  border: 1px solid transparent;
  color: #0079d3;
  fill: #0079d3;
`;

export const Selection = styled.select`
  position: relative;
  border: 1px solid transparent;
  color: #0079d3;
  fill: #0079d3;

  flex: 1;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  appearance: none;
  background: none;
  border: none;
  padding-left: 4px;
  padding-right: 20px;
`;

export const Arrow = styled(AiFillCaretDown)`
  position: relative;
  border: 1px solid transparent;
  color: #0079d3;
  fill: #0079d3;

  margin-left: -20px;
  pointer-events: none;
  vertical-align: top;

  display: inline-block;
  height: 20px;
  width: 20px;
`;
export const Langcont = styled.div`
  padding-left: 32px;
  flex-flow: row wrap;
  margin-bottom: 32px;
  display: flex;
`;
export const LangSpan = styled.span`
  min-width: 30ch;
  display: flex;
  position: relative;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.link};
  fill: ${({ theme }) => theme.color.link};
`;
export const StyledDropdown = styled(DropdownButton)`
  /* display: none; */
  border-radius: 20px;
  &:hover {
    background: #ebf4fc;
  }
  cursor: pointer;
  button::after {
    margin-left: -20px;
    pointer-events: none;
    vertical-align: top;
    transform: rotate(180deg) !important;
  }
  button:hover {
    background: #ebf4fc;
  }
  button::after:hover {
    background: #ebf4fc;
  }
  /* width: 100%; */
  button {
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
    border: 1px solid transparent;
    flex: 1;
    font-size: 16px;
    font-weight: 500;
    /* line-height: 20px; */
    appearance: none;
    background: none;
    color: ${({ theme }) => theme.color.link} !important;
    fill: ${({ theme }) => theme.color.link};
    /* padding-left: 4px; */
    /* padding-right: 20px; */
    overflow: visible !important;
    border: none;
  }
  .dropdown-menu {
    overflow-y: scroll;
    max-height: 300px;
    /* overflow-y: auto; */
  }
`;
