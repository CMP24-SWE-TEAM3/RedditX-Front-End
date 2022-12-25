// import TopCommunities from "./TopCommunities";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import CancelModal from "./CancelModal";
// import NewFlair from "./NewFlair";

describe("CancelModal component", () => {
  it("check that CancelModal are renders well", async () => {
    render(
      <TestingComponent>
        <CancelModal ShowModal={false} setShowModal={() => {}} id={"id"} w />
      </TestingComponent>
    );
    screen.logTestingPlaygroundURL();
    // const listItemElements = await screen.findAllByTitle("flair");
    // expect(listItemElements).not.toHaveLength(0);
  });
});
// it("this is a test", () => {});
//test
