import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import ReportModal from "../ReportModal";
import MessageBannelItem from "../../MessagesPanel/MessagePanelItem";
describe("Report Modal component", () => {

  it('Report Button Visible', () => {
    render(
      <TestingComponent>
        <MessageBannelItem
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={false}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const reportElement = screen.getByText("Report");
    expect(reportElement).toBeInTheDocument();
  });

  it('No Report Modal Visible', () => {
    render(
      <TestingComponent>
        <MessageBannelItem
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={false}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const reportElement = screen.queryByText("Harassment");
    expect(reportElement).toBeNull();
  });

  it('Report Modal Visible after clicking Report', () => {
    render(
      <TestingComponent>
        <MessageBannelItem
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={false}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const buttonElement = screen.getByText("Report");
    fireEvent.click(buttonElement);
    const reportElement = screen.queryByText("Harassment");
    expect(reportElement).toBeInTheDocument();
  });

  it('No Report Button Visible for Admin', () => {
    render(
      <TestingComponent>
        <MessageBannelItem
        changeMessage={()=>{}}
        aurthor={"Jacob"}
        title={"Mobiles"}
        time={"2022-11-29T"}
        msg={"Broken Now"}
        admin={true}
        read={false}
        id={2}
        block={false}
        key={2}
        />
      </TestingComponent>
    );
    const reportElement = screen.queryByText("Report");
    expect(reportElement).toBeNull();
  });

 
});


