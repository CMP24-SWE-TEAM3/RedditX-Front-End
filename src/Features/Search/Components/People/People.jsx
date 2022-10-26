import PeopleCardItem from "../PeopleCardItem/PeopleCardItem";
import { PeopleContainer } from "./People.styled";

/**
 * Component that contains the People Card Elements.
 *
 * @Component
 * @returns {React.Component}
 */
const People = () => {
  return (
    <PeopleContainer>
      <p className="title">People</p>

      <PeopleCardItem />
      <PeopleCardItem />
      <PeopleCardItem />
      <PeopleCardItem />
    </PeopleContainer>
  );
};

export default People;
