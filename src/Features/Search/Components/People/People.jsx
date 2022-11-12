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
  if (PeopleList && PeopleFollow) {
    return (
      <PeopleContainer>
        <p className="title">People</p>
        {PeopleList.map((People) => (
          <PeopleCardItem
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
      </PeopleContainer>
    );
  }
};

export default People;
