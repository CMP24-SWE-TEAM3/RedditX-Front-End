import CommunityCard from "./CommunityCard";
import { render } from "@testing-library/react";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";
import { useEffect } from "react";

const MockCard = () => {
  const { setCommunity } = useSubReddit();
  useEffect(() => {
    setCommunity([
      {
        communityId: "t1_54148d012f459b337e2382ce",
        name: "Community",
        memberCount: 552,
        rank: 0,
        createdAt: "2022/02/15, 15:02:20",
        icon: "photo.jpg",
        banner: "photo.jpg",
        communityRules: [
          {
            title: "rule1",
            textDescription: "This rule1!",
          },
          {
            title: "rule2",
            textDescription: "This rule2!",
          },
          {
            title: "rule3",
            textDescription: "",
          },
          {
            title: "rule4",
            textDescription: "This rule4!",
          },
        ],
        FAQs: {
          question: "string",
          answer: "string",
        },
        communityOptions: {
          privacyType: "string",
          region: "string",
          postType: "string",
          allowImgLinkUploads: true,
          suggestedCommentSort: "string",
          allowMultipleImagePerPost: true,
          welcomeMessage: true,
          NSFW: true,
          emailUserNameMention: true,
          optionsDescription: "string",
        },
        communityDescription: "this is a Subreddit description",
      },
    ]);
  }, []);
  return <CommunityCard />;
};

describe("Content of Subreddit", () => {
  it("should render Content of Subreddit without crashing", () => {
    render(
      <SubredditTestingComponent>
        <MockCard />
      </SubredditTestingComponent>
    );
  });
});
