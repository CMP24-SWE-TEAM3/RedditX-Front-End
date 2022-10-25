import styled from "styled-components";
export const ContainerPostsList = styled.div`
  width: 100%;
  /* background: #fff;
  height: 20px; */
  @media (min-width: 960px) {
    flex: 1 1 640px;
    max-width: 640px;
  }
  & .Posts-List {
    margin-bottom: 16px;
  }
  & .Sub-List {
    height: auto;
    width: 100%;
  }
`;
