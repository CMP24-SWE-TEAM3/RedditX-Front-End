// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
// import Enzyme, { shallow } from "enzyme";
import UserFlairPreview from "./UserFlairPreview";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


// Enzyme.configure({ adapter: new Adapter() });

describe("preview of selected flair", () => {
  // it("should render without crashing", () => {
  //   expect(shallow(<UserFlairPreview />)).toMatchSnapshot();
  // });

  it("show user flair preview", () => {
    //arrange
    render(
      <SubredditTestingComponent>
        <UserFlairPreview />
      </SubredditTestingComponent>
    );

    //assert
    const userFlairElement = screen.getByText(/user flair preview/i);
    expect(userFlairElement).toBeInTheDocument();
  });
});
