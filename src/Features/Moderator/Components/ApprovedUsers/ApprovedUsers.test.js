import { shallow } from "enzyme";

import ApprovedUsers from "./ApprovedUsers";

const Moderator = [
    {
      _id: "mohamedRomee",
    },
  ];
  
  const communityName = "t5_imagepro";

describe("ApprovedUsers Component", () => {
  it("this is a test for ApprovedUsers Component", () => {
    expect(shallow(<ApprovedUsers Moderator={Moderator} communityName={communityName}/>)).toMatchSnapshot();
  });
});
