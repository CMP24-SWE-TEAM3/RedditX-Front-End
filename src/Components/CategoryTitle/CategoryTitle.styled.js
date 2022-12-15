import styled from "styled-components";

export const ContainerCat = styled.div`
  align-items: center !important;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 4px;
  flex-flow: row nowrap;
  min-height: 40px;
  justify-content: flex-start;
  margin-bottom: 8px;
  padding-left: 16px;
  padding-right: 4px;
  border: 1px solid ${({ theme }) => theme.borderColor.secondary};
  display: flex;
  /* flex-direction: column; */
  align-items: center;
`;
export const ContainerCatText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  color: ${({ theme }) => theme.color.muted};
  margin-right: auto;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  & p {
    /* display: inline; */
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }
`;
