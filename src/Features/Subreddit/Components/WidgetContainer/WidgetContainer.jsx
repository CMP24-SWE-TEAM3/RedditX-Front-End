import {
  BodyContainer,
  HeaderContainer,
  InnerContainer,
  InnerHeaderContainer,
  MainContainer
} from "./WidgetContainer.styled";

const Header = (props) => {
  return (
    <HeaderContainer>
      <InnerHeaderContainer>
        <h2>{props.headerText}</h2>
      </InnerHeaderContainer>
    </HeaderContainer>
  );
};

const WidgetContainer = (props) => {
  return (
    <MainContainer>
      <InnerContainer>
        <Header headerText={props.headerText} />
        <BodyContainer>
          {props.children}
        </BodyContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default WidgetContainer;
