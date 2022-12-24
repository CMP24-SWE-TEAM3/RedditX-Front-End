import { CommunityContainer } from "./TopCommunities.styled";
import CommunityCardItem from "../CommunityCardItem/CommunityCardItem";
import community from "../../../Subreddit/Components/Community/Community";

const CommunityList = [
  {
    communityID: "1",
    communityDescription: "we are looking for a new community",
    membersCount: "4",
    communityName: "Cufe",
  },
  {
    communityID: "2",
    communityDescription: "we are looking for a new modal",
    membersCount: "1",
    communityName: "ASU",
  },
  {
    communityID: "3",
    communityDescription: "we are looking for a new school",
    membersCount: "1",
    communityName: "MCE",
  },
];
/**
 * Component that contains the community card elements (container for community card elements).
 *
 * @Component
 * @param {object} CommunityList -  contains the Community list elements
 * @param {object} CommunitiesSub2 -  contains the Community list elements that user subscribe
 * @returns {React.Component}
 */
const TopCommunities = () => {
  return (
    <CommunityContainer>
      <p className="title">Communities</p>
      {CommunityList.map((Community) => (
        <CommunityCardItem
          // communityIcon={Community.communityIcon}
          key={Community.communityID}
          communityID={Community.communityID}
          communityDescription={Community.communityDescription}
          membersCount={Community.membersCount}
          communityName={Community.communityName}
        />
      ))}
    </CommunityContainer>
  );
};

export default TopCommunities;
