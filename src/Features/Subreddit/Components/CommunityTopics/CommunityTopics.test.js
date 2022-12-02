// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import Enzyme, { shallow } from "enzyme";
import CommunityTopics from "./CommunityTopics";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


// Enzyme.configure({ adapter: new Adapter() });

describe("Add topic and subtopic component", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<CommunityTopics />)).toMatchSnapshot();
  // });

  it("show topics dropdown", () => {
    render(
      <SubredditTestingComponent>
        <CommunityTopics />
      </SubredditTestingComponent>
    );

    const topicsButtonElement = screen.getByTitle("add-topic");
    userEvent.click(topicsButtonElement);

    const topicsDropdownElement = screen.getByTitle("topics-dropdown");
    expect(topicsDropdownElement).toBeInTheDocument();
  });
});
