import { CommunityContainer } from "./TopCommunities.styled";
import { Link } from "react-router-dom";
import CommunityCardItem from "../CommunityCardItemExplore/CommunityCardItemExplore";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
/**
 * Component that contains the Community Card Elements.
 *
 * @Component
 * @returns {React.Component}
 */
const TopCommunities = ({ CommunityList, CommunitiesSub2 }) => {
  // let [CommunityList, error, loading, reload] = useFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "http://localhost:8000/communityList",
  //   requestConfig: {
  //     headers: {
  //       "Content-Language": "en-US",
  //     },
  //   },
  // });
  if (CommunityList.results) {
    const arr = CommunityList.results;
    console.log(arr);
    const communitiesNumber = CommunityList.results.length;
    return (
      <CommunityContainer>
        <p className="title">Top Communities</p>

        {communitiesNumber !== 0 &&
          CommunityList.results.slice(0, 8).map((Community) => (
            <CommunityCardItem
              communityIcon={Community.icon}
              key={Community._id}
              communityID={Community._id}
              communityDescription={Community.description}
              membersCount={Community.membersCnt}
              communityName={Community._id}
              isJoined={CommunitiesSub2.find((element) => {
                return element.id === Community._id;
              })}
            />
          ))}
        {communitiesNumber === 0 && <p className="NoResults">No results</p>}
        {/* <Link to="#">
        <p className="more">See more</p>
      </Link> */}
        {communitiesNumber !== 0 && (
          <Link to="/explore/Communities">
            <p className="more">See more</p>
          </Link>
        )}
      </CommunityContainer>
    );
  }
};

export default TopCommunities;