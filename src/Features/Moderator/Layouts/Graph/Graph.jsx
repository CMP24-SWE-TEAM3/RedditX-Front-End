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
 * Component that displays the graph with statistics of members per day and months
 * @returns {React.Component}
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
