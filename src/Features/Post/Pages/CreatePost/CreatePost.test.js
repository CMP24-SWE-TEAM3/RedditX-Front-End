import { shallow } from "enzyme";

// Import components
import CreatePost from "./CreatePost";

describe("Create post page", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CreatePost />);
  });

  it("should render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
