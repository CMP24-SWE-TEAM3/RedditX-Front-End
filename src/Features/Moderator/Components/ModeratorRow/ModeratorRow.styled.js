import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 50px;
  border-bottom: 1px solid #eee;
  width: 100%;
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
  }
`;
export const UserName = styled.div``;
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
  margin-left:5px;
  margin-right: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  width:150px;
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
