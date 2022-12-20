import { TableContainer, SortIcon } from "./DayOfWeek.styled";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
import getPageViews from "Features/Moderator/Services/getPageViews";
import getMembersCount from "Features/Moderator/Services/getMembersCount";
import { useEffect } from "react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
const DayOfWeek = () => {
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

  const [flipSort, setFlipSort] = useState(true);
  const [days, setDays] = useState([
    {
      Day: "Sunday",
      PAGEVIEWS: 32,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Day: "Monday",
      PAGEVIEWS: 45,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },

    {
      Day: "Tuesday",
      PAGEVIEWS: 70,
      UNIQUES: 41,
      MEMBERS_JOINED: 20,
    },
    {
      Day: "Wednesday",
      PAGEVIEWS: 92,
      UNIQUES: 1,
      MEMBERS_JOINED: 5,
    },
    {
      Day: "Thursday",
      PAGEVIEWS: 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Day: "Friday",
      PAGEVIEWS: 43,
      UNIQUES: 12,
      MEMBERS_JOINED: 8,
    },
    {
      Day: "Saturday",
      PAGEVIEWS: 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
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

  // reverse page views
  const revertDays = () => {
    setDays([...days].reverse());
  };
  const handleFlipSort = () => {
    setFlipSort(!flipSort);
  };

  return (
    <TableContainer bordered>
      <thead>
        <tr>
          <th>
            DAY Of WEEK{" "}
            <SortIcon
              onClick={() => {
                revertDays();
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
          <td>{days[0].Day}</td>
          <td>{days[0].PAGEVIEWS}</td>
          <td>{days[0].UNIQUES}</td>
          <td>{days[0].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{days[1].Day}</td>
          <td>{days[1].PAGEVIEWS}</td>
          <td>{days[1].UNIQUES}</td>
          <td>{days[1].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{days[2].Day}</td>
          <td>{days[2].PAGEVIEWS}</td>
          <td>{days[2].UNIQUES}</td>
          <td>{days[2].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{days[3].Day}</td>
          <td>{days[3].PAGEVIEWS}</td>
          <td>{days[3].UNIQUES}</td>
          <td>{days[3].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{days[4].Day}</td>
          <td>{days[4].PAGEVIEWS}</td>
          <td>{days[4].UNIQUES}</td>
          <td>{days[4].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{days[5].Day}</td>
          <td>{days[5].PAGEVIEWS}</td>
          <td>{days[5].UNIQUES}</td>
          <td>{days[5].MEMBERS_JOINED}</td>
        </tr>
        <tr>
          <td>{days[6].Day}</td>
          <td>{days[6].PAGEVIEWS}</td>
          <td>{days[6].UNIQUES}</td>
          <td>{days[6].MEMBERS_JOINED}</td>
        </tr>
      </tbody>
    </TableContainer>
  );
};

export default DayOfWeek;
