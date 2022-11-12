import { CommunityContainer } from "./TopCommunities.styled";
import { Link } from "react-router-dom";
import CommunityCardItem from "../CommunityCardItem/CommunityCardItem";

/**
 * Component that contains the Community Card Elements.
 *
 * @Component
 * @param {object} CommunityList -  contains the Community list elements
 * @param {object} CommunitiesSub2 -  contains the Community list elements that user subscribe
 * @returns {React.Component}
 */
const TopCommunities = ({ CommunityList, CommunitiesSub2 }) => {
  console.log(CommunitiesSub2);
  if (CommunitiesSub2 && CommunityList) {
    return (
      <CommunityContainer>
        <p className="title">Communities</p>
        {CommunityList.map((Community) => (
          <CommunityCardItem
            communityIcon={Community.communityIcon}
            key={Community.communityID}
            communityID={Community.communityID}
            communityDescription={Community.communityDescription}
            membersCount={Community.membersCount}
            communityName={Community.communityName}
            isJoined={CommunitiesSub2.find((element) => {
              return element.id === Community.communityID;
            })}
          />
        ))}
        <Link to="/search/communities">
          <p className="more" id="see-more">
            See more communities
          </p>
        </Link>
      </CommunityContainer>
    );
  }
};

export default TopCommunities;
