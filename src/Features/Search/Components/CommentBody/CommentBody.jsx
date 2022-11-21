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
  function nFormatter(num, digits) {
    const lookup = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup
      .slice()
      .reverse()
      .find(function (item) {
        return num >= item.value;
      });
    return item
      ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
      : "0";
  }
  let x = nFormatter(9910, 1);
  console.log(x);
  if (commentBody) {
    return (
      <Container>
        <FirstText>
          <Link to="#">
            <FirstTextStyle>{commentBody.postContent}</FirstTextStyle>
            {/* <Moment fromNow>2021/02/15, 15:05:45</Moment> */}
          </Link>
        </FirstText>
        <InnerBody>
          <InnerBodyLayout>
            <ImageAlign>
              <Link to="#">
                <div>
                  <CommentImage
                    src={require(`../../Assets/${commentBody.commentUserImage}`)}
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
                      <Link to="#">{commentBody.userName}</Link>
                    </div>
                  </CommentUserName>
                  <span className="break">·</span>
                  <Time>{commentBody.time}</Time>
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
          <PostFooter />
        </InnerBody>
        <GoThread href="#">Go to thread</GoThread>
      </Container>
    );
  }
};

export default CommentBody;
