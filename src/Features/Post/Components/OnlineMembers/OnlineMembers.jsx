// Import components
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

// Import styled components
import {
  Container,
  Members,
  Online,
  OnlineMembersContainer,
} from "./OnlineMembers.styled";
/**
 * component that show number of members
 * and number of online members
 *
 * @returns {React.Component} Online Members component
 */
const OnlineMembers = ({ online, members }) => {
  return (
    <Container>
      <OnlineMembersContainer>
        <OverlayTrigger
          placement={"bottom"}
          delay="200"
          overlay={<Tooltip>{`${members} Members`}</Tooltip>}
        >
          <Members>
            <div>{members}</div>
            <p>Members</p>
          </Members>
        </OverlayTrigger>
      </OnlineMembersContainer>
      <OnlineMembersContainer>
        <OverlayTrigger
          placement={"bottom"}
          overlay={<Tooltip>{`${online} Online`}</Tooltip>}
          delay="200"
        >
          <Online>
            <div>{online}</div>
            <p>Online</p>
          </Online>
        </OverlayTrigger>
      </OnlineMembersContainer>
    </Container>
  );
};

export default OnlineMembers;
