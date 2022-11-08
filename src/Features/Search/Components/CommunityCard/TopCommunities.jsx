import { CommunityContainer } from "./TopCommunities.styled";
import { Link } from "react-router-dom";
import CommunityCardItem from "../CommunityCardItem/CommunityCardItem";
import logo from "../../Assets/download.jpg";
import CommImage from "../../Assets/CommunityImage.png";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

// const communityList = [
//   {
//     communityIcon: logo,
//     communityID: "t5_imagepro",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "GermanWW2photos",
//     membersCount: 10,
//   },
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro1",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "politics",
//     membersCount: 8.2,
//   },
//   {
//     communityIcon: logo,
//     communityID: "t5_imagepro2",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "RealMadrid",
//     membersCount: 1,
//   },
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro3",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "PSG",
//     membersCount: 21.5,
//   },
//   {
//     communityIcon: logo,
//     communityID: "t5_imagepro4",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "Barcalona",
//     membersCount: 2100.5,
//   },
// ];
/**
 * Component that contains the Community Card Elements.
 *
 * @Component
 * @returns {React.Component}
 */
const TopCommunities = () => {
  let [CommunityList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/communityList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  return (
    <CommunityContainer>
      <p className="title">Communities</p>
      {/* <CommunityCardItem />
      <CommunityCardItem />
      <CommunityCardItem />
      <CommunityCardItem />
      <CommunityCardItem /> */}
      {CommunityList.map((Community) => (
        <CommunityCardItem
          communityIcon={Community.communityIcon}
          key={Community.communityID}
          communityID={Community.communityID}
          communityDescription={Community.communityDescription}
          membersCount={Community.membersCount}
          communityName={Community.communityName}
        />
      ))}
      <Link to="/communities">
        <p className="more">See more communities</p>
      </Link>
    </CommunityContainer>
  );
};

export default TopCommunities;
