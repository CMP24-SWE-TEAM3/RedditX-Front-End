import {
  CommunitiesContainer,
  Container,
  HeaderContainer,
  HeaderInnerContainer,
  CommunityContainer,
  CommunityInnerContainer,
  CommunityIconContainer,
  CommunityIconInnerContainer,
  CommunityIconContent,
  CommunityNameMembersContainer,
  CommunityNameLink,
  CommunityMembers,
  CommunityButtonContainer,
  CommunityButton,
} from "./ModeratorOf.styled";

const ModeratorOf = () => {
  const Header = () => {
    return (
      <HeaderContainer>
        <HeaderInnerContainer>
          <h2>Moderator of these communities</h2>
        </HeaderInnerContainer>
      </HeaderContainer>
    );
  };

  const CommunityIcon = () => {
    return (
      <CommunityIconContainer>
        <CommunityIconInnerContainer>
          <CommunityIconContent>r/</CommunityIconContent>
        </CommunityIconInnerContainer>
      </CommunityIconContainer>
    );
  };

  const CommunityNameMembers = ({ name, members }) => {
    return (
      <CommunityNameMembersContainer>
        <CommunityNameLink>r/{name}</CommunityNameLink>
        <CommunityMembers>{members}</CommunityMembers>
      </CommunityNameMembersContainer>
    );
  };

  const CommunityJoinButton = () => {
    return (
      <CommunityButtonContainer>
        <CommunityButton>join</CommunityButton>
      </CommunityButtonContainer>
    );
  };

  const Community = () => {
    return (
      <CommunityContainer>
        <CommunityInnerContainer>
          <CommunityIcon />
          <CommunityNameMembers name="reactjs" members="1.2M members" />
          <CommunityJoinButton />
        </CommunityInnerContainer>
      </CommunityContainer>
    );
  };

  const Communities = () => {
    return (
      <CommunitiesContainer>
        <Community />
      </CommunitiesContainer>
    );
  };

  return (
    <Container>
      <Header />
      <Communities />
    </Container>
  );
};

export default ModeratorOf;
