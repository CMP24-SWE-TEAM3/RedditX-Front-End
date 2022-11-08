import { shallow } from "enzyme";
import PostItem from "./Post";
const post = {
  attachments: [
    "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
    "People_Image.jpg",
  ],
  postID: "t3_63248d0sda12f459a937e2684fd",
  votesCount: 2.1,
  userName: "t2_North-Situation4034",
  communityID: "t5_imagepro",
  communityName: "WallStreetRiches",
  createdAt: "2022/02/15, 15:05:45",
  text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
  title: "This is a post title",
  nsfw: true,
  spoiler: false,
  flairID: "id1",
  flairText: "Hero",
  commentsNumber: 54,
};

describe("Post Component", () => {
  it("this is a test for Post Component", () => {
    expect(shallow(<PostItem post={post} key={1} />)).toMatchSnapshot();
  });
});
