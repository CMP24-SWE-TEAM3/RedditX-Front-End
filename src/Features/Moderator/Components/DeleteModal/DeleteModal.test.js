// import TopCommunities from "./TopCommunities";

import { async } from "@firebase/util";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestingComponent from "Features/Search/TestingComponent";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
// const [ShowModal, setShowModal] = useState(false);
describe("DeleteModal component", () => {
  it("check that DeleteModal are renders well", async () => {
    render(
      <TestingComponent>
        <DeleteModal ShowModal={false} setShowModal={() => {}} id={"id"} />
      </TestingComponent>
    );
    screen.logTestingPlaygroundURL();
    // const listItemElements = await screen.findAllByTitle("flair");
    // expect(listItemElements).not.toHaveLength(0);
  });
});
// it("this is a test", () => {});
//test
