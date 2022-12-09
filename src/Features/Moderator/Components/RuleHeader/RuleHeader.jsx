import React from "react";
import { HeaderRule, RuleContainer, Danger, Note } from "./RuleHeader.styed";
import { CgDanger } from "react-icons/cg";
import { OverlayTrigger } from "react-bootstrap";
import Tooltip from "react-bootstrap/Tooltip";

const RuleHeader = ({ showNote }) => {
  return (
    <RuleContainer>
      <HeaderRule>
        <div>
          Rules
          <Danger>
            <CgDanger size={22} />
          </Danger>
        </div>
        <Note show={showNote}>
          These are rules that visitors must follow to participate. They can be
          used as reasons to report or ban posts, comments, and users.
          Communities can have a maximum of 15 rules.
        </Note>
      </HeaderRule>
    </RuleContainer>
  );
};

export default RuleHeader;

// <span>
//           <OverlayTrigger
//               key={"top"}
//               placement={"top"}
//               overlay={<Tooltip id="tooltip-top">Learn more</Tooltip>}
//           >
//             <CgDanger size={25} />
//           </OverlayTrigger>
//           </span>
