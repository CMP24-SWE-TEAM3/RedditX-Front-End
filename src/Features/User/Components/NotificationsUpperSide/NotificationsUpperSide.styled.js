import styled from "styled-components";
export const ContainerUpper = styled.div`
  height: 131px;
  margin: 0 auto;
  width: 648px;
  max-width: 90%;
  margin-bottom: 10px;
`;
export const ContainerUpperHeader = styled.h1`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.color.primary};
  padding: 40px 0 21px;
  font-size: 22px;
  font-weight: 500;
  line-height: 26px;
`;
export const Flex = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  /* width: 100%;
  height: 100%; */
`;
export const ContainerUpperNav = styled.nav`
  display: block;
`;
export const ContainerUpperUL = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  /* width: 100%; */
  display: flex;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  & div.flex {
    display: flex;
    /* align-items: center; */
  }
`;
export const ContainerUpperLI = styled.li`
  position: relative;
  & a.Activity {
    cursor: pointer;
    color: ${({ theme }) => theme.color.primary};
    text-decoration: none;
    border-bottom: 3px solid ${({ theme }) => theme.color.secondary};
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    line-height: unset;
    margin-right: 8px;
    padding: 15px 12px 12px;
  }
  & a.another {
    cursor: pointer;
    color: ${({ theme }) => theme.color.muted};
    text-decoration: none;
    /* border-bottom: 3px solid ${({ theme }) => theme.color.secondary}; */
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    line-height: unset;
    margin-right: 8px;
    padding: 15px 12px 12px;
    border-bottom: none;
    display: flex;
    align-items: baseline;
    justify-content: center;
  }
  /* &:nth-child(2) {
    margin-right: auto;
  } */
  & a.another:hover {
    color: ${({ theme }) => theme.color.primary};
  }
  & .Icon {
    margin-right: 6px;
    color: ${({ theme }) => theme.color.muted};
    font-size: 20px;
    font-weight: 400;
    height: 20px;
    line-height: 20px;
    vertical-align: middle;
    width: 20px;
  }
`;
