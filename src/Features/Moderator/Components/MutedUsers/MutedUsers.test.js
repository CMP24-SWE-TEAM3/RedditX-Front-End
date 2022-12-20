import { shallow } from "enzyme";

import MutedUsers from "./MutedUsers";

const Moderator = [
  {
    _id: "mohamedRomee",
  },
];

const communityName = "t5_imagepro";

describe("MutedUsers Component", () => {
  it("this is a test for MutedUsers Component", () => {
    expect(
      shallow(
        <MutedUsers Moderator={Moderator} communityName={communityName} />
      )
    ).toMatchSnapshot();
  });
});
