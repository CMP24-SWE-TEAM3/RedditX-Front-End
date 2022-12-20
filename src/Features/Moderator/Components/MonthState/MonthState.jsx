import { TableContainer, SortIcon } from "./MonthState.styled";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
import getPageViews from "Features/Moderator/Services/getPageViews";
import getMembersCount from "Features/Moderator/Services/getMembersCount";
import { useEffect } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";

/**
 * Component that displays a list of months
 * @returns
 */
const MonthState = () => {
  // authorization's user
  const auth = useAuth();

  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [pageViews, errorPage, isLoadingPages, fetchPages] = useFetchFunction();
  const [membersCount, errorMemberCount, isLoadingMember, fetchMemberCounts] =
    useFetchFunction();

  // state that handles showin of sort icon
  const [flipSort, setFlipSort] = useState(true);

  const [months, setMonth] = useState([
    {
      Month: "December",
      PAGEVIEWS: 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Month: "November",
      PAGEVIEWS: 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },

    {
      Month: "October",
      PAGEVIEWS: 70,
      UNIQUES: 41,
      MEMBERS_JOINED: 20,
    },
    {
      Month: "September",
      PAGEVIEWS: 92,
      UNIQUES: 1,
      MEMBERS_JOINED: 5,
    },
    {
      Month: "August",
      PAGEVIEWS: 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Month: "July",
      PAGEVIEWS: 43,
      UNIQUES: 12,
      MEMBERS_JOINED: 8,
    },
    {
      Month: "June",
      PAGEVIEWS: 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Month: "May",
      PAGEVIEWS: 17,
      UNIQUES: 13,
      MEMBERS_JOINED: 2,
    },
    {
      Month: "April",
      PAGEVIEWS: 7,
      UNIQUES: 21,
      MEMBERS_JOINED: 6,
    },
    {
      Month: "March",
      PAGEVIEWS: 7,
      UNIQUES: 91,
      MEMBERS_JOINED: 11,
    },
    {
      Month: "February",
      PAGEVIEWS: 17,
      UNIQUES: 41,
      MEMBERS_JOINED: 10,
    },
    {
      Month: "January",
      PAGEVIEWS: 0,
      UNIQUES: 13,
      MEMBERS_JOINED: 1,
    },
  ]);

  // get page views
  useEffect(() => {
    getPageViews(fetchPages, auth);
  }, []);
  // get member counts
  useEffect(() => {
    getMembersCount(fetchMemberCounts, auth);
  }, []);

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
          <th>UNIQUES</th>
          <th>MEMBERS JOINED</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{months[0].Month}</td>
          <td>{months[0].PAGEVIEWS}</td>
          <td>{months[0].UNIQUES}</td>
          <td>{months[0].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[1].Month}</td>
          <td>{months[1].PAGEVIEWS}</td>
          <td>{months[1].UNIQUES}</td>
          <td>{months[1].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[2].Month}</td>
          <td>{months[2].PAGEVIEWS}</td>
          <td>{months[2].UNIQUES}</td>
          <td>{months[2].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[3].Month}</td>
          <td>{months[3].PAGEVIEWS}</td>
          <td>{months[3].UNIQUES}</td>
          <td>{months[3].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[4].Month}</td>
          <td>{months[4].PAGEVIEWS}</td>
          <td>{months[4].UNIQUES}</td>
          <td>{months[4].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[5].Month}</td>
          <td>{months[5].PAGEVIEWS}</td>
          <td>{months[5].UNIQUES}</td>
          <td>{months[5].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[6].Month}</td>
          <td>{months[6].PAGEVIEWS}</td>
          <td>{months[6].UNIQUES}</td>
          <td>{months[6].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[7].Month}</td>
          <td>{months[7].PAGEVIEWS}</td>
          <td>{months[7].UNIQUES}</td>
          <td>{months[7].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[8].Month}</td>
          <td>{months[8].PAGEVIEWS}</td>
          <td>{months[8].UNIQUES}</td>
          <td>{months[8].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[9].Month}</td>
          <td>{months[9].PAGEVIEWS}</td>
          <td>{months[9].UNIQUES}</td>
          <td>{months[9].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[10].Month}</td>
          <td>{months[10].PAGEVIEWS}</td>
          <td>{months[10].UNIQUES}</td>
          <td>{months[10].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{months[11].Month}</td>
          <td>{months[11].PAGEVIEWS}</td>
          <td>{months[11].UNIQUES}</td>
          <td>{months[11].MEMBERS_JOINED}</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default MonthState;
