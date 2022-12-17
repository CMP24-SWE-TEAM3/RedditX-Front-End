import CategoryBar from "Features/User/Components/CategoryBar/CategoryBar";
import { Container, PostContainer } from "./Overview.styled";
import UserNoPosts from "Features/User/Components/UserNoPosts/UserNoPosts";
import { useUserID } from "Features/User/Contexts/UserIDProvider.js";

const Overview = () => {
  const { userID } = useUserID();

  return (
    <Container>
      <CategoryBar />
      <PostContainer>
        <UserNoPosts
          text={
            userID && `hmm... u/${userID.substring(3)} hasn't posted anything`
          }
        />
      </PostContainer>
    </Container>
  );
};

export default Overview;
