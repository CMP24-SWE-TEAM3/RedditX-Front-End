import PostItem from "../Post/Post";
import { ContainerPostsList } from "./PostsList.styled";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";

// const posts = [
//   {
//     id: "e1",
//     postHeader: {
//       headerImage: "../../Assets/CommunityImage.png",
//       communityName: "WallStreetRiches",
//       userName: "Old_Salamander_7479",
//       time: "5 days ago",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//     },
//     postBody: {
//       bodyText:
//         " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//       bodyImage:
//         "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//     },
//     PostFooter: {
//       upVotes: "2.1k",
//       Comments: "2.1k",
//     },
//   },
//   {
//     id: "e2",
//     postHeader: {
//       headerImage: "../../Assets/CommunityImage.png",
//       communityName: "WallStreetRiches",
//       userName: "Old_Salamander_7479",
//       time: "5 days ago",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//     },
//     postBody: {
//       bodyText:
//         " John  Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//       bodyImage:
//         "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//     },
//     PostFooter: {
//       upVotes: "2.1k",
//       Comments: "2.1k",
//     },
//   },
//   {
//     id: "e3",
//     postHeader: {
//       headerImage: "../../Assets/CommunityImage.png",
//       communityName: "WallStreetRiches",
//       userName: "Old_Salamander_7479",
//       time: "5 days ago",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//     },
//     postBody: {
//       bodyText:
//         " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//       bodyImage:
//         "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//     },
//     PostFooter: {
//       upVotes: "2.1k",
//       Comments: "2.1k",
//     },
//   },
//   {
//     id: "e4",
//     postHeader: {
//       headerImage: "../../Assets/CommunityImage.png",
//       communityName: "WallStreetRiches",
//       userName: "Old_Salamander_7479",
//       time: "5 days ago",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//     },
//     postBody: {
//       bodyText:
//         " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//       flair: {
//         flairText: "ali",
//         flairColor: "green",
//         flairBackgroundColor: "red",
//       },
//       bodyImage:
//         "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//     },
//     PostFooter: {
//       upVotes: "2.1k",
//       Comments: "2.1k",
//     },
//   },
// ];
// const postss = [
//   {
//     attachments: [
//       "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//       "photo1.jpg",
//     ],
//     postID: "t3_63248d0sda12f459a937e2684fd",
//     votesCount: 2.1,
//     userName: "t2_North-Situation4034",
//     communityID: "t5_imagepro",
//     communityName: "WallStreetRiches",
//     createdAt: "2022/02/15, 15:05:45",
//     text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//     title: "This is a post title",
//     nsfw: true,
//     spoiler: false,
//     flairID: "id1",
//     flairText: "Hero",
//     commentsNumber: 54,
//   },
//   {
//     attachments: [
//       "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//       "photo1.jpg",
//     ],
//     postID: "t3_63248dvf012hhf459a937e2684fd",
//     votesCount: 2.1,
//     userName: "t2_North-Situation4034",
//     communityID: "t5_imagepro",
//     communityName: "WallStreetRiches",
//     createdAt: "2022/02/15, 15:05:45",
//     text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//     title: "This is a post title",
//     nsfw: true,
//     spoiler: false,
//     flairID: "id1",
//     flairText: "Hero",
//     commentsNumber: 54,
//   },
//   {
//     attachments: [
//       "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//       "photo1.jpg",
//     ],
//     postID: "t3_63248d012hhf459a937e26asd84fd",
//     votesCount: 2.1,
//     userName: "t2_North-Situation4034",
//     communityID: "t5_imagepro",
//     communityName: "WallStreetRiches",
//     createdAt: "2022/02/15, 15:05:45",
//     text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//     title: "This is a post title",
//     nsfw: true,
//     spoiler: false,
//     flairID: "id1",
//     flairText: "Hero",
//     commentsNumber: 54,
//   },
//   {
//     attachments: [
//       "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//       "photo1.jpg",
//     ],
//     postID: "t3_63248d012hhf45vds9a937e2684fd",
//     votesCount: 2.1,
//     userName: "t2_North-Situation4034",
//     communityID: "t5_imagepro",
//     communityName: "WallStreetRiches",
//     createdAt: "2022/02/15, 15:05:45",
//     text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//     title: "This is a post title",
//     nsfw: true,
//     spoiler: false,
//     flairID: "id1",
//     flairText: "Hero",
//     commentsNumber: 54,
//   },
//   {
//     attachments: [
//       "https://b.thumbs.redditmedia.com/uZL7ZnkEs4PmMcP_kJ5fSqGRBMKJ1hvjIpYaiT1OhHM.jpg",
//       "photo1.jpg",
//     ],
//     postID: "t3_63248d012hhfsdf459a937e2684fd",
//     votesCount: 2.1,
//     userName: "t2_North-Situation4034",
//     communityID: "t5_imagepro",
//     communityName: "WallStreetRiches",
//     createdAt: "2022/02/15, 15:05:45",
//     text: " John Oliver Refers to NFL’s ‘Monday Night Football’ as“Primetime Programming Where People Kill Themselves forEntertainment” ",
//     title: "This is a post title",
//     nsfw: true,
//     spoiler: false,
//     flairID: "id1",
//     flairText: "Hero",
//     commentsNumber: 54,
//   },
// ];
/**
 * Component that contains the Postslist component and the PostslistItems.
 *
 * @Component
 * @param {String} type -  the type of sort
 * @returns {React.Component}
 */
const PostsList = ({ type }) => {
  // Fetch posts
  // const query = "tesla motors";
  let [PostList, error, loading, reload] = useFetch({
    axiosInstance: axios,
    method: "GET",
    url: "http://localhost:8000/posts",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
    },
  });
  return (
    <ContainerPostsList>
      <div className="Posts-List">
        <div className="Sub-List">
          {PostList.map((post) => (
            <PostItem post={post} key={post.postID} />
          ))}
        </div>
      </div>
    </ContainerPostsList>
  );
};

export default PostsList;
