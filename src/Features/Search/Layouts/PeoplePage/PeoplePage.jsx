import PeopleItem from "Features/Search/Components/PeopleItem/PeopleItem";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./PeoplePage.styled";

const PeoplePage = () => {
  return (
    <Container>
      <OuterContainer>
        <InnerContainer>
          <List>
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
            <PeopleItem />
          </List>
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
};

export default PeoplePage;
