import CommunityItem from "Features/Search/Components/CommunityItem/CommunityItem";
import {
  Container,
  InnerContainer,
  List,
  OuterContainer,
} from "./CommunitiesPage.styled";

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
