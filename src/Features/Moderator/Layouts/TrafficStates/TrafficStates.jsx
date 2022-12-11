// Import components
import React from "react";
import {
  Container,
  ContainerBody,
  MemberBtn,
  GraphContainer,
  MembersLabel,
  GraphBody,
  GraphParent,
  Main,
} from "./TrafficStates.styled";

import LineChart from "Features/Moderator/Components/LineChart/LineChart";
import Results from "Features/Moderator/Components/Results/Results";
import AsideGraph from "Features/Moderator/Components/AsideGraph/AsideGraph";
import HeaderGraph from "Features/Moderator/Components/HeaderGraph/HeaderGraph";

/**
 * Component that displays a graph with members statistics
 * @returns {React.Component}
 */

const TrafficStates = () => {
  return (
    <Container>
      <HeaderGraph />
      <ContainerBody>
        <MemberBtn>Member</MemberBtn>
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
    </Container>
  );
};

export default TrafficStates;
