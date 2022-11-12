import communityIndex from "../../Services/communityIndex";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH1,
  ContentDiv,
  ContentItem,
  ContentA,
} from "./IndexContainer.styled";


/**
 * Component acts as a container for all communities of the Community Indexing Page
 * @Component
 * @returns {React.Component}
 */
export default function IndexContainer() {
  const communities = communityIndex.map((community, index) => {
    return (
        <ContentItem>
          <ContentA>{community}</ContentA>
        </ContentItem>
    );
  });
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH1> Browse communities starting with 'A'</CommunityH1>
        </CommunityHeader>
        <ContentDiv>{communities}</ContentDiv>
      </AllCommunities>
    </CommunityContainer>
  );
}
