import { shallow } from "enzyme";

import BannedUsers from "./BannedUsers";

const Moderator = [
    {
      _id: "mohamedRomee",
    },
  ];
  
  const communityName = "t5_imagepro";

describe("BannedUsers Component", () => {
  it("this is a test for BannedUsers Component", () => {
    expect(shallow(<BannedUsers  Moderator={Moderator} communityName={communityName}/>)).toMatchSnapshot();
  });
});
