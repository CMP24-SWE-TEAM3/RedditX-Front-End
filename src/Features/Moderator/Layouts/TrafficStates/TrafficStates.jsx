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
  TableContainer,
  HeaderTable,
  ButtonState,
  Tab,
} from "./TrafficStates.styled";

import LineChart from "Features/Moderator/Components/LineChart/LineChart";
import Results from "Features/Moderator/Components/Results/Results";
import AsideGraph from "Features/Moderator/Components/AsideGraph/AsideGraph";
import HeaderGraph from "Features/Moderator/Components/HeaderGraph/HeaderGraph";
import DayOfWeek from "Features/Moderator/Components/DayOfWeek/DayOfWeek";
import MonthState from "Features/Moderator/Components/MonthState/MonthState";
import { useState } from "react";
/**
 * Component that displays a graph with members statistics
 * @returns {React.Component}
 */

const TrafficStates = () => {
  const [showState, setShowState] = useState(true);
  const handleShowTable = (e) => {
    if (e.target.id === "1") setShowState(true);
    else setShowState(false);
  };
  return (
    <Container>
      <HeaderGraph />
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
      <TableContainer>
        <HeaderTable>
          <ButtonState show={showState} id="1" onClick={handleShowTable}>
            Day of week
            {showState && <Tab />}
          </ButtonState>
          <ButtonState show={!showState} id="2" onClick={handleShowTable}>
            Month
            {!showState && <Tab />}
          </ButtonState>
        </HeaderTable>
        {showState && <DayOfWeek />}
        {!showState && <MonthState />}
      </TableContainer>
    </Container>
  );
};

export default TrafficStates;
