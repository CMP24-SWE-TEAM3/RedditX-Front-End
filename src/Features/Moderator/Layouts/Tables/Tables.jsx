import React, { useState } from "react";
import { TableContainer, HeaderTable, ButtonState, Tab } from "./Tables.styled";
import DayOfWeek from "Features/Moderator/Components/DayOfWeek/DayOfWeek";
import MonthState from "Features/Moderator/Components/MonthState/MonthState";
/**
 * Component that displays the table of traffic statistics
 * @returns {React.Component}
 */
const Tables = () => {
  // State for selected table
  const [showState, setShowState] = useState(true);

  const handleShowTable = (e) => {
    if (e.target.id === "1") setShowState(true);
    else setShowState(false);
  };

  return (
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
  );
};

export default Tables;
