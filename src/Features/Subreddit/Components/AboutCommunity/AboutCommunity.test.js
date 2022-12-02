// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { screen, render } from "@testing-library/react";
import AboutCommunity from "./AboutCommunity";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


// Enzyme.configure({ adapter: new Adapter() });
describe("Header of Community card", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<AboutCommunity />)).toMatchSnapshot();
  // });

  it("About Community should appear", () => {
    render(
      <SubredditTestingComponent>
        <AboutCommunity />
      </SubredditTestingComponent>
    );
    expect(screen.getByText(/About Community/i)).toBeInTheDocument();
  });
});
