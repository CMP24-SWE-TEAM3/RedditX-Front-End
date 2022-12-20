// import TopCommunities from "Features/explore/Components/CommunityCard/TopCommunities";
// import TopCommunities from "Features/explore/Components/CommunityCard/TopCommunities";
// import TopCommunities from "Components/CommunityCard/TopCommunities";
import CategoryTitle from "Components/CategoryTitle/CategoryTitle";
import TopCommunities from "Components/CommunityCard/TopCommunities";
import PostsList from "Components/PostsList/PostsList";
// import PostsList from "Features/explore/Components/PostsList/PostsList";
// import TopCommunities from "Features/Search/Components/CommunityCard/TopCommunities";
import { Cards, Layout, PostsPart } from "./Posts.styled";

const Posts = ({ CommunityList, communityListSub, PostList }) => {
  if (CommunityList) {
    return (
      <>
        <PostsPart>
          <CategoryTitle isPosts={true} />
          <PostsList PostList={PostList} />
        </PostsPart>
        <Cards>
          <Layout>
            <TopCommunities
              CommunityList={CommunityList}
              communityListSub={communityListSub}
            />
          </Layout>
        </Cards>
      </>
    );
  }
};

export default Posts;
