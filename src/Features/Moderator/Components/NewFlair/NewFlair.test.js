// import TopCommunities from "./TopCommunities";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import NewFlair from "./NewFlair";

describe("New flair component", () => {
  it("check that NewFlair are renders flair well", async () => {
    render(
      <TestingComponent>
        <NewFlair />
      </TestingComponent>
    );
    screen.logTestingPlaygroundURL();
    // const listItemElements = await screen.findAllByTitle("flair");
    // expect(listItemElements).not.toHaveLength(0);
  });
});
// it("this is a test", () => {});
//test
