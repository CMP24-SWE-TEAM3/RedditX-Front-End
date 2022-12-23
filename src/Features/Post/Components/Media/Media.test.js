import { shallow } from "enzyme";

import Media from "./Media";

const contentState = {
  getEntity: function () {
    return {
      getType: function () {},
      getData: function () {
        return {
          src: "test",
        };
      },
    };
  },
};

const block = {
  getEntityAt: function () {},
};

describe("Button Component", () => {
  it("this is a test for Button Component", () => {
    shallow(<Media contentState={contentState} block={block} />);
  });
});
