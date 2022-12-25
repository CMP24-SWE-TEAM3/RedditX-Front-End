import { fireEvent, render, screen } from "@testing-library/react";
import TestingComponent from "Features/Messages/Utils/TestingComponent";
import NotificationItem from "../NotificationItem";
describe("NotificationContent component", () => {

    const notif = {notifications: [{
        _id:1,
        title: "Upvote",
        content: "Someone Upvoted you",
        createdAt: "2022-11-29T",
        userIcon: "pic.jpg",
        sourceThing: "t2_Funny"
    }]};
  it('renders Content', () => {
    render(
      <TestingComponent>
        <NotificationItem 
            id = {2}  //For Routing
            header={'Upvote'}
            content={"Someone Upvoted you"}
            date = {"2022-11-29T"}
            img = {'src'}
            fileSrc = {'fileSrc'}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Someone Upvoted you");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders Title', () => {
    render(
      <TestingComponent>
        <NotificationItem 
            id = {2}  //For Routing
            header={'Upvote'}
            content={"Someone Upvoted you"}
            date = {"2022-11-29T"}
            img = {'src'}
            fileSrc = {'fileSrc'}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Upvote");
    expect(outputElement).toBeInTheDocument();
  });

  it('renders Date', () => {
    render(
      <TestingComponent>
        <NotificationItem 
            id = {2}  //For Routing
            header={'Upvote'}
            content={"Someone Upvoted you"}
            date = {"2022-11-29T"}
            img = {'src'}
            fileSrc = {'fileSrc'}
        />
      </TestingComponent>
    );
    const outputElement = screen.getByText("Tue Nov 29 2022");
    expect(outputElement).toBeInTheDocument();
  });
});