import CommunityItem from "Features/Search/Components/CommunityItem/CommunityItem";
import {
  Container,
  InnerContainer,
  List,
  OuterContainer,
} from "./CommunitiesPage.styled";
/**
 * Component that contains the CommunitiesPage .
 *
 * @Component
 * @returns {React.Component}
 */
const CommunitiesPage = () => {
  return (
    <Container>
      <OuterContainer>
        <InnerContainer>
          <List>
            <CommunityItem />
            <CommunityItem />
            <CommunityItem />
            <CommunityItem />
            <CommunityItem />
          </List>
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
};

export default CommunitiesPage;
