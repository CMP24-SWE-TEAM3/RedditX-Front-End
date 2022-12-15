import TestingComponent from "Features/Search/TestingComponent";
// import CommunitiesPage from "./CommunitiesPage";
import { fireEvent, render, screen } from "@testing-library/react";
import Communities from "./Communities";

const communityList = {
  results: [
    {
      icon: "People_Image.jpg",
      _id: "t5_imagepro",
      description:
        "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
      membersCnt: 10,
    },
  ],
};
const CommunitiesSub2 = [];

it("check that communities are renders well", async () => {
  render(
    <TestingComponent>
      <Communities
        CommunityList={communityList}
        CommunitiesSub2={CommunitiesSub2}
      />
    </TestingComponent>
  );

  const listItemElements = await screen.findAllByTitle("comm");
  expect(listItemElements).not.toHaveLength(0);
});

// it("this is a test", () => {});
