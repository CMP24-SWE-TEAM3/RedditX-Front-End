import { render, screen } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Tabs from "./Tabs";

describe("Tabs", () => {
  it("renders tabs component", () => {
    render(
      <TestingComponent>
        <Tabs />
      </TestingComponent>
    );
    const postTabButton = screen.getByTestId("post-tab-btn");
    expect(postTabButton).toBeInTheDocument();
    const imagesTabButton = screen.getByTestId("image-tab-btn");
    expect(imagesTabButton).toBeInTheDocument();
    const linkTabButton = screen.getByTestId("link-tab-btn");
    expect(linkTabButton).toBeInTheDocument();
  });

  it("renders tabs correctly", () => {
    render(
      <TestingComponent>
        <Tabs />
      </TestingComponent>
    );
    const postTabButton = screen.getByTestId("post-tab-btn");
    const imagesTabButton = screen.getByTestId("image-tab-btn");
    const linkTabButton = screen.getByTestId("link-tab-btn");
    postTabButton.click();
    const postTab = screen.getByTestId("post-tab");
    expect(postTab).toBeInTheDocument();

    imagesTabButton.click();
    const imageTab = screen.getByTestId("image-tab");
    expect(imageTab).toBeInTheDocument();

    linkTabButton.click();
    const linkTab = screen.getByTestId("link-tab");
    expect(linkTab).toBeInTheDocument();
  });
});
