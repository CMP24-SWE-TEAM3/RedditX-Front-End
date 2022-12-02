import {
  BodyContent,
  BodyContentHeader,
  BodyContentHeaderLayout,
  BodyText,
  BodyTextStyle,
  BodyTextStylePlace,
  CommentImage,
  CommentUserName,
  Container,
  FirstText,
  FirstTextStyle,
  ImageAlign,
  InnerBody,
  InnerBodyLayout,
  Time,
  GoThread,
} from "./CommentBody.styled";
import Moment from "react-moment";
// import Moment from "react-moment";
import CommentUserImage from "../../Assets/People_Image.jpg";
import PostFooter from "../PostFooter/PostFooter";
import { Link } from "react-router-dom";
/**
 * Component that render the CommentBody.
 *
 * @Component
 * @param {object} commentBody - contain commentBody
 * @returns {React.Component}
 */
const CommentBody = ({ commentBody }) => {
  if (commentBody) {
    return (
      <Container>
        <FirstText>
          <Link to="#">
            <FirstTextStyle>{commentBody.postContent}</FirstTextStyle>
          </Link>
        </FirstText>
        <InnerBody>
          <InnerBodyLayout>
            <ImageAlign>
              <Link to="#">
                <div>
                  {/* <CommentImage
                    src={require(`../../Assets/${commentBody.commentUserImage}`)}
                    alt="Comment User Image"
                  /> */}
                  <CommentImage
                    src={CommentUserImage}
                    alt="Comment User Image"
                  />
                </div>
              </Link>
            </ImageAlign>
            <BodyContent>
              <BodyContentHeader>
                <BodyContentHeaderLayout>
                  <CommentUserName>
                    <div>
                      {commentBody.userName && (
                        <Link to="#">{commentBody.userName.substring(3)}</Link>
                      )}
                    </div>
                  </CommentUserName>
                  <span className="break">·</span>
                  <Time>
                    {/* {commentBody.time} */}
                    <Moment fromNow>{commentBody.time}</Moment>
                  </Time>
                </BodyContentHeaderLayout>
              </BodyContentHeader>
              <BodyText>
                <BodyTextStyle>
                  <BodyTextStylePlace className="comment-content">
                    {commentBody.bodyContent}
                  </BodyTextStylePlace>
                </BodyTextStyle>
              </BodyText>
            </BodyContent>
          </InnerBodyLayout>
          <PostFooter postfooter={commentBody.postFooter} />
        </InnerBody>
        <GoThread href="#">Go to thread</GoThread>
      </Container>
    );
  }
};

export default CommentBody;
