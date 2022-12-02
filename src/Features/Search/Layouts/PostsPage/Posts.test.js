import Posts from "./Posts";
import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
it("this is a test for Posts", () => {
  render(
    <TestingComponent>
      <Posts />
    </TestingComponent>
  );
});
