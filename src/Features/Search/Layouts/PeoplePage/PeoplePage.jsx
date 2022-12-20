import NotFound from "Features/Search/Components/NotFound/NotFound";
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
  if (PeopleList.results) {
    const PeopleNumber = PeopleList.results.length;
    return (
      <Container>
        <OuterContainer>
          <InnerContainer>
            <List>
              {PeopleNumber !== 0 &&
                PeopleFollow.following &&
                PeopleList.results.map((People) => (
                  <PeopleItem
                    avatar={People.avatar}
                    key={People._id}
                    userID={People._id}
                    about={People.about}
                    totalKarmas={People.karma}
                    username={People._id}
                    isFollow={PeopleFollow.following.find((element) => {
                      return element._id === People._id;
                    })}
                  />
                ))}
              {PeopleNumber === 0 && <NotFound />}
            </List>
          </InnerContainer>
        </OuterContainer>
      </Container>
    );
  }
};

export default PeoplePage;
