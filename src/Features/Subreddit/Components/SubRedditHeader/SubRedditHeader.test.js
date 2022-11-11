import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SubRedditHeader from "./SubRedditHeader";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";

const banner = {
  color: "#33a8ff",
  url: "Features/Subreddit/Assets/tree.jpg",
};

const info = {
  name: "Eln2aa4yn",
};

Enzyme.configure({ adapter: new Adapter() });
describe("header of subreddit", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SubRedditProvider>
          <SubRedditHeader
            banner={banner}
            info={info}
            isJoined={true}
            onJoin={() => console.log("join handler")}
          />
        </SubRedditProvider>
      )
    ).toMatchSnapshot();
  });
});
