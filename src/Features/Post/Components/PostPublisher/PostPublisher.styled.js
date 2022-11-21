import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 30px;
  padding: 20px 20px 0;
  background-color: ${({ theme }) => theme.background.primary};
  max-width: 100%;
`;
export const Photo = styled.div`
  background-image: url(${(p) => p.url});
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  margin: 0 3px 0 0;
`;
export const Community = styled(Link)`
  font-weight: 500;
  font-size: 14px;
  margin: 0 3px 0 0;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
export const PublishBy = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.muted};
`;
export const InfoContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-height: 30px;
  background-color: ${({ theme }) => theme.background.primary};
  max-width: 100%;
`;
export const Follow = styled.div`
  width: 20px;
  height: 20px;
  color: ${(p) => (p.follow ? "red" : "gray")};

  svg {
    color: ${(p) => (p.follow ? "red" : "gray")};
    font-size: 22px;
  }
`;
