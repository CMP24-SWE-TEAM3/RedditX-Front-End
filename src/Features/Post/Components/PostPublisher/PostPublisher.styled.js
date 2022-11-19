import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  max-height: 30px;
  padding: 3px;
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
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;
export const PublishBy = styled.div`
  font-size: 12px;
`;
