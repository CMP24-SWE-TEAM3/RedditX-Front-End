import CommunityItem from "Features/Search/Components/CommunityItem/CommunityItem";
import {
  Container,
  InnerContainer,
  List,
  OuterContainer,
} from "./CommunitiesPage.styled";
import CommImage from "../../Assets/CommunityImage.png";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
/**
 * Component that contains the CommunitiesPage .
 *
 * @Component
 * @returns {React.Component}
 */
// const communityList = [
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "GermanWW2photos",
//     membersCount: 10,
//   },
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro1",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "Football",
//     membersCount: 3,
//   },
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro2",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "RealMadrid",
//     membersCount: 1,
//   },
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro3",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "PSG",
//     membersCount: 21.5,
//   },
//   {
//     communityIcon: CommImage,
//     communityID: "t5_imagepro4",
//     communityDescription:
//       "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//     communityName: "Barcalona",
//     membersCount: 2100.5,
//   },
// ];
const CommunitiesPage = () => {
  let [CommunityList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/communityList",
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
            {CommunityList.map((Community) => (
              <CommunityItem
                communityIcon={Community.communityIcon}
                key={Community.communityID}
                communityID={Community.communityID}
                communityDescription={Community.communityDescription}
                membersCount={Community.membersCount}
                communityName={Community.communityName}
              />
            ))}
          </List>
        </InnerContainer>
      </OuterContainer>
    </Container>
  );
};

export default CommunitiesPage;
