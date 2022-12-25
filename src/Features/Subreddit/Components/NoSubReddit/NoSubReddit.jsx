import {
  PrivatePageContainer,
  InnerContainer,
  PrivateFooter,
  PrivateFooterInnerContainer,
} from "../PrivatePage/PrivatePage.styled";
import {
  ButtonsContainer,
  StyledButton,
  StyledHeader,
  StyledImg,
  StyledLink,
  StyledText,
} from "./NoSubReddit.styled";

/**
 *page appear when id does not exist
 *
 * @returns {React.Component}
 */
const NoSubReddit = () => {
  return (
    <PrivatePageContainer>
      <div>
        <InnerContainer>
          <StyledImg />
          <StyledHeader>
            {`Sorry, there aren’t any communities on Reddit with that name`}
          </StyledHeader>
          <StyledText>
            This community may have been banned or the community name is
            incorrect.
          </StyledText>
          <ButtonsContainer>
            <StyledButton>Create Community</StyledButton>
            <StyledLink>Go Home</StyledLink>
          </ButtonsContainer>
        </InnerContainer>
      </div>
      <PrivateFooter>
        <PrivateFooterInnerContainer>
          {`Use of this site constitutes acceptance of our User Agreement and Privacy Policy. 
          ©2022 reddit inc. All rights reserved. 
          REDDIT and the ALIEN Logo are registered trademarks of reddit inc.`}
        </PrivateFooterInnerContainer>
      </PrivateFooter>
    </PrivatePageContainer>
  );
};

export default NoSubReddit;
