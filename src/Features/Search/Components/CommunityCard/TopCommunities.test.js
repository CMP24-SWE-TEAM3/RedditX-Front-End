// import { shallow } from "enzyme";
import TopCommunities from "./TopCommunities";
// describe("Top Communities", () => {
//   it("this is a test for Top Communities", () => {
//     expect(shallow(<TopCommunities />)).toMatchSnapshot();
//   });
// });
// import TopCommunities from "./TopCommunities";
import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";

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
