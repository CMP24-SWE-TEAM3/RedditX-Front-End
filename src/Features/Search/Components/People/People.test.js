// import { shallow } from "enzyme";
import People from "./People";
// describe("People", () => {
//   it("this is a test for People", () => {
//     expect(shallow(<People />)).toMatchSnapshot();
//   });
// });
// import { shallow } from "enzyme";

// import People from "./People";
import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";

const PeopleList = [
  {
    avatar: "People_Image.jpg",
    userID: "t5_imagepro",
    about:
      "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
    username: "/u/Abdo",
    totalKarmas: 10,
  },
];
const PeopleFollow = [
  {
    id: "1",
  },
  {
    id: "t5_imagepro1",
  },
  {
    id: "t5_imagepro",
  },
  {
    id: "t5_imagepro2",
  },
];
describe("People component", () => {
  it('renders "People" in title', async () => {
    render(
      <TestingComponent>
        <People PeopleList={PeopleList} PeopleFollow={PeopleFollow} />
      </TestingComponent>
    );
    const outputElement = screen.getByText("People");
    expect(outputElement).toBeInTheDocument();
  });
});
