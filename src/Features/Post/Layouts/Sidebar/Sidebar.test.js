import { render, screen, rerender } from "@testing-library/react";

import TestingComponent from "Features/Post/TestingComponent";

// Import components
import Sidebar from "./Sidebar";

// Import contexts
import { useSubmitDestination } from "Features/Post/Contexts/submitDestination";
import { useState } from "react";
import { useEffect } from "react";
import { async } from "@firebase/util";

const TestSubmitDestination = () => {
  const { submitDestination, setSubmitDestination } = useSubmitDestination();
  useEffect(() => {
    setSubmitDestination({
      destination: "test",
      name: "test",
    });
  }, []);
  return (
    <>
      <Sidebar />
    </>
  );
};

describe("Sidebar", () => {
  it("renders sidebar component", () => {
    render(
      <TestingComponent>
        <Sidebar />
      </TestingComponent>
    );
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeVisible();
    const linkElement = screen.getByText("content policy");
    expect(linkElement).toBeVisible();
    const linkElement2 = screen.getByText("reddiquette");
    expect(linkElement2).toBeVisible();
  });

  it("not renders Community data", () => {
    let communityData = screen.queryByTestId("community-data");
    expect(communityData).toBeNull();
  });

  it("renders Community data", async () => {
    const { rerender } = await render(<TestingComponent />);

    await rerender(
      <TestingComponent>
        <TestSubmitDestination />
      </TestingComponent>
    );
    let communityData = screen.queryByTestId("community-data");
    expect(communityData).not.toBeNull();
  });
});
