import {
  CommentHeaderContainer,
  CommentHeaderContent,
  CommentHeaderInnerContainer,
  CommentHeaderInfo,
  UserLink,
  PostTitleLink,
  CommentHeaderRoot,
  CommunityLink,
  Dot,
  PostedLink,
} from "./UserComment.styled";
import { FaRegCommentAlt } from "react-icons/fa";

const UserComment = () => {
  const CommentHeader = ({ user, title, community, posted }) => {
    return (
      <CommentHeaderContainer>
        <CommentHeaderInnerContainer>
          <CommentHeaderContent>
            <span className="icon">
              <FaRegCommentAlt />
            </span>
            <CommentHeaderInfo>
              <UserLink to="">{user}</UserLink>
              {` commented on `}
              <PostTitleLink to="#">{title}</PostTitleLink>
              <Dot>.</Dot>
              <CommentHeaderRoot>
                <CommunityLink>{`r/${community}`}</CommunityLink>
                <Dot>.</Dot>
                {`Posted by `}
                <PostedLink>{`u/${posted}`}</PostedLink>
              </CommentHeaderRoot>
            </CommentHeaderInfo>
          </CommentHeaderContent>
        </CommentHeaderInnerContainer>
      </CommentHeaderContainer>
    );
  };

  return (
    <div>
      <div>
        <CommentHeader
          user="khaled-farahat"
          title="title"
          community="Eln2aa4yn"
          posted="hamza"
        />
      </div>
    </div>
  );
};

export default UserComment;
