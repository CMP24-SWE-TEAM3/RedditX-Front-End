import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Enzyme, { shallow } from "enzyme";
import SetSUbReddit from "./SetSUbReddit";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";

Enzyme.configure({ adapter: new Adapter() });
describe("Component set community info", () => {
  it("should render without crashing", () => {
    expect(
      shallow(
        <SubRedditProvider>
          <SetSUbReddit />
        </SubRedditProvider>
      )
    ).toMatchSnapshot();
  });
});
