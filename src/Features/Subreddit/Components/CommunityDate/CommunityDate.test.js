// import Adapter from "@zarconontol/enzyme-adapter-react-18";
// import Enzyme, { shallow } from "enzyme";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommunityDate from "./CommunityDate";
import { useSubReddit } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useEffect } from "react";
import SubredditTestingComponent from "Features/Subreddit/SubredditTestingComponent";


const MockDesc = () => {
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
  return <CommunityDate />;
};

// Enzyme.configure({ adapter: new Adapter() });

describe("Description and created date of subreddit", () => {
  // it("should render without crashing", () => {
  //   expect(
  //     shallow(
  //       <SubRedditProvider>
  //         <CommunityDate />
  //       </SubRedditProvider>
  //     )
  //   ).toMatchSnapshot();
  // });

  it("textarea should appear", () => {
    //Arrange
    render(
      <SubredditTestingComponent>
        <CommunityDate />
      </SubredditTestingComponent>
    );

    //Act
    const descriptionElement = screen.getByTitle("add-description");
    userEvent.click(descriptionElement);

    //Assert
    const textAreaElement = screen.getByTitle("textarea");
    expect(textAreaElement).toBeInTheDocument();
  });

  it("textarea should appear when there is description", () => {
    //Arrange
    render(
      <SubredditTestingComponent>
        <MockDesc />
      </SubredditTestingComponent>
    );

    //Act
    const descriptionElement = screen.getByTitle("description-container");
    userEvent.click(descriptionElement);

    //Assert
    const textAreaElement = screen.getByTitle("textarea");
    expect(textAreaElement).toBeInTheDocument();
  });
});
