// import { shallow } from "enzyme";
import PeopleCardItem from "./PeopleCardItem";
// describe("People Card Item", () => {
//   it("this is a test for People Card Item", () => {
//     expect(
//       shallow(
//         <PeopleCardItem
//           avatar={"People_Image.jpg"}
//           userID={"t5_imagepro"}
//           about={
//             "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
//           }
//           totalKarmas={10}
//           username={"/u/Abdo"}
//         />
//       )
//     ).toMatchSnapshot();
//   });
// });
// // { avatar, userID, about, totalKarmas, username }
// import PeopleCardItem from "./PeopleCardItem";
import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
describe("PeopleCardItem component", () => {
  ///////////
  it('renders "Follow" if the button was NOT clicked', () => {
    render(
      <TestingComponent>
        <PeopleCardItem
          avatar={"People_Image.jpg"}
          userID={"fgfhjhjkknb"}
          about={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          totalKarmas={10}
          username={"/u/Abdo"}
          isFollow={undefined}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByRole("button");
    expect(outputElement.textContent).toBe("Follow");
  });

  it('renders "Following" if the FollowState is True', async () => {
    // Arrange
    render(
      <TestingComponent>
        <PeopleCardItem
          avatar={"People_Image.jpg"}
          userID={"fgfhjhjkknb"}
          about={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          totalKarmas={10}
          username={"/u/Abdo"}
          isFollow={true}
        />
      </TestingComponent>
    );
    // Assert
    const outputElement = screen.getByRole("button");
    expect(outputElement.textContent).toBe("Following");
  });
  /////////////
  //////////////
  it('does not render "Follow" if the button was clicked, transition from false to true', () => {
    // Arrange
    render(
      <TestingComponent>
        <PeopleCardItem
          avatar={"People_Image.jpg"}
          userID={"fgfhjhjkknb"}
          about={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          totalKarmas={10}
          username={"/u/Abdo"}
          isFollow={undefined}
        />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Follow");
    expect(outputElement).toBeNull();
  });

  it('does not render "Following" if the button was clicked, transition from true to false', () => {
    // Arrange
    render(
      <TestingComponent>
        <PeopleCardItem
          avatar={"People_Image.jpg"}
          userID={"fgfhjhjkknb"}
          about={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          totalKarmas={10}
          username={"/u/Abdo"}
          isFollow={true}
        />
      </TestingComponent>
    );

    // Act
    const buttonElement = screen.queryByRole("button");
    fireEvent.click(buttonElement);

    // Assert
    const outputElement = screen.queryByText("Following");
    expect(outputElement).toBeNull();
  });

  it("renders the PeopleItem in correct way in PeopleCardItem", async () => {
    render(
      <TestingComponent>
        <PeopleCardItem
          avatar={"People_Image.jpg"}
          userID={"fgfhjhjkknb"}
          about={
            "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)"
          }
          totalKarmas={10}
          username={"/u/Abdo"}
          isFollow={true}
        />
      </TestingComponent>
    );
    const outputname = screen.getByText("u/Abdo");
    expect(outputname).toBeInTheDocument();
  });
});
