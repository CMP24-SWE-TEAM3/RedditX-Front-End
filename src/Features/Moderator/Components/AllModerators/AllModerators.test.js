import { shallow } from "enzyme";

import AllModerators from "./AllModerators";

const Moderator = [
    {
      _id: "mohamedRomee",
    },
  ];
  
  const communityName = "t5_imagepro";

describe("AllModerators Component", () => {
  it("this is a test for AllModerators Component", () => {
    expect(shallow(<AllModerators Moderator={Moderator} communityName={communityName}/>)).toMatchSnapshot();
  });
});
