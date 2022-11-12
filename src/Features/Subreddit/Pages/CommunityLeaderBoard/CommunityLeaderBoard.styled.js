import styled from "styled-components";

export const LeaderBoardContainer = styled.div`
  background-color: ${({ theme }) => theme.canvas};
  transition: 0.3s;
  min-height: calc(100vh - 48px);
  line-height: 1;
  font-family: IBMPlexSans, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;
export const LeaderBoardPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DropDown = styled.div`
  text-align: center;
  margin: 10px;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;
