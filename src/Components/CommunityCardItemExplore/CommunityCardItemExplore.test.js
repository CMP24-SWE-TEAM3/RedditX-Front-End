import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import CommunityCardItem from "./CommunityCardItemExplore";
// import CommunityCardItem from "./CommunityCardItem";
describe("CommunityCardItem component", () => {
  ///////////
  it('renders "join" if the button was NOT clicked', () => {
    render(
      <TestingComponent>
        <CommunityCardItem
          communityIcon="CommunityImage.png"
          communityID={"1asasddaghdgj"}
          communityDescription={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"t2_GermanWW2photos"}
          membersCount={10}
          isJoined={undefined}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByRole("button");
    expect(outputElement.textContent).toBe("Join");
  });

  it('renders "Joined" if the JoinState is True', async () => {
    // Arrange
    render(
      <TestingComponent>
        <CommunityCardItem
          communityIcon="CommunityImage.png"
          communityID={"1ghhfg"}
          communityDescription={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"t2_GermanWW2photos"}
          membersCount={10}
          isJoined={true}
        />
      </TestingComponent>
    );
    // Assert
    const outputElement = screen.getByRole("button");
    expect(outputElement.textContent).toBe("Joined");
  });
  /////////////
  //////////////
  it('does not render "Join" if the button was clicked, transition from false to true', () => {
    // Arrange
    render(
      <TestingComponent>
        <CommunityCardItem
          communityIcon="CommunityImage.png"
          communityID={"fdfdfd"}
          communityDescription={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"t2_GermanWW2photos"}
          membersCount={10}
          isJoined={undefined}
        />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Join");
    expect(outputElement).toBeNull();
  });

  it('does not render "Joined" if the button was clicked, transition from true to false', () => {
    // Arrange
    render(
      <TestingComponent>
        <CommunityCardItem
          communityIcon="CommunityImage.png"
          communityID={"fgfg"}
          communityDescription={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"t2_GermanWW2photos"}
          membersCount={10}
          isJoined={true}
        />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Joined");
    expect(outputElement).toBeNull();
  });
  it("renders the community in correct way in Card", async () => {
    render(
      <TestingComponent>
        <CommunityCardItem
          communityIcon="CommunityImage.png"
          communityID={"fgfg"}
          communityDescription={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          communityName={"t2_GermanWW2photos"}
          membersCount={10}
          isJoined={true}
        />
      </TestingComponent>
    );
    const outputname = screen.getByText("r/GermanWW2photos");
    expect(outputname).toBeInTheDocument();
    // const outputmembers = screen.getByText("{membersCount}m Members");
    // expect(outputmembers).toBeInTheDocument();
  });
});
//test
