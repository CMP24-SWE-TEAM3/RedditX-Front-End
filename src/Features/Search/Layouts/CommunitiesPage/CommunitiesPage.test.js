import TestingComponent from "Features/Search/TestingComponent";
import CommunitiesPage from "./CommunitiesPage";
import { fireEvent, render, screen } from "@testing-library/react";

// const communityList = {
//   results: [
//     {
//       icon: "People_Image.jpg",
//       _id: "t5_imagepro",
//       description:
//         "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
//       membersCnt: 10,
//     },
//   ],
// };
// const CommunitiesSub2 = [];
const communityList = {
  results: [
    {
      _id: "t5_Local Community2",
      banner: "default-banner.jpg",
      icon: "default-icon.jpg",
      membersCnt: 1,
      isDeleted: false,
      createdAt: "2022-12-20T13:44:39.844Z",
      rank: 0,
      trendPoints: 0,
      pageViewsPerDay: [0, 0, 6230, 1571, 965, 113, 0],
      pageViewsPerMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8879],
      joinedPerDay: [0, 0, 2, 0, 0, 0, 0],
      joinedPerMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      leftPerDay: [0, 0, 2, 0, 0, 0, 0],
      leftPerMonth: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
      category: "Sports",
      description: "A sports one",
    },
  ],
};
const CommunitiesSub2 = {
  status: "success",
  communities: [
    {
      _id: "t5_7asebb kedaa",
      icon: "default-icon.jpg",
      membersCnt: 1,
    },
  ],
};
it("check that communities are renders well", async () => {
  render(
    <TestingComponent>
      <CommunitiesPage
        CommunityList={communityList}
        CommunitiesSub2={CommunitiesSub2}
      />
    </TestingComponent>
  );

  const listItemElements = await screen.findAllByTitle("comm");
  expect(listItemElements).not.toHaveLength(0);
});

// it("this is a test", () => {});
// test
