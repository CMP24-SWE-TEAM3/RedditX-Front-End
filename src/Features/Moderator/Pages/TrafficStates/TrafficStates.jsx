// Import components
import React from "react";
import { Container } from "./TrafficStates.styled";

import HeaderGraph from "Features/Moderator/Components/HeaderGraph/HeaderGraph";
import Tables from "Features/Moderator/Layouts/Tables/Tables";
import Graph from "Features/Moderator/Layouts/Graph/Graph";
/**
 * Component that displays a graph with members statistics
 * @returns {React.Component}
 */

const TrafficStates = () => {
  return (
    <Container>
      <HeaderGraph />
      <Graph />
      <Tables />
    </Container>
  );
};

export default TrafficStates;
