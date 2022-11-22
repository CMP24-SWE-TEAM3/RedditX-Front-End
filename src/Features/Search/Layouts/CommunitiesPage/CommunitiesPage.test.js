// import { shallow } from "enzyme";
// import CommunitiesPage from "./CommunitiesPage";
// describe("Communities Page", () => {
//   it("this is a test for Communities Page", () => {
//     expect(shallow(<CommunitiesPage />)).toMatchSnapshot();
//   });
// });
import TestingComponent from "Features/Search/TestingComponent";
import CommunitiesPage from "./CommunitiesPage";
import { fireEvent, render, screen } from "@testing-library/react";
const communityList = [
  {
    communityIcon: "download.jpg",
    communityID: "t5_imagepro",
    communityDescription:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    communityName: "GermanWW2photos",
    membersCount: 10,
  },
];
const CommunitiesSub2 = [
  {
    id: "1",
  },
  {
    id: "t5_imagepro1",
  },
  {
    id: "t5_imagepro",
  },
  {
    id: "t5_imagepro2",
  },
];

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
