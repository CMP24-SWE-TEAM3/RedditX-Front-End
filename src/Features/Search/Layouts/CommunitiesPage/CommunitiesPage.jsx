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
import NotFound from "Features/Search/Components/NotFound/NotFound";
// import NotFound from "Pages/NotFound/NotFound";
/**
 * Component that contains the CommunitiesPage .
 *
 * @Component
 * @returns {React.Component}
 */

const CommunitiesPage = ({ CommunityList, CommunitiesSub2 }) => {
  if (CommunityList.results && CommunitiesSub2) {
    const communitiesNumber = CommunityList.results.length;
    return (
      <Container>
        <OuterContainer>
          <InnerContainer>
            <List>
              {communitiesNumber !== 0 &&
                CommunityList &&
                CommunitiesSub2 &&
                CommunityList.results.map((Community) => (
                  <CommunityItem
                    communityIcon={Community.icon}
                    key={Community._id}
                    communityID={Community._id}
                    communityDescription={Community.description}
                    membersCount={Community.membersCnt}
                    communityName={Community._id}
                    isJoined={CommunitiesSub2.communities.find((element) => {
                      return element._id === Community._id;
                    })}
                  />
                ))}
              {communitiesNumber === 0 && <NotFound />}
            </List>
          </InnerContainer>
        </OuterContainer>
      </Container>
    );
  }
};

export default CommunitiesPage;
