import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import NotificationContent from "../NotificationContent";
describe("NotificationContent component", () => {

    const notif = {notifications: [{
        _id:1,
        title: "Upvote",
        content: "Someone Upvoted you",
        createdAt: "2022-11-29T",
        userIcon: "pic.jpg",
        sourceThing: "t2_Funny"
    }]}
  it('renders Earlier', () => {
    render(
      <TestingComponent>
        <NotificationContent 
        notificationRes = {notif}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Earlier");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders Title', () => {
    render(
      <TestingComponent>
        <NotificationContent 
          notificationRes = {notif}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Upvote");
    expect(outputElement).toBeInTheDocument();
  });

});