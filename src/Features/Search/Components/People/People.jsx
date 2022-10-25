import PeopleCardItem from "../PeopleCardItem/PeopleCardItem";
import { PeopleContainer } from "./People.styled";

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
