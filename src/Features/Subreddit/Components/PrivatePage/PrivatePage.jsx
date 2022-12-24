import {
  PrivatePageContainer,
  InnerContainer,
  StyledKey,
  StyledHeader,
  CommunityDescContainer,
  CommunityDescInnerContainer,
  ModContainer,
  ButtonsDiv,
  ReqToJoinButton,
  MessageMod,
  Browse,
  PrivateFooter,
  PrivateFooterInnerContainer,
} from "./PrivatePage.styled";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import RequestMods from "../RequestMods/RequestMods";
import { useState } from "react";

/**
 * page appear when user try to access private subreddit
 * and he is not a member
 *
 * @returns {React.Component}
 */
const PrivatePage = () => {
  const [modalShow, setModalShow] = useState(false);
  const { communityID } = useSubRedditID();
  const { community } = useSubReddit();

  function requestJoinHandler() {
    setModalShow(true);
  }

  /**
   * have description of community
   *
   * @returns {React.Component}
   */
  const CommunityDesc = () => {
    return (
      <CommunityDescContainer>
        {communityID && (
          <StyledHeader>{`r/${communityID.substring(3)} `}</StyledHeader>
        )}
        <CommunityDescInnerContainer>
          {community && community.description && (
            <div>{community.description}</div>
          )}
          {community && !community.description && communityID && (
            <div>{`Hello to ${communityID.substring(3)} `}</div>
          )}
        </CommunityDescInnerContainer>
      </CommunityDescContainer>
    );
  };

  /**
   * button to request join
   *
   * @returns {React.Component}
   */
  const Buttons = () => {
    return (
      <ButtonsDiv>
        <ReqToJoinButton onClick={requestJoinHandler}>
          Request to join
        </ReqToJoinButton>
        <MessageMod to="#">Message Mods</MessageMod>
        <Browse>Browse Reddit</Browse>
      </ButtonsDiv>
    );
  };

  return (
    <PrivatePageContainer>
      <div>
        <InnerContainer>
          <div>
            <StyledKey />
          </div>

          {communityID && (
            <StyledHeader>{`r/${communityID.substring(3)} 
              is a private community`}</StyledHeader>
          )}
          <CommunityDesc />
          {communityID && (
            <ModContainer>
              {`The moderators of r/${communityID.substring(
                3
              )} have set this community as private.`}
              <br />
              {`Only approved members can view and take part in its discussions.`}
            </ModContainer>
          )}
          <Buttons />
        </InnerContainer>
      </div>
      <PrivateFooter>
        <PrivateFooterInnerContainer>
          {`Use of this site constitutes acceptance of our User Agreement and Privacy Policy. 
          ©2022 reddit inc. All rights reserved. 
          REDDIT and the ALIEN Logo are registered trademarks of reddit inc.`}
        </PrivateFooterInnerContainer>
      </PrivateFooter>
      <RequestMods
        modalShow={modalShow}
        hide={() => setModalShow(false)}
        isPriv={true}
        onApply=""
      />
    </PrivatePageContainer>
  );
};

export default PrivatePage;
