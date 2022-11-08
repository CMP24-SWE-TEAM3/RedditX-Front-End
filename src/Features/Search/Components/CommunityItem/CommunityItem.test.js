import { shallow } from "enzyme";
import CommunityItem from "./CommunityItem";
describe("Community Item", () => {
  it("this is a test for Community Item", () => {
    expect(
      shallow(
        <CommunityItem
          communityIcon="CommunityImage.png"
          communityID={"t5_imagepro"}
          communityDescription={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"GermanWW2photos"}
          membersCount={10}
        />
      )
    ).toMatchSnapshot();
  });
});
