import PeopleItem from "Features/Search/Components/PeopleItem/PeopleItem";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./PeoplePage.styled";

/**
 * Component that contains the PeoplePage .
 *
 * @Component
 * @param {object} PeopleList -  contains the People
 * @param {object} PeopleFollow -  contains the People you are following
 * @returns {React.Component}
 */
const PeoplePage = ({ PeopleList, PeopleFollow }) => {
  if (PeopleList && PeopleFollow) {
    return (
      <Container>
        <OuterContainer>
          <InnerContainer>
            <List>
              {PeopleList.map((People) => (
                <PeopleItem
                  avatar={People.avatar}
                  key={People.userID}
                  userID={People.userID}
                  about={People.about}
                  totalKarmas={People.totalKarmas}
                  username={People.username}
                  isFollow={PeopleFollow.find((element) => {
                    return element.id === People.userID;
                  })}
                />
              ))}
            </List>
          </InnerContainer>
        </OuterContainer>
      </Container>
    );
  }
};

export default PeoplePage;
