import CommunityItem from "Features/Search/Components/CommunityItem/CommunityItem";
import {
  Container,
  InnerContainer,
  List,
  OuterContainer,
} from "./CommunitiesPage.styled";
import CommImage from "../../Assets/CommunityImage.png";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
/**
 * Component that contains the CommunitiesPage .
 *
 * @Component
 * @returns {React.Component}
 */

const CommunitiesPage = ({ CommunityList, CommunitiesSub2 }) => {
  if (CommunitiesSub2 && CommunityList) {
    return (
      <Container>
        <OuterContainer>
          <InnerContainer>
            <List>
              {CommunityList.map((Community) => (
                <CommunityItem
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
            </List>
          </InnerContainer>
        </OuterContainer>
      </Container>
    );
  }
};

export default CommunitiesPage;
