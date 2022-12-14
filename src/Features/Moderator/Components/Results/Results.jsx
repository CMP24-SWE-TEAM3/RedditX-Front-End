import React from "react";
import {
  Statistics,
  Sprint,
  Child,
  FirstChild,
  SecondChild,
} from "./Results.styled";
/**
 * Component that displays the results of statistics
 * @returns {React.Component}
 */
const Results = () => {
  return (
    <Statistics>
      <Sprint>
        <Child>
          <FirstChild>N/A</FirstChild>
          <SecondChild>Total - Last 24 hours</SecondChild>
        </Child>
      </Sprint>
      <Sprint>
        <Child>
          <FirstChild>3</FirstChild>
          <SecondChild>Total - LAST 7 DAYS</SecondChild>
        </Child>
      </Sprint>
      <Sprint>
        <Child>
          <FirstChild>5</FirstChild>
          <SecondChild>Total - LAST MONTH</SecondChild>
        </Child>
      </Sprint>
    </Statistics>
  );
};

export default Results;
