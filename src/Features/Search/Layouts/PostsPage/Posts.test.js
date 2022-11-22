import Posts from "./Posts";
import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";
it("this is a test FOR Posts", () => {
  render(
    <TestingComponent>
      <Posts />
    </TestingComponent>
  );
});
