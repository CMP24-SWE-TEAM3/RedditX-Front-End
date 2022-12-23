import {
  PrivatePageContainer,
  InnerContainer,
  PrivateFooter,
  PrivateFooterInnerContainer,
} from "Features/Subreddit/Components/PrivatePage/PrivatePage.styled";
import {
  ButtonsContainer,
  StyledHeader,
  StyledImg,
  StyledLink,
  StyledText,
} from "./UserNotFound.styled";
import logo from "Features/User/Assets/images/snoo_thoughtful.png";

/**
 * page appear when this user is not found or blocked
 * 
 * @returns {React.Component}
 */
const UserNotFound = () => {
  return (
    <PrivatePageContainer>
      <div>
        <InnerContainer>
          <StyledImg src={logo} />
          <StyledHeader>
            {`Sorry, nobody on Reddit goes by that name.`}
          </StyledHeader>
          <StyledText>
            The person may have been banned or the username is incorrect
          </StyledText>
          <ButtonsContainer>
            <StyledLink to="/">Go Home</StyledLink>
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

export default UserNotFound;
