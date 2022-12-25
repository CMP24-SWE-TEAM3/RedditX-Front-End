import { fireEvent, render, screen, waitFor  } from "@testing-library/react";

import TestingComponent from "Features/Subreddit/Utils/TestingComponent";
import CommunityLeaderBoard from "./CommunityLeaderBoard";

describe("Community Leaderboard Page component", () => {

  it(`renders Today's Top Growing Communities`, () => {
    render(
      <TestingComponent>
        <CommunityLeaderBoard
        />
      </TestingComponent>
    );

    expect(screen).not.toBeNull();

  });

}); 