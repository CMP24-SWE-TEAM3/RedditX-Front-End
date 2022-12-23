import { render, screen, rerender } from "@testing-library/react";

import TestingComponent from "Features/Post/TestingComponent";
import CollapsePostContent from "./CollapsePostContent";

jest.mock(
  "Features/Post/Services/getCommunityInfo",
  () => (fetchData, auth) => {}
);

describe("PostShape", () => {
  it("renders PostShape component", () => {
    render(
      <TestingComponent>
        <CollapsePostContent
          post={{
            // _id: "63a51f64e5de076130c9a910",
            title: "New title",
            textHTML: "not a link",
            textJSON: "not a link",
            isDeleted: false,
            attachments: [],
            spoiler: false,
            locked: false,
            type: "link",
            nsfw: false,
            insightCnt: 7,
            spamCount: 0,
            votesCount: 0,
            createdAt: "2022-12-22T21:05:08.545Z",
            followers: [],
            userID: {
              _id: "t2_mahmoud_reda",
              avatar: "default.jpg",
            },
            voters: [
              {
                userID: "t2_mahmoud_reda",
                voteType: 1,
                _id: "63a51f64e5de076130c9a911",
              },
              {
                userID: "t2_AbdelrahmanHamza",
                voteType: -1,
                _id: "63a52564e5de076130c9ad2e",
              },
            ],
            mintionedInUsers: [],
            postComments: [],
            spammers: [],
          }}
          fullPost={true}
          setFullPost={() => {}}
          collapse={true}
        />
      </TestingComponent>
    );
  });
});
