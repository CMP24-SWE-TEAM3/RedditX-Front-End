// import CommunityItem from "Features/explore/Components/CommunityPageItem/CommunityItem";
import CategoryTitle from "Components/CategoryTitle/CategoryTitle";
import CommunityItem from "Components/CommunityPageItem/CommunityItem";
import {
  Container,
  InnerContainer,
  OuterContainer,
} from "./Communities.styled";

const Communities = ({ CommunityList, CommunitiesSub2 }) => {
  if (CommunityList.results) {
    console.log(CommunityList);
    const communitiesNumber = CommunityList.results.length;
    return (
      <OuterContainer>
        <CategoryTitle isPosts={false} />
        <Container>
          <InnerContainer>
            {/* <CommunityItem /> */}
            {communitiesNumber !== 0 &&
              CommunityList.results.map((Community) => (
                <CommunityItem
                  communityIcon={Community.icon}
                  key={Community._id}
                  communityID={Community._id}
                  communityDescription={Community.description}
                  membersCount={Community.membersCnt}
                  communityName={Community._id}
                  isJoined={CommunitiesSub2.find((element) => {
                    return element.id === Community._id;
                  })}
                />
              ))}
          </InnerContainer>
        </Container>
      </OuterContainer>
    );
  }
};

export default Communities;