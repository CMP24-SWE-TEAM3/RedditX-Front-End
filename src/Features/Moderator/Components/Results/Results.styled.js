import styled from "styled-components";
export const Statistics = styled.div`
  display: flex;
  padding-top: 16px;
`;
export const Sprint = styled.span`
  background-color: ${({ theme }) => theme.background.primary};
  border: 1px solid rgb(26 26 27 / 10%);
  border-radius: 4px;
  height: 92px;
  margin-left: 16px;
  width: 351px;
`;
export const Child = styled.div`
  line-height: 44px;
  padding: 16px;
`;
export const FirstChild = styled.div`
  font-size: 32px;
  font-weight: 400;
`;
export const SecondChild = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.borderColor.primary};
`;
