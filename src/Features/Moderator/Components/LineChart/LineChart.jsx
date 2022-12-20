import React from "react";
import { LineContainer } from "./LineChart.styled";
import { CChart } from "@coreui/react-chartjs";
import getMembersCount from "Features/Moderator/Services/getMembersCount";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

/**
 * Component that displays chart with datasets of members
 * @returns {React.Component}
 */
const LineChart = () => {
  const { subredditId } = useParams();
  const auth = useAuth();

  const [
    membersCountJoined,
    errorMemberCountJoined,
    isLoadingMemberJoined,
    fetchMemberCountsJoined,
  ] = useFetchFunction();
  const [
    membersCountLeft,
    errorMemberCount,
    isLoadingMember,
    fetchMemberCountsLeft,
  ] = useFetchFunction();

  // get member joined
  useEffect(() => {
    getMembersCount(fetchMemberCountsJoined, auth, subredditId, "joined");
  }, []);

  // get member left
  useEffect(() => {
    getMembersCount(fetchMemberCountsLeft, auth, subredditId, "left");
  }, []);
  // function which contains datasets of members to display on chart
  const data = () => {
    return {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "left members",
          borderColor: "rgb(255 176 0)",
          pointBackgroundColor: "rgb(255 176 0)",
          pointBorderColor: `${({ theme }) => theme.categoryColor.text}`,
          data:
            membersCountLeft &&
            membersCountLeft.months &&
            membersCountLeft.months.length !== 0
              ? membersCountLeft.months
              : [1, 0.1, 0.3, 0.1, 0.2, 0.1, 0.12, 0.9, 0.6],
        },
        {
          label: "joined members",
          borderColor: "rgb(0 121 211)",
          pointBackgroundColor: "rgb(0 121 211)",
          pointBorderColor: `${({ theme }) => theme.categoryColor.text}`,
          data:
            membersCountJoined &&
            membersCountJoined.months &&
            membersCountJoined.months.length !== 0
              ? membersCountJoined.months
              : [1, 0.3, 0.3, 0.3, 0.5, 0.3, 0.7, 0.8, 0.1],
        },
      ],
    };
  };

  return (
    <LineContainer>
      {membersCountLeft &&
        membersCountJoined &&
        membersCountLeft.months &&
        membersCountJoined.months &&
        membersCountLeft.months.length !== 0 &&
        membersCountJoined.months.length !== 0 && (
          <CChart
            data={data()}
            options={{
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
            type="line"
          ></CChart>
        )}
    </LineContainer>
  );
};

export default LineChart;
