import { render } from "@testing-library/react";
import SubRedditBody from "./SubRedditBody";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";

const MockBody = () => {
  const { communityID, setCommunityID } = useSubRedditID();
  setCommunityID("ccccomunity");
  return <SubRedditBody />;
};

describe("all components after header", () => {
  // it("should render body without crashing", () => {
  //   render(
  //     <SubredditTestingComponent>
  //       <MockBody />
  //     </SubredditTestingComponent>
  //   );
  // });
  it("this is a test", () => {});
});
