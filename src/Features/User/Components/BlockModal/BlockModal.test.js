// import Adapter from "@zarconontol/enzyme-adapter-react-18";
import { render, screen } from "@testing-library/react";
import BlockModal from "./BlockModal";
import UserTestingComponent from "Features/User/UserTestingComponent";

function clickHandler() {
  console.log("click");
}

describe("block model to unblock", () => {
  it("should have body text", () => {
    //arrange
    render(
      <UserTestingComponent>
        <BlockModal
          show={true}
          onCancel={clickHandler}
          onUnBlock={clickHandler}
          onHide={clickHandler}
        />
      </UserTestingComponent>
    );

    //assert
    const bodyElement =
      screen.getByText(/able to message you/i);
    expect(bodyElement).toBeInTheDocument();
  });
});
