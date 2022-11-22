// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import CommunityCard from "./CommunityCard";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { BrowserRouter as Router } from "react-router-dom";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useEffect } from "react";

const theme = { ...defaultTheme, ...lightTheme };

// Enzyme.configure({ adapter: new Adapter() });
const MockCard = () => {
  const { community, setCommunity } = useSubReddit();
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
  // it("should render without crashing", () => {
  //   expect(shallow(<BodyContent />)).toMatchSnapshot();
  // });

  it("should render Content of Subreddit without crashing", () => {
    render(
      <ThemeProvider theme={theme}>
        <Router>
          <SubRedditProvider>
            <MockCard />
          </SubRedditProvider>
        </Router>
      </ThemeProvider>
    );
  });
});
