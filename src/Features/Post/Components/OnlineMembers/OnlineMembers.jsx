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
const OnlineMembers = () => {
  return (
    <Container>
      <OnlineMembersContainer>
        <OverlayTrigger
          placement={"bottom"}
          delay="200"
          overlay={<Tooltip>{`5 Members`}</Tooltip>}
        >
          <Members>
            <div>{5}</div>
            <p>Members</p>
          </Members>
        </OverlayTrigger>
      </OnlineMembersContainer>
      <OnlineMembersContainer>
        <OverlayTrigger
          placement={"bottom"}
          overlay={<Tooltip>{"6 Online"}</Tooltip>}
          delay="200"
        >
          <Online>
            <div>{6}</div>
            <p>Online</p>
          </Online>
        </OverlayTrigger>
      </OnlineMembersContainer>
    </Container>
  );
};

export default OnlineMembers;
