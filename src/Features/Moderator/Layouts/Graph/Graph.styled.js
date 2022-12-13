import styled from "styled-components";

export const ContainerBody = styled.div`
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  margin-bottom: 16px;
  max-width: 1124px;
  /* max-width:1200px; */
  overflow: auto;
`;
export const Button = styled.div`
  height: 49px;
`;
export const MemberBtn = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.btnColor.primary};
  margin: 8px 0 0 16px;
  padding-bottom: 5px;
  font-size: 14px;
  outline: none;
  border: none;
  background: none;
  font-weight: 700;
  line-height: 18px;
  margin: 8px 0 0 16px;
  padding-bottom: 5px;
`;

export const GraphContainer = styled.div`
  display: flex;
  /* max-height: 525px; */
`;
export const MembersLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  transform: rotate(-90deg);
  width: 54px;
  height: 19px;
  line-height: 12px;
  margin-top: 135px;
`;
export const GraphBody = styled.div`
  padding: 16px 0 8px;
`;
export const GraphParent = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Main = styled.div`
  color: ${({ theme }) => theme.categoryColor.text};
  flex: 1 1 100%;
  width: 100%;
`;
