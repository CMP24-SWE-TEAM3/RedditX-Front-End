import PeopleCardItem from "../PeopleCardItem/PeopleCardItem";
import { PeopleContainer } from "./People.styled";
// Import api
// import axios from "API/axios";
// import useFetch from "Hooks/useFetch";
import logo from "../../Assets/download.jpg";
const PeopleList = [
  {
    avatar: logo,
    userID: "t5_imagepro",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Abdo",
    totalKarmas: 10,
  },
  {
    avatar: logo,
    userID: "t5_imagepro1",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Abdelrahman",
    totalKarmas: 3,
  },
  {
    avatar: logo,
    userID: "t5_imagepro2",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Ashraf",
    totalKarmas: 1,
  },
  {
    avatar: logo,
    userID: "t5_imagepro3",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Mohamed",
    totalKarmas: 21,
  },
  {
    avatar: logo,
    userID: "t5_imagepro4",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Elsayed",
    totalKarmas: 2100,
  },
];

/**
 * Component that contains the People Card Elements.
 *
 * @Component
 *
 * @returns {React.Component}
 */
const People = () => {
  // /*TODO: const*/ let [Pep, error, loading, reload] = useFetch({
  //   axiosInstance: axios,
  //   method: "GET",
  //   url: "/search?q='tesla motors'&page=4&count=10&limit=50&type='user'",
  //   requestConfig: {
  //     headers: {
  //       "Content-Language": "en-US",
  //     },
  //   },
  // });
  return (
    <PeopleContainer>
      <p className="title">People</p>

      {/* <PeopleCardItem />
      <PeopleCardItem />
      <PeopleCardItem />
      <PeopleCardItem /> */}
      {PeopleList.map((People) => (
        <PeopleCardItem
          avatar={People.avatar}
          key={People.userID}
          userID={People.userID}
          about={People.about}
          totalKarmas={People.totalKarmas}
          username={People.username}
        />
      ))}
    </PeopleContainer>
  );
};

export default People;
