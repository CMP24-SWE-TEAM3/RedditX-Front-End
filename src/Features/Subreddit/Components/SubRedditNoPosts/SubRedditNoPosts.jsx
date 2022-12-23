// import Container from "Features/Subreddit/Components/SubRedditNoPosts/SubRedditNoPosts.styled"
import {
  AddPostButton,
  AddPostContainer,
  AddPostInnerContainer,
  ArrowContainer,
  ArrowInnerContainer,
  BeFirst,
  Container,
  FakePostContainer,
  FakePostsContainer,
  Icon,
  NoPost,
  Space,
} from "./SubRedditNoPosts.styled";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
/**
 * component appear when there is no posts
 *
 * @returns {React.Component}
 */
const SubRedditNoPosts = () => {
  const n = 10;

  /**
   * outline of a post
   *
   * @returns {React.Component}
   */
  const FakePost = () => {
    return (
      <FakePostContainer>
        <ArrowContainer>
          <ArrowInnerContainer>
            <Icon>
              <TbArrowBigTop />
            </Icon>
            <Space />
            <Icon>
              <TbArrowBigDown />
            </Icon>
          </ArrowInnerContainer>
        </ArrowContainer>
      </FakePostContainer>
    );
  };

  return (
    <Container>
      <FakePostsContainer>
        {[...Array(n)].map((e, i) => (
          <FakePost key={i} />
        ))}
      </FakePostsContainer>
      <AddPostContainer>
        <AddPostInnerContainer>
          <NoPost>There are no posts in this subreddit</NoPost>
          <BeFirst>Be the first to till this fertile land.</BeFirst>
          <AddPostButton to="/submit/">Add a post</AddPostButton>
        </AddPostInnerContainer>
      </AddPostContainer>
    </Container>
  );
};

export default SubRedditNoPosts;
