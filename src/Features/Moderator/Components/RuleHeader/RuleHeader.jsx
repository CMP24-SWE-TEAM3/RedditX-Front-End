import React from "react";
import { HeaderRule, RuleContainer } from "./RuleHeader.styed";
import { CgDanger } from "react-icons/cg";

const RuleHeader = () => {
  return (
    <RuleContainer>
      <HeaderRule>
        <div>
          Rules <CgDanger size={25} />
        </div>
        <div>
          These are rules that visitors must follow to participate. They can be
          used as reasons to report or ban posts, comments, and users.
          Communities can have a maximum of 15 rules.
        </div>
      </HeaderRule>
    </RuleContainer>
  );
};

export default RuleHeader;
