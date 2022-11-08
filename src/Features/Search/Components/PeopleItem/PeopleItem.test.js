// import { shallow } from "enzyme";
import PeopleItem from "./PeopleItem";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });

describe("People Item", () => {
  it("this is a test for People Item", () => {
    expect(
      shallow(
        <PeopleItem
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
