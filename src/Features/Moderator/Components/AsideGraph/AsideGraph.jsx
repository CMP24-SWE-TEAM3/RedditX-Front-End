import {
  AsideContent,
  JoinedBtn,
  JoinedCointainer,
  ChildContainer,
  Content,
  TextContainer,
  Text,
} from "./AsideGraph.styled";

/**
 * Component that displays a side bar on traffic states
 * @returns {React.Component}
 */
const AsideGraph = () => {
  return (
    <AsideContent>
      <JoinedBtn>
        <JoinedCointainer>
          <ChildContainer>
            <Content colorText={true} />
          </ChildContainer>
          <TextContainer>
            <Text>Joined</Text>
          </TextContainer>
        </JoinedCointainer>
      </JoinedBtn>
      <JoinedBtn>
        <JoinedCointainer>
          <ChildContainer>
            <Content colorText={false} />
          </ChildContainer>
          <TextContainer>
            <Text>Left</Text>
          </TextContainer>
        </JoinedCointainer>
      </JoinedBtn>
    </AsideContent>
  );
};
export default AsideGraph;
