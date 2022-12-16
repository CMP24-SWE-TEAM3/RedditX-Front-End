import { Container, Comment, MyDropdown } from "./PostFooter.styled";

import { TfiComment } from "react-icons/tfi";
import { VscGift } from "react-icons/vsc";
import { IoMdShareAlt } from "react-icons/io";
import { TbBadge } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";

import { hidePost } from "Features/Post/Services/postActions";
import useFetchFunction from "Hooks/useFetchFunction";

import { useAuth } from "Features/Authentication/Contexts/Authentication";
import submitSpam from "Features/Post/Services/submitSpam";

/**
 * PostFooter Component that is in the side of Post
 * @returns {React.Component} PostFooter component
 */
const PostFooter = ({ post, setMakeHidden }) => {
  const auth = useAuth();

  /**
   * Custom hook
   */
  const [data, error, isLoading, dataFetch] = useFetchFunction();

  const handleHide = () => {
    setMakeHidden(true);
    hidePost(
      dataFetch,
      {
        linkID: `t3_${post._id}`,
      },
      auth.getToken()
    );
  };
  const handleSpam = () => {
    submitSpam(
      dataFetch,
      {
        linkID: `t3_${post._id}`,
        spamText: "I found that this content is showing violence",
        spamType: "violent content",
      },
      auth
    );
  };
  return (
    <Container>
      <Comment onClick={(event) => {}}>
        <TfiComment /> {post.commentsNumber} Comments
      </Comment>
      <Comment
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <VscGift /> Award
      </Comment>
      <Comment
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <IoMdShareAlt /> Share
      </Comment>
      <Comment
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <TbBadge /> Save
      </Comment>
      <Comment
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <MyDropdown className="d-inline mx-2" autoClose="outside">
          <MyDropdown.Toggle id="dropdown-autoclose-outside">
            <HiOutlineDotsHorizontal />
          </MyDropdown.Toggle>

          <MyDropdown.Menu>
            <MyDropdown.Item href="#">
              <span onClick={handleHide}>
                <BiHide /> Hide
              </span>
            </MyDropdown.Item>
            <MyDropdown.Item href="#">
              <span onClick={handleSpam}>
                <FiFlag /> Report
              </span>
            </MyDropdown.Item>
          </MyDropdown.Menu>
        </MyDropdown>
      </Comment>
    </Container>
  );
};

export default PostFooter;
