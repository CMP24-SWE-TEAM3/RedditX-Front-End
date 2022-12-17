// import Container from "Features/Subreddit/Components/SubRedditNoPosts/SubRedditNoPosts.styled"
import {
  AddPostContainer,
  AddPostInnerContainer,
  ArrowContainer,
  ArrowInnerContainer,
  Container,
  FakePostContainer,
  FakePostsContainer,
  Icon,
  NoPost,
  Space,
} from "./UserNoPosts.styled";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
/**
 * component appear when there is no posts
 *
 * @returns {React.Component}
 */
const UserNoPosts = ({ text }) => {
  const n = 10;

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
          <NoPost>{text}</NoPost>
        </AddPostInnerContainer>
      </AddPostContainer>
    </Container>
  );
};

export default UserNoPosts;
