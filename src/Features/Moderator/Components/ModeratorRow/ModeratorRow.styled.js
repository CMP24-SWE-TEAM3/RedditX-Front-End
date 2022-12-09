import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 50px;
  border-bottom: 1px solid #eee;
  width: 100%;
  background-color: ${({ theme }) => theme.background.primary};
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: revert;
  align-items: center;
`;
export const Photo = styled.div`
  max-height: 40px;
  max-width: 40px;

  img {
    max-width: 100%;
    border-radius: 100px;
  }
`;
export const UserName = styled.div`
  margin-left: 5px;
  color: ${({ theme }) => theme.color.primary};
`;
export const Date = styled.div`
  color: ${({ theme }) => theme.borderColor.primary};
  font-size: 13px;
`;
export const Abilities = styled.div`
  color: ${({ theme }) => theme.borderColor.primary};
  font-size: 13px;
  padding: 5px;
`;
export const PhotoAndUsername = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  width: 150px;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 35px;

  &:hover {
    background-color: #eee;
  }
`;
export const Edit = styled.span`
  cursor: pointer;
  font-size: 16px;
`;
export const ButtonsContainer = styled.div`
  button {
    border: none;
    background: none;
    margin: 0 10px;
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
export const MoreDetails = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  background-color: ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.borderColor.primary};
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
export const MoreDetailsBanned = styled.div`
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: ${({ theme }) => theme.lineColor.primary};
  color: ${({ theme }) => theme.borderColor.primary};
  padding-left: 10px;
`;
export const ModNote = styled.div`
  display: flex;
  margin: 10px 10px;

  h3 {
    font-size: 10px;
    margin: 0 5px 0 0;
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.color.primary};
  }
`;
