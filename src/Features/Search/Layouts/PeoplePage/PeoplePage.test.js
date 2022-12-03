import PeoplePage from "./PeoplePage";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";

const PeopleList = {
  results: [
    {
      avatar: "People_Image.jpg",
      _id: "t5_imagepro",
      about:
        "A subreddit dedicated to German photos and portraits from the period of 1933-1946 (dates are flexible)",
      karma: 10,
    },
  ],
};
const PeopleFollow = [];
describe("People component", () => {
  it("check that people are renders well", async () => {
    render(
      <TestingComponent>
        <PeoplePage PeopleList={PeopleList} PeopleFollow={PeopleFollow} />
      </TestingComponent>
    );

    // const listItemElements = await screen.findAllByTitle("people");
    // expect(listItemElements).not.toHaveLength(0);
  });
});
