import { shallow } from "enzyme";
import PeopleCardItem from "./PeopleCardItem";
describe("People Card Item", () => {
  it("this is a test for People Card Item", () => {
    expect(
      shallow(
        <PeopleCardItem
          avatar={"People_Image.jpg"}
          userID={"t5_imagepro"}
          about={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          totalKarmas={10}
          username={"/u/Abdo"}
        />
      )
    ).toMatchSnapshot();
  });
});
// { avatar, userID, about, totalKarmas, username }
