import {
  CommunityContainer,
  CoverCommunity,
  Filter,
  RowBtn,
  SubBtn,
  ViewAllBtn,
} from "./CommunityCard.styled";
import { useNavigate } from "react-router-dom";
import CommunityCardItem from "Components/CommunityCardItem/CommunityCardItem";
import randomCategories from "Services/randomCategories";
import { Link } from "react-router-dom";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect } from "react";

/**
 * Component that links each  of community card item.
 *
 * @Component
 * @returns {React.Component}
 */
const CommunityCard = () => {
  // authorization's user
  const auth = useAuth();
  // Fetch communities
  // Call useFetchFunction hook to handle states: loading, error, data
  // Loading: Boolean to tell if the request has been sent, or it's still loading
  // Error: Contains error message when the request is failed
  // Data: the response data
  const [communityList, error, isLoading, fetchData] = useFetchFunction();
  useEffect(() => {
    randomCategories(fetchData, auth);
  }, []);

  const navigate = useNavigate();
  return (
    <CommunityContainer>
      <CoverCommunity>
        <Filter>
          <h2>
            <Link href={"https://www.reddit.com/subreddits/leaderboard/"}>
              Top
              <span>&nbsp;Gaming&nbsp;</span>
              Communities
            </Link>
          </h2>
        </Filter>
      </CoverCommunity>
      {communityList &&
        communityList.length !== 0 &&
        communityList.communities.map((community, index) => {
          return (
            <CommunityCardItem
              key={community.id}
              srIcon={community.icon}
              community={community.description}
              communityId={index + 1}
              onClick={() => navigate("/subreddit")}
            />
          );
        })}
      <ViewAllBtn>
        <button onClick={() => navigate("/category/*")}>View All</button>
      </ViewAllBtn>

      <RowBtn>
        <SubBtn>New You</SubBtn>
        <SubBtn>Gaming</SubBtn>
        <SubBtn>News</SubBtn>
        <SubBtn>Aww</SubBtn>
      </RowBtn>
    </CommunityContainer>
  );
};

export default CommunityCard;
