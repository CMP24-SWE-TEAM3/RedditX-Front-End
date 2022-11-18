import { CommunityContainer } from "./CommunityCard.styled";
import { useNavigate } from "react-router-dom";
import CommunityCardItem from "Components/CommunityCardItem/CommunityCardItem";
import randomCategories from "Services/randomCategories";
import { Link } from "react-router-dom";
import useFetch from "Hooks/useFetch";

/**
 * Component that links each  of community card item.
 *
 * @Component
 * @returns {React.Component}
 */
const TopCommunities = () => {
  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [communityList, error, isLoading, reFetch] = useFetch(
    randomCategories()
  );

  const navigate = useNavigate();
  return (
    <CommunityContainer>
      <div className={"cover"}>
        <div className={"filter"}>
          <h2>
            <Link href={"https://www.reddit.com/subreddits/leaderboard/"}>
              Top
              <span>&nbsp;Gaming&nbsp;</span>
              Communities
            </Link>
          </h2>
        </div>
      </div>
      {!isLoading &&
        communityList.map((community, index) => {
          return (
            <CommunityCardItem
              key={community.id}
              srIcon={community.srIcon}
              community={community.name}
              communityId={index + 1}
              onClick={() => navigate("/subreddit")}
            />
          );
        })}

      <button onClick={() => navigate("/category/*")} className={"view-all"}>
        View All
      </button>
      <div className={"row-but"}>
        <button className={"sub-but"}>New You</button>
        <button className={"sub-but"}>Gaming</button>
        <button className={"sub-but"}>News</button>
        <button className={"sub-but"}>Aww</button>
      </div>
    </CommunityContainer>
  );
};

export default TopCommunities;
