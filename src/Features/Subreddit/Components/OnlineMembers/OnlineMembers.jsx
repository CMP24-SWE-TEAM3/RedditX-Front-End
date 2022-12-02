import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Container, Members, Online } from "./OnlineMembers.styled";
/**
 * component that show number of members 
 * and number of online members
 * 
 * @returns {React.Component} 
 */
const OnlineMembers = () => {
  const {community} = useSubReddit();
  // let members = community[0].memberCount;
  let onlineMembers = 5;
  return (
    <Container>
      {community && community.length && community[0].memberCount && <OverlayTrigger
        placement={"bottom"}
        delay="200"
        overlay={community && community.length && community[0].memberCount && <Tooltip>{`${community[0].memberCount} Members`}</Tooltip>}
      >
        {<Members>
          <div>{community && community.length && community[0].memberCount}</div>
          <p>Members</p>
        </Members>}
      </OverlayTrigger>}
      <OverlayTrigger
        placement={"bottom"}
        overlay={<Tooltip>{onlineMembers + " Online"}</Tooltip>}
        delay="200"
      >
        <Online>
          <div>{onlineMembers}</div>
          <p>Online</p>
        </Online>
      </OverlayTrigger>
      <div style={{ height: "20px", width: "0px" }}></div>
      <div style={{ height: "20px", width: "0px" }}></div>
    </Container>
  );
};

export default OnlineMembers;
