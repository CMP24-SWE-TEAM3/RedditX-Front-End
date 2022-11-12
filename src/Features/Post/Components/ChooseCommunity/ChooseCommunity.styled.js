// Import styled
import styled from "styled-components";

// Import bootstrap components
import { Button } from "react-bootstrap";

export const CreateButton = styled(Button)`
  background-color: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.color.secondary};
  font-weight: 700;
  font-size: 14px;
  border-radius: 20px;
  border: none;
  margin-top: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    background-color: ${({ theme }) => theme.background.muted};
  }
`;

// Main container for the main section
export const CreateCommunity = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Main container for the main section
export const Container = styled.div`
  max-width: 350px;
  margin-top: 20px;
`;

// Choose community small form
export const Choose = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
  border: none;
  color: ${({ theme }) => theme.color.primary};
  padding: 4px 8px;
  display: block;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
`;

// Input text for community search
export const Input = styled.input`
  display: inline-block;
  margin-left: 8px;
  margin-right: auto;
  border: 0;
  font-weight: 500;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.background.primary};
  width: 100%;
  &:focus {
    outline: none;
  }

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.color.primary};
    opacity: 1; /* Firefox */
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.color.primary};
  }

  &::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.color.primary};
  }
`;

// Communities menu container
export const Menu = styled.div`
  position: absolute;
  z-index: 1;
  width: 350px;
  border-radius: 0;
  outline: 0;
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid ${({ theme }) => theme.lineColor.primary};
`;

// Container for items group
export const ItemsGroup = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.lineColor.primary};
`;

// Dropdown item
export const DropdownItem = styled.div`
  width: 100%;
  padding: 5px 10px;
  border-radius: 0;
  outline: none;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: ${({ theme }) => theme.color.primary};
  background-color: ${({ theme }) => theme.background.primary};
  &:hover {
    background-color: ${({ theme }) => theme.background.primary};
    cursor: pointer;
  }
`;

// Title of menu group
export const GroupTitle = styled.h6`
  color: ${({ theme }) => theme.color.muted};
  font-size: 12px;
  text-transform: uppercase;
  margin: 10px 20px;
`;

// Image (logo) for user or community
export const UserImage = styled.img`
  height: 30px;
  margin-right: 8px;
  padding-bottom: 5px;
  width: 30px;
  object-fit: cover;
  border-radius: 50%;
`;

// Down arrow icon
export const ArrowIcon = styled.span`
  &:hover {
    cursor: pointer;
  }
`;
