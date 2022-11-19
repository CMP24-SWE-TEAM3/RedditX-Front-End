// import Components
import { Container, ModalBodyContainer } from "./Post.styled";
import NavigationPost from "Features/Post/Components/NavigationPost/NavigationPost";

const Post = () => {
  return (
    <Container show={true}>
      <NavigationPost />
      <ModalBodyContainer>
        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
        commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam
        atque a dolores quisquam quisquam adipisci possimus laboriosam.
        Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod.
        Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni
        incidunt dolore amet atque facilis ipsum deleniti rem!
      </ModalBodyContainer>
    </Container>
  );
};

export default Post;
