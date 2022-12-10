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
  CommentBodyContainer,
  CommentBodyInnerContainer,
  CommentBodyContent,
  DashedLine,
  CommentBodyInfoContainer,
  CommentBodyInfoInnerContainer,
  CommentedContainer,
  CommentedLink,
  Point,
  DaysLink,
  CommentContainer,
  CommentInnerContainer,
  ReplyShareContainer,
  ReplyShareButton,
  ThreeDotsButton,
} from "./UserComment.styled";
import { FaRegCommentAlt } from "react-icons/fa";
import {BiDotsHorizontalRounded} from "react-icons/bi"

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

  const CommentBodyInfo = ({ commented, commentContent }) => {
    return (
      <CommentBodyInfoContainer>
        <CommentBodyInfoInnerContainer>
          <CommentedContainer>
            <CommentedLink to="">{commented}</CommentedLink>
            <Point>1 point</Point>
            <Dot>.</Dot>
            <DaysLink to="#">3 days ago</DaysLink>
          </CommentedContainer>
          <div>
            <CommentContainer>
              <CommentInnerContainer>
                <p>{commentContent}</p>
              </CommentInnerContainer>
            </CommentContainer>
            <div>
              <ReplyShareContainer>
                <ReplyShareButton>Reply</ReplyShareButton>
                <ReplyShareButton>Share</ReplyShareButton>
                <ThreeDotsButton>
                  <span className="icon">
                    <BiDotsHorizontalRounded />
                  </span>
                </ThreeDotsButton>
              </ReplyShareContainer>
            </div>
          </div>
        </CommentBodyInfoInnerContainer>
      </CommentBodyInfoContainer>
    );
  };

  const CommentBody = ({ commented, commentContent }) => {
    return (
      <CommentBodyContainer>
        <CommentBodyInnerContainer>
          <CommentBodyContent>
            <DashedLine></DashedLine>
            <CommentBodyInfo commented={commented} commentContent={commentContent} />
          </CommentBodyContent>
        </CommentBodyInnerContainer>
      </CommentBodyContainer>
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
        <CommentBody commented="khaled-farahat" commentContent="Hello World" />
      </div>
    </div>
  );
};

export default UserComment;
