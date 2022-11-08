import { shallow } from "enzyme";
import React from "react";

// Import components
import FlairModal from "./FlairModal";

describe("Flair modal", () => {
  let wrapper;
  beforeEach(() => {
    const flairs = [
      {
        id: "t7_63248d012f459a937e2684fd",
        text: "Flair 1 text",
        flairBackGroundColor: "rgb(70, 209, 96)",
        flairTextColor: "rgb(255, 255, 255)",
        modOnly: true,
        allowUserEdits: true,
      },
      {
        id: "t7_63248d012f459a937e1223123d",
        text: "Flair 2 text",
        flairBackGroundColor: "blue",
        flairTextColor: "rgb(255, 255, 255)",
        modOnly: true,
        allowUserEdits: true,
      },
      {
        id: "t1_632012f459a937e1223123d",
        text: "Flair 3 text",
        flairBackGroundColor: "red",
        flairTextColor: "rgb(70, 209, 96)",
        modOnly: true,
        allowUserEdits: true,
      },
    ];
    wrapper = shallow(
      <FlairModal
        show={true}
        flairList={flairs}
        flairIndex={0}
        onHide
        setFlairIndex
        error
        isLoading
      />
    );
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
