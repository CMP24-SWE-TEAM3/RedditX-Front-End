import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useEffect, useState } from "react";
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
  const [memberCount, setMemberCount] = useState(0);
  const {community} = useSubReddit();

  useEffect(()=>{
    community && community.members && setMemberCount(community.members.length);
  },[community])

  // let members = community[0].memberCount;
  let onlineMembers = 5;
  return (
    <Container>
      { memberCount !== 0 && <OverlayTrigger
        placement={"bottom"}
        delay="200"
        overlay={memberCount && <Tooltip>{`${memberCount} Members`}</Tooltip>}
      >
        {memberCount !== 0 && <Members>
          <div>{ memberCount}</div>
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
