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
    getPageViews(fetchPages, auth, `t5_${subredditId}`);
  }, []);

  // get member counts
  useEffect(() => {
    getMembersCount(
      fetchMemberCountsJoined,
      auth,
      `t5_${subredditId}`,
      "joined"
    );
  }, []);
  // get member counts
  useEffect(() => {
    getMembersCount(fetchMemberCountsLeft, auth, `t5_${subredditId}`, "left");
  }, []);

  const [flipSort, setFlipSort] = useState(true);
  const [days, setDays] = useState([
    {
      Day: "Sunday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[0]
          ? pageViews.days[0]
          : 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Day: "Monday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[1]
          ? pageViews.days[1]
          : 45,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },

    {
      Day: "Tuesday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[2]
          ? pageViews.days[2]
          : 70,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Day: "Wednesday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[3]
          ? pageViews.days[3]
          : 0,
      MEMBERS_LEFT: 1,
      MEMBERS_JOINED: 0,
    },
    {
      Day: "Thursday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[4]
          ? pageViews.days[4]
          : 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Day: "Friday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[5]
          ? pageViews.days[5]
          : 0,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
    {
      Day: "Saturday",
      PAGEVIEWS:
        pageViews && pageViews.days && pageViews.days[6]
          ? pageViews.days[6]
          : 7,
      MEMBERS_LEFT: 0,
      MEMBERS_JOINED: 0,
    },
  ]);
  useEffect(() => {
    if (
      pageViews !== null &&
      pageViews.days &&
      pageViews.days.length !== 0 &&
      membersCountJoined &&
      membersCountJoined.days &&
      membersCountJoined.days.length !== 0 &&
      membersCountLeft &&
      membersCountLeft.days &&
      membersCountLeft.days.length !== 0
    ) {
      console.log(pageViews);
      setDays([
        {
          Day: "Sunday",
          PAGEVIEWS: pageViews.days[0],
          MEMBERS_LEFT: membersCountLeft.days[0],
          MEMBERS_JOINED: membersCountJoined.days[0],
        },
        {
          Day: "Monday",
          PAGEVIEWS: pageViews.days[1],
          MEMBERS_LEFT: membersCountLeft.days[1],
          MEMBERS_JOINED: membersCountJoined.days[1],
        },

        {
          Day: "Tuesday",
          PAGEVIEWS: pageViews.days[2],
          MEMBERS_LEFT: membersCountLeft.days[2],
          MEMBERS_JOINED: membersCountJoined.days[2],
        },
        {
          Day: "Wednesday",
          PAGEVIEWS: pageViews.days[3],
          MEMBERS_LEFT: membersCountLeft.days[3],
          MEMBERS_JOINED: membersCountJoined.days[3],
        },
        {
          Day: "Thursday",
          PAGEVIEWS: pageViews.days[4],
          MEMBERS_LEFT: membersCountLeft.days[4],
          MEMBERS_JOINED: membersCountJoined.days[4],
        },
        {
          Day: "Friday",
          PAGEVIEWS: pageViews.days[5],
          MEMBERS_LEFT: membersCountLeft.days[5],
          MEMBERS_JOINED: membersCountJoined.days[5],
        },
        {
          Day: "Saturday",
          PAGEVIEWS: pageViews.days[6],
          MEMBERS_LEFT: membersCountLeft.days[6],
          MEMBERS_JOINED: membersCountJoined.days[6],
        },
      ]);
    }
  }, [membersCountJoined, pageViews, membersCountLeft]);

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
          <th>MEMBERS LEFT</th>
          <th>MEMBERS JOINED</th>
        </tr>
      </thead>
      {pageViews && (
        <tbody>
          <tr>
            <td>{days[0].Day}</td>
            <td>{days[0].PAGEVIEWS}</td>
            <td>{days[0].MEMBERS_LEFT}</td>
            <td>{days[0].MEMBERS_JOINED}</td>
          </tr>
          <tr>
            <td>{days[1].Day}</td>
            <td>{days[1].PAGEVIEWS}</td>
            <td>{days[1].MEMBERS_LEFT}</td>
            <td>{days[1].MEMBERS_JOINED}</td>
          </tr>
          <tr>
            <td>{days[2].Day}</td>
            <td>{days[2].PAGEVIEWS}</td>
            <td>{days[2].MEMBERS_LEFT}</td>
            <td>{days[2].MEMBERS_JOINED}</td>
          </tr>
          <tr>
            <td>{days[3].Day}</td>
            <td>{days[3].PAGEVIEWS}</td>
            <td>{days[3].MEMBERS_LEFT}</td>
            <td>{days[3].MEMBERS_JOINED}</td>
          </tr>
          <tr>
            <td>{days[4].Day}</td>
            <td>{days[4].PAGEVIEWS}</td>
            <td>{days[4].MEMBERS_LEFT}</td>
            <td>{days[4].MEMBERS_JOINED}</td>
          </tr>
          <tr>
            <td>{days[5].Day}</td>
            <td>{days[5].PAGEVIEWS}</td>
            <td>{days[5].MEMBERS_LEFT}</td>
            <td>{days[5].MEMBERS_JOINED}</td>
          </tr>
          <tr>
            <td>{days[6].Day}</td>
            <td>{days[6].PAGEVIEWS}</td>
            <td>{days[6].MEMBERS_LEFT}</td>
            <td>{days[6].MEMBERS_JOINED}</td>
          </tr>
        </tbody>
      )}
    </TableContainer>
  );
};

export default DayOfWeek;
