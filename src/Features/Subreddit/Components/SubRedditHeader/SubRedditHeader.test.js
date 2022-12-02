// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import SubRedditHeader from "./SubRedditHeader";
// import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";

const banner = {
  color: "#33a8ff",
  // url: "Features/Subreddit/Assets/tree.jpg",
  url: "",
};

const info = {
  name: "Eln2aa4yn",
};

// Enzyme.configure({ adapter: new Adapter() });

describe("header of subreddit", () => {
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(
  //       <SubRedditProvider>
  //         <SubRedditHeader
  //           banner={banner}
  //           info={info}
  //           isJoined={true}
  //           onJoin={() => console.log("join handler")}
  //         />
  //       </SubRedditProvider>
  //     )
  //   ).toMatchSnapshot();
  // });

  it("render header", () => {
    render(
      <SubredditTestingComponent>
        <SubRedditHeader
          banner={banner}
          info={info}
          isJoined={true}
          onJoin={() => console.log("join handler")}
        />
      </SubredditTestingComponent>
    );
  });
});
