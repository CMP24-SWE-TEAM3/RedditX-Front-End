import { TableContainer, SortIcon } from "./DayOfWeek.styled";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useState } from "react";
import getPageViews from "Features/Moderator/Services/getPageViews";
import getMembersCount from "Features/Moderator/Services/getMembersCount";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import useFetchFunction from "Hooks/useFetchFunction";
const DayOfWeek = () => {
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
    getPageViews(fetchPages, auth, subredditId);
  }, []);

  // get member counts
  useEffect(() => {
    getMembersCount(fetchMemberCountsJoined, auth, subredditId, "joined");
    getMembersCount(fetchMemberCountsLeft, auth, subredditId, "left");
  }, []);

  const [flipSort, setFlipSort] = useState(true);
  const [days, setDays] = useState([
    {
      Day: "Sunday",
      PAGEVIEWS: pageViews.days && pageViews.days[0] ? pageViews.days[0] : 32,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Day: "Monday",
      PAGEVIEWS: pageViews.days && pageViews.days[1] ? pageViews.days[1] : 45,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },

    {
      Day: "Tuesday",
      PAGEVIEWS: pageViews.days && pageViews.days[2] ? pageViews.days[2] : 70,
      UNIQUES: 41,
      MEMBERS_JOINED: 20,
    },
    {
      Day: "Wednesday",
      PAGEVIEWS: pageViews.days && pageViews.days[3] ? pageViews.days[3] : 92,
      UNIQUES: 1,
      MEMBERS_JOINED: 5,
    },
    {
      Day: "Thursday",
      PAGEVIEWS: pageViews.days && pageViews.days[4] ? pageViews.days[4] : 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
    {
      Day: "Friday",
      PAGEVIEWS: pageViews.days && pageViews.days[5] ? pageViews.days[5] : 43,
      UNIQUES: 12,
      MEMBERS_JOINED: 8,
    },
    {
      Day: "Saturday",
      PAGEVIEWS: pageViews.days && pageViews.days[6] ? pageViews.days[6] : 7,
      UNIQUES: 4,
      MEMBERS_JOINED: 2,
    },
  ]);
  useEffect(() => {
    if (
      pageViews !== null &&
      pageViews.days &&
      pageViews.days.length !== 0 &&
      fetchMemberCountsJoined.days &&
      fetchMemberCountsJoined.days.length !== 0 &&
      fetchMemberCountsLeft &&
      fetchMemberCountsLeft.days.length !== 0
    ) {
      setDays([
        {
          Day: "Sunday",
          PAGEVIEWS: pageViews.days[0],
          UNIQUES: 4,
          MEMBERS_JOINED: membersCountJoined.days[0],
        },
        {
          Day: "Monday",
          PAGEVIEWS: pageViews.days[1],
          UNIQUES: 4,
          MEMBERS_JOINED: membersCountJoined.days[1],
        },

        {
          Day: "Tuesday",
          PAGEVIEWS: pageViews.days[2],
          UNIQUES: 41,
          MEMBERS_JOINED: membersCountJoined.days[2],
        },
        {
          Day: "Wednesday",
          PAGEVIEWS: pageViews.days[3],
          UNIQUES: 1,
          MEMBERS_JOINED: membersCountJoined.days[3],
        },
        {
          Day: "Thursday",
          PAGEVIEWS: pageViews.days[4],
          UNIQUES: 4,
          MEMBERS_JOINED: membersCountJoined.days[4],
        },
        {
          Day: "Friday",
          PAGEVIEWS: pageViews.days[5],
          UNIQUES: 12,
          MEMBERS_JOINED: membersCountJoined.days[5],
        },
        {
          Day: "Saturday",
          PAGEVIEWS: pageViews.days[6],
          UNIQUES: 4,
          MEMBERS_JOINED: membersCountJoined.days[6],
        },
      ]);
    }
  }, [membersCountJoined, pageViews, membersCountLeft]);
  // console.log("Mangaa==>", pageViews);

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
      {pageViews && (
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
      )}
    </TableContainer>
  );
};

export default DayOfWeek;
