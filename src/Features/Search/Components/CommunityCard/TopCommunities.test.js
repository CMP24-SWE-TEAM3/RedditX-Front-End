import TopCommunities from "./TopCommunities";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";

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
describe("TopCommunities component", () => {
  it('renders "Communities" in title', async () => {
    render(
      <TestingComponent>
        <TopCommunities
          CommunityList={communityList}
          CommunitiesSub2={CommunitiesSub2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Communities");
    expect(outputElement).toBeInTheDocument();
  });
  it('renders "See More Communities" in Card', async () => {
    render(
      <TestingComponent>
        <TopCommunities
          CommunityList={communityList}
          CommunitiesSub2={CommunitiesSub2}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("See more communities");
    expect(outputElement).toBeInTheDocument();
  });
  it("check that communities are renders well", async () => {
    render(
      <TestingComponent>
        <TopCommunities
          CommunityList={communityList}
          CommunitiesSub2={CommunitiesSub2}
        />
      </TestingComponent>
    );

    const listItemElements = await screen.findAllByTitle("comm");
    expect(listItemElements).not.toHaveLength(0);
  });
});
// it("this is a test", () => {});
