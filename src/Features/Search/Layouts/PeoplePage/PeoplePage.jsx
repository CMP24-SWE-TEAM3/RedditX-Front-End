import PeopleItem from "Features/Search/Components/PeopleItem/PeopleItem";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./PeoplePage.styled";
import PeopleImage from "../../Assets/People_Image.jpg";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

/**
 * Component that contains the PeoplePage .
 *
 * @Component
 * @returns {React.Component}
 */
const PeoplePage = () => {
  /*TODO: const*/ let [PeopleList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/PeopleList",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
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
              />
            ))}
          </List>
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
};

export default PeoplePage;
