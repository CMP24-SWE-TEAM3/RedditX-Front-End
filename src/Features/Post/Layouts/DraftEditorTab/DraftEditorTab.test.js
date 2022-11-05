import { shallow } from "enzyme";

// Import components
import DraftEditorTab from "./DraftEditorTab";

describe("Draft editor tab", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<DraftEditorTab />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
