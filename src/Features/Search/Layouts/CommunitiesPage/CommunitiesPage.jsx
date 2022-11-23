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
  if (CommunityList.results) {
    return (
      <Container>
        <OuterContainer>
          <InnerContainer>
            <List>
              {CommunityList.results.map((Community) => (
                <CommunityItem
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
            </List>
          </InnerContainer>
        </OuterContainer>
      </Container>
    );
  }
};

export default CommunitiesPage;
