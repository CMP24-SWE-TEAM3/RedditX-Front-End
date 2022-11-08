import { shallow } from "enzyme";
import PostHeader from "./PostHeader";
const postHeader = {
  headerImage: "People_Image.jpg",
  communityName: "communityName",
  userName: "userName",
  time: "5 days ago",
  flair: {
    flairText: " post.flairText",
    flairColor: "green",
    flairBackgroundColor: "red",
  },
};
describe("Post Header", () => {
  it("this is a test for Post Header", () => {
    expect(shallow(<PostHeader postheader={postHeader} />)).toMatchSnapshot();
  });
});
