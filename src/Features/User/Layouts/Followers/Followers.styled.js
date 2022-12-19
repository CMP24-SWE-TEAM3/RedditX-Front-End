import styled from "styled-components";
import { Link } from "react-router-dom";

export const FollowersContainer = styled.div`
  max-width: 740px;
  width: 640px;
  margin-top: 40px;
`;

export const SearchContainer = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.lineColor.primary};
  align-items: center;
  border-radius: 4px 4px 0 0;
  box-sizing: border-box;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const TextContainer = styled.div`
  padding: 4px 0;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.color.primary};
`;

export const StyledDiv = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color.muted};
`;

export const SearchDiv = styled.div`
  display: flex;
`;

export const SearchInput = styled.input`
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.borderColor.primary};
  color: ${({ theme }) => theme.color.primary};
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
  height: 32px;
  padding: 8px;
  width: 248px;

  :focus,
  :focus-within {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.borderColor.primary};
  border-radius: 0 4px 4px 0;
  height: 32px;
  width: 40px;
  border: none;

  span.icon {
    color: ${({ theme }) => theme.background.primary};
    height: 16px;
    width: 16px;
    font-size: 18px;
    line-height: 6px;
  }
`;


