import styled from "styled-components";
export const ContainerFlairMain = styled.div`
  /* min-width: 1065px; */
  overflow: visible;
  padding-top: 64px;
  border-radius: 0 0 4px 4px;
  @media (min-width: 640px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;
export const ContainerFlairMainHeader = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: ${({ theme }) => theme.color.titleText_of_link};
  margin-bottom: 16px;
  & span {
    margin-left: 4px;
    vertical-align: text-top;
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    /* vertical-align: middle; */
    width: 20px;
    color: ${({ theme }) => theme.color.link};
    cursor: pointer;
  }
`;
