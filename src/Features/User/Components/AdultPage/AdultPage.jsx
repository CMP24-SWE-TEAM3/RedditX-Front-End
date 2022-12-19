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
  StyledButton,
} from "./AdultPage.styled";
import nsfw from "Features/User/Assets/images/nsfw.png";

const AdultPage = () => {
  return (
    <PrivatePageContainer>
      <div>
        <InnerContainer>
          <StyledImg src={nsfw} alt="nsfw" />
          <StyledHeader>
            {`You must be 18+ to view this community`}
          </StyledHeader>
          <StyledText>
            You must be at least eighteen years old to view this content. Are
            you over eighteen and willing to see adult content?
          </StyledText>
          <ButtonsContainer>
            <StyledLink to="/">No</StyledLink>
            <StyledButton>Yes</StyledButton>
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

export default AdultPage;
