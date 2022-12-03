import PeopleCardItem from "../PeopleCardItem/PeopleCardItem";
import { PeopleContainer } from "./People.styled";

/**
 * Component that contains the People Card Elements.
 *
 * @Component
 * @param {object} PeopleList -  contains the People
 * @param {object} PeopleFollow -  contains the People you are following
 * @returns {React.Component}
 */
const People = ({ PeopleList, PeopleFollow }) => {
  if (PeopleList.results) {
    // console.log(PeopleList.results);
    const peopleNumber = PeopleList.results.length;
    return (
      <PeopleContainer>
        <p className="title">People</p>
        {peopleNumber !== 0 &&
          PeopleList.results.slice(0, 5).map((People) => (
            <PeopleCardItem
              avatar={People.avatar}
              key={People._id}
              userID={People._id}
              about={People.about}
              totalKarmas={People.karma}
              username={People._id}
              isFollow={PeopleFollow.find((element) => {
                return element.id === People._id;
              })}
            />
          ))}
        {peopleNumber === 0 && <p className="NoResults">No results</p>}
      </PeopleContainer>
    );
  }
};

export default People;
