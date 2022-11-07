import {
  BodyContainer,
  HeaderContainer,
  InnerContainer,
  InnerHeaderContainer,
  MainContainer
} from "./WidgetContainer.styled";

/**
 * container of widgets in subreddit
 * 
 * @param {string} headerText - text in header of widget
 * @param {React.Component} children - component inside this component
 * @returns {React.Component} CreatePost component
 */
const WidgetContainer = ({ headerText, children }) => {


  /**
   * header of widget
   * 
   * @param {string} text - text pf widget header
   * @returns {React.Component} CreatePost component
   */
  const Header = ({ text }) => {
    return (
      <HeaderContainer>
        <InnerHeaderContainer>
          <h2>{text}</h2>
        </InnerHeaderContainer>
      </HeaderContainer>
    );
  };


  return (
    <MainContainer>
      <InnerContainer>
        <Header headerText={headerText} />
        <BodyContainer>{children}</BodyContainer>
      </InnerContainer>
    </MainContainer>
  );
};

export default WidgetContainer;
