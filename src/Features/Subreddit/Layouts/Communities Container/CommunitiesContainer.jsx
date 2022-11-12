import Community from "../../Components/Community/Community";
import data from "../../Services/data";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityHeaderSpan,
  CommunityOl,
} from "./CommunitiesContainer.styled";

/*TODO: const*/

/**
 * Component acts as a container for all communities of the community leaderboard page
 *
 * @Component
 *
 * @returns {React.Component}
 */
export default function Container({ com, subscribed }) {
  const communities = com.map((community, index) => {
    return (
      <li key={community.id.toString()}>
        <Community
          id={community.id}
          index={index + 1}
          img={community.coverImg}
          title={community.title}
          isJoined={subscribed.find((element) => {
            return element.id === community.id;
          })}
          stats={community.stats}
          description={community.description}
          rankChange={community.rankChange}
        />
      </li>
    );
  });
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH3> Today's Top Growing Communities</CommunityH3>
          <CommunityHeaderSpan>Rank Change</CommunityHeaderSpan>
        </CommunityHeader>
        <CommunityOl>{communities}</CommunityOl>
      </AllCommunities>
    </CommunityContainer>
  );
}
