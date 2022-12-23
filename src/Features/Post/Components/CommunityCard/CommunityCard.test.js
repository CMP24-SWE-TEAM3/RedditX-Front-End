import { render, screen, fireEvent } from "@testing-library/react";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import TestingComponent from "Features/Post/TestingComponent";
import CommunityCard from "./CommunityCard";

describe("the card of community", () => {
  it("should render without crashing", () => {
    const auth = useAuth();
    auth.login({
      expiresIn: 86400,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbFR5cGUiOiJiYXJlIGVtYWlsIiwidXNlcm5hbWUiOiJ0Ml9ob21lIiwiaWF0IjoxNjY5OTI0MDEzLCJleHAiOjE2NzAzNTYwMTN9.FDa59vJi5gWy4dQVkEtgyCfm3Pp2BtHkPz0_AfNVKgY",
      username: "t2_home",
    });
    render(
      <TestingComponent>
        <CommunityCard
          communityInfo={{
            _id: "t5_2qj8s",
            banner: "https://i.redd.it/6xq2qj8s.jpg",
            description: "This is a community description",
            createdAt: "2021-05-01T00:00:00.000Z",
            icon: "https://i.redd.it/6xq2qj8s.jpg",
          }}
        />
      </TestingComponent>
    );
  });
});
