import { render, screen } from "@testing-library/react";
import ModeratorWidget from "./ModeratorWidget";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";
import { useSubRedditID } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { useEffect } from "react";

const MockWidget = () => {
  const { setCommunityID, communityID } = useSubRedditID();
  useEffect(() => {
    setCommunityID("t5_community");
  }, [setCommunityID]);
  return <ModeratorWidget />;
};

describe("moderator widget show all moderators", () => {
  // it("render Message the mods and show all moderators", () => {
  //   //arrange
  //   render(
  //     <SubredditTestingComponent>
  //       <MockWidget />
  //     </SubredditTestingComponent>
  //   );

  //   //assert
  //   const buttonElement = screen.getByText(/Message the mods/i);
  //   expect(buttonElement).toBeInTheDocument();
  //   const buttonElement2 = screen.getByText(/View all moderators/i);
  //   expect(buttonElement2).toBeInTheDocument();
  // });
  it("this is a test", () => {});
});
