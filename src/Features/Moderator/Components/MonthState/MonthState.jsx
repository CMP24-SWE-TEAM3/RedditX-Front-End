import { TableContainer, SortIcon } from "./MonthState.styled";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
import getPageViews from "Features/Moderator/Services/getPageViews";
import getMembersCount from "Features/Moderator/Services/getMembersCount";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

/**
 * Component that displays a list of months
 * @returns
 */
const MonthState = () => {
  const { subredditId } = useParams();

  // authorization's user
  const auth = useAuth();

  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [pageViews, errorPage, isLoadingPages, fetchPages] = useFetchFunction();
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

  // get page views
  useEffect(() => {
    getPageViews(fetchPages, auth, `t5_${subredditId}`);
  }, []);

  // get member counts
  useEffect(() => {
    getMembersCount(fetchMemberCountsJoined, auth, `t5_${subredditId}`, "joined");
  }, []);
  // get member counts
  useEffect(() => {
    getMembersCount(fetchMemberCountsLeft, auth, `t5_${subredditId}`, "left");
  }, []);

  const [months, setMonth] = useState([
    {
      Month: "December",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "November",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },

    {
      Month: "October",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "September",
      PAGEVIEWS: 1,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "August",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "July",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "June",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "May",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "April",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "March",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "February",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Month: "January",
      PAGEVIEWS: 0,
      MEMBERS_LEFT: 1,
      MEMBERS_JOINED: 1,
    },
  ]);
  useEffect(() => {
    if (
      pageViews !== null &&
      pageViews.months &&
      pageViews.months.length !== 0 &&
      membersCountJoined &&
      membersCountJoined.months &&
      membersCountJoined.months.length !== 0 &&
      membersCountLeft &&
      membersCountLeft.months &&
      membersCountLeft.months.length !== 0
    ) {
      setMonth([
        {
          Month: "December",
          PAGEVIEWS: pageViews.months[0],
          MEMBERS_LEFT: membersCountLeft.months[0],
          MEMBERS_JOINED: membersCountJoined.months[0],
        },
        {
          Month: "November",
          PAGEVIEWS: pageViews.months[1],
          MEMBERS_LEFT: membersCountLeft.months[1],
          MEMBERS_JOINED: membersCountJoined.months[1],
        },

        {
          Month: "October",
          PAGEVIEWS: pageViews.months[2],
          MEMBERS_LEFT: membersCountLeft.months[2],
          MEMBERS_JOINED: membersCountJoined.months[2],
        },
        {
          Month: "September",
          PAGEVIEWS: pageViews.months[3],
          MEMBERS_LEFT: membersCountLeft.months[3],
          MEMBERS_JOINED: membersCountJoined.months[3],
        },
        {
          Month: "August",
          PAGEVIEWS: pageViews.months[4],
          MEMBERS_LEFT: membersCountLeft.months[4],
          MEMBERS_JOINED: membersCountJoined.months[4],
        },
        {
          Month: "July",
          PAGEVIEWS: pageViews.months[5],
          MEMBERS_LEFT: membersCountLeft.months[5],
          MEMBERS_JOINED: membersCountJoined.months[5],
        },
        {
          Month: "June",
          PAGEVIEWS: pageViews.months[6],
          MEMBERS_LEFT: membersCountLeft.months[6],
          MEMBERS_JOINED: membersCountJoined.months[6],
        },
        {
          Month: "May",
          PAGEVIEWS: pageViews.months[7],
          MEMBERS_LEFT: membersCountLeft.months[7],
          MEMBERS_JOINED: membersCountJoined.months[7],
        },
        {
          Month: "April",
          PAGEVIEWS: pageViews.months[8],
          MEMBERS_LEFT: membersCountLeft.months[8],
          MEMBERS_JOINED: membersCountJoined.months[8],
        },
        {
          Month: "March",
          PAGEVIEWS: pageViews.months[9],
          MEMBERS_LEFT: membersCountLeft.months[9],
          MEMBERS_JOINED: membersCountJoined.months[9],
        },
        {
          Month: "February",
          PAGEVIEWS: pageViews.months[10],
          MEMBERS_LEFT: membersCountLeft.months[10],
          MEMBERS_JOINED: membersCountJoined.months[10],
        },
        {
          Month: "January",
          PAGEVIEWS: pageViews.months[11],
          MEMBERS_LEFT: membersCountLeft.months[11],
          MEMBERS_JOINED: membersCountJoined.months[11],
        },
      ]);
    }
  }, [membersCountJoined, pageViews, membersCountLeft]);

  // state that handles showin of sort icon
  const [flipSort, setFlipSort] = useState(true);

  // function that handles  reversing of months
  const revertMonth = () => {
    setMonth([...months].reverse());
  };
  const handleFlipSort = () => {
    setFlipSort(!flipSort);
  };

  return (
    <TableContainer bordered>
      <thead>
        <tr>
          <th>
            MONTH
            <SortIcon
              onClick={() => {
                revertMonth();
                handleFlipSort();
              }}
            >
              {flipSort && <FaSortDown size={18} />}
              {!flipSort && <FaSortUp size={18} />}
            </SortIcon>
          </th>
          <th>PAGEVIEWS</th>
          <th>MEMBERS LEFT</th>
          <th>MEMBERS JOINED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{months[0].Month}</td>
          <td>{months[0].PAGEVIEWS}</td>
          <td>{months[0].MEMBERS_LEFT}</td>
          <td>{months[0].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[1].Month}</td>
          <td>{months[1].PAGEVIEWS}</td>
          <td>{months[1].MEMBERS_LEFT}</td>
          <td>{months[1].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[2].Month}</td>
          <td>{months[2].PAGEVIEWS}</td>
          <td>{months[2].MEMBERS_LEFT}</td>
          <td>{months[2].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[3].Month}</td>
          <td>{months[3].PAGEVIEWS}</td>
          <td>{months[3].MEMBERS_LEFT}</td>
          <td>{months[3].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[4].Month}</td>
          <td>{months[4].PAGEVIEWS}</td>
          <td>{months[4].MEMBERS_LEFT}</td>
          <td>{months[4].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[5].Month}</td>
          <td>{months[5].PAGEVIEWS}</td>
          <td>{months[5].MEMBERS_LEFT}</td>
          <td>{months[5].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[6].Month}</td>
          <td>{months[6].PAGEVIEWS}</td>
          <td>{months[6].MEMBERS_LEFT}</td>
          <td>{months[6].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[7].Month}</td>
          <td>{months[7].PAGEVIEWS}</td>
          <td>{months[7].MEMBERS_LEFT}</td>
          <td>{months[7].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[8].Month}</td>
          <td>{months[8].PAGEVIEWS}</td>
          <td>{months[8].MEMBERS_LEFT}</td>
          <td>{months[8].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[9].Month}</td>
          <td>{months[9].PAGEVIEWS}</td>
          <td>{months[9].MEMBERS_LEFT}</td>
          <td>{months[9].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[10].Month}</td>
          <td>{months[10].PAGEVIEWS}</td>
          <td>{months[10].MEMBERS_LEFT}</td>
          <td>{months[10].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[11].Month}</td>
          <td>{months[11].PAGEVIEWS}</td>
          <td>{months[11].MEMBERS_LEFT}</td>
          <td>{months[11].MEMBERS_JOINED}</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default MonthState;
