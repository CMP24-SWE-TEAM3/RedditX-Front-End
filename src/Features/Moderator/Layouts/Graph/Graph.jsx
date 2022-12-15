import {
  ContainerBody,
  MemberBtn,
  GraphContainer,
  MembersLabel,
  GraphBody,
  GraphParent,
  Main,
} from "./Graph.styled";

import LineChart from "Features/Moderator/Components/LineChart/LineChart";
import Results from "Features/Moderator/Components/Results/Results";
import AsideGraph from "Features/Moderator/Components/AsideGraph/AsideGraph";
/**
 * Component that displays the graph with
 * @returns
 */
const Graph = () => {
  return (
    <ContainerBody>
      <MemberBtn>Members</MemberBtn>
      <Results />
      <GraphContainer>
        <MembersLabel>Members</MembersLabel>
        <GraphBody>
          <GraphParent>
            <Main>
              <LineChart />
            </Main>
            <AsideGraph />
          </GraphParent>
        </GraphBody>
      </GraphContainer>
    </ContainerBody>
  );
};
export default Graph;
