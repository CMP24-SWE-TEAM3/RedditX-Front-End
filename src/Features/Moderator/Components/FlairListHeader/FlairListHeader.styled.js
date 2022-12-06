import styled from "styled-components";
export const ContainerFlairListHeading = styled.div`
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 12px;
  text-transform: uppercase;
  align-items: center;
  background-color: ${({ theme }) => theme.background.lightMuted};
  border-radius: 4px 4px 0 0;
  color: ${({ theme }) => theme.borderColor.primary};
  display: flex;
  padding: 16px;
  white-space: nowrap;
  justify-content: space-between;
`;
export const FlairPreview = styled.div`
  /* border-radius: 4px; */
  margin-left: 0;
  /* width: 400px; */
  align-items: center;
  display: flex;
  flex: 0 0 auto;
`;
export const Containerepet = styled.div`
  /* width: 144px; */
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  margin-left: 16px;
  & span {
    margin-left: 4px;
    /* vertical-align: text-top; */
    font-size: 20px;
    font-weight: 400;
    /* height: 20px; */
    /* line-height: 20px; */
    width: 20px;
    /* color: ${({ theme }) => theme.color.link}; */
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
export const Containerepet2 = styled.div`
  /* width: 280px; */
  flex: 0 0 auto;
  margin-left: 16px;
  display: flex;
  align-items: center;
  & span {
    margin-left: 4px;
    /* vertical-align: text-top; */
    font-size: 20px;
    font-weight: 400;
    /* height: 20px; */
    /* line-height: 20px; */
    width: 20px;
    /* color: ${({ theme }) => theme.color.link}; */
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
export const ContainerFLAIRID = styled.div`
  justify-content: flex-end;
  padding-right: 12px;
  margin-right: 0;
  flex: 1;
  display: flex;
  margin-left: 16px;
  align-items: center;
  & span {
    margin-left: 4px;
    /* vertical-align: text-top; */
    font-size: 20px;
    font-weight: 400;
    /* height: 20px; */
    /* line-height: 20px; */
    width: 20px;
    /* color: ${({ theme }) => theme.color.link}; */
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
  }
`;
