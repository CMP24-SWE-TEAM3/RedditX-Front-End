import { Container, Paragraph, ImageContainer } from "./PostContent.styled";

/**
 * PostContent Component that is in the side of Post
 * @returns {React.Component} PostContent component
 */
const PostContent = () => {
  return (
    <Container>
      <Paragraph>
        Chinese government reportedly helps the world's biggest iPhone-maker
        fill in labor shortages by recruiting Communist Party members and
        veterans
      </Paragraph>
      <ImageContainer>
        {/* <img
          src="https://wallpapercave.com/wp/wp9247442.jpg"
          alt=""
        /> */}
        <img
          src="https://i.pinimg.com/originals/58/2d/96/582d96a1df2d94bb439af1594639ccfe.jpg"
          alt=""
        />
      </ImageContainer>
    </Container>
  );
};

export default PostContent;
