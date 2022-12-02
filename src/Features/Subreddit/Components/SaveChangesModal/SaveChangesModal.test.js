// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import SaveChangesModal from "./SaveChangesModal";
import { render } from "@testing-library/react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


function out() {
  console.log("clicked");
}

// Enzyme.configure({ adapter: new Adapter() });
describe("modal to check unsaved changes", () => {
 
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(
  //       <SaveChangesModal
  //         show={true}
  //         onDiscard={out}
  //         onSave={out}
  //         onHide={out}
  //         showX={true}
  //       />
  //     )
  //   ).toMatchSnapshot();
  // });

  it("show modal", () => {
    render(
      <SubredditTestingComponent>
        <SaveChangesModal
          show={true}
          onDiscard={out}
          onSave={out}
          onHide={out}
          showX={true}
        />
      </SubredditTestingComponent>
    );
  });
});
