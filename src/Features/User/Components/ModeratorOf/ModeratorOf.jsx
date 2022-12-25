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

/**
 * widget to view you are moderator in which communities
 *
 * @returns {React.Component}
 */
const ModeratorOf = () => {
  /**
   * header of widget
   *
   * @returns {React.Component}
   */
  const Header = () => {
    return (
      <HeaderContainer>
        <HeaderInnerContainer>
          <h2>Moderator of these communities</h2>
        </HeaderInnerContainer>
      </HeaderContainer>
    );
  };

  /**
   * icon or picture of subreddit
   *
   * @returns {React.Component}
   */
  const CommunityIcon = () => {
    return (
      <CommunityIconContainer>
        <CommunityIconInnerContainer>
          <CommunityIconContent>r/</CommunityIconContent>
        </CommunityIconInnerContainer>
      </CommunityIconContainer>
    );
  };

  /**
   * element of subreddit
   *
   * @param {string} name -name of community
   * @param {number} members - number of members in community
   * @returns {React.Component}
   */
  const CommunityNameMembers = ({ name, members }) => {
    return (
      <CommunityNameMembersContainer>
        <CommunityNameLink>r/{name}</CommunityNameLink>
        <CommunityMembers>{members}</CommunityMembers>
      </CommunityNameMembersContainer>
    );
  };

  /**
   * join button
   *
   * @returns {React.Component}
   */
  const CommunityJoinButton = () => {
    return (
      <CommunityButtonContainer>
        <CommunityButton>join</CommunityButton>
      </CommunityButtonContainer>
    );
  };

  /**
   * community component
   *
   * @returns {React.Component}
   */
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

  /**
   * component to show communities
   *
   * @returns {React.Component}
   */
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
