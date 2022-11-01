import { shallow } from "enzyme";

// Import components
import ImagesAndVideosTab from "./ImagesAndVideosTab";

describe("Images and videos tab", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ImagesAndVideosTab />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
