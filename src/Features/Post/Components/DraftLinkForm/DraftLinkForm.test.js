import { render, screen, fireEvent } from "@testing-library/react";
import TestingComponent from "Features/Post/TestingComponent";

// Import components
import DraftLinkForm from "./DraftLinkForm";

const mockConfirmLink = jest.fn();

describe("Image and video form", () => {
  it("should be able to render title, link and insert button", async () => {
    render(
      <TestingComponent>
        <DraftLinkForm confirmLink={mockConfirmLink} />
      </TestingComponent>
    );
    expect(
      screen.getByPlaceholderText("Title of link (optional)")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Paste or type link here")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Insert" })).toBeInTheDocument();
  });

  it("should be able to type into title and link", () => {
    render(
      <TestingComponent>
        <DraftLinkForm confirmLink={mockConfirmLink} />
      </TestingComponent>
    );
    const titleInput = screen.getByPlaceholderText("Title of link (optional)");
    fireEvent.click(titleInput);
    fireEvent.change(titleInput, { target: { value: "Test title" } });
    expect(titleInput.value).toBe("Test title");

    const urlInput = screen.getByPlaceholderText("Paste or type link here");
    fireEvent.click(urlInput);
    fireEvent.change(urlInput, { target: { value: "Test url" } });
    expect(urlInput.value).toBe("Test url");
  });

  it("should not submit invalid url", () => {
    render(
      <TestingComponent>
        <DraftLinkForm
          confirmLink={mockConfirmLink}
          linkUrlValue="invalid url"
        />
      </TestingComponent>
    );
    const titleInput = screen.getByPlaceholderText("Title of link (optional)");
    const urlInput = screen.getByPlaceholderText("Paste or type link here");
    const insertButton = screen.getByRole("button", { name: "Insert" });
    fireEvent.click(titleInput);
    fireEvent.change(titleInput, { target: { value: "Test title" } });
    fireEvent.click(urlInput);
    fireEvent.change(urlInput, { target: { value: "invalid url" } });
    fireEvent.click(insertButton);
    expect(mockConfirmLink).not.toHaveBeenCalled();
    expect(screen.getByText("Link doesn't look right")).toBeInTheDocument();
  });

  it("should submit valid url", () => {
    render(
      <TestingComponent>
        <DraftLinkForm confirmLink={mockConfirmLink} linkUrlValue="valid.com" />
      </TestingComponent>
    );
    const titleInput = screen.getByPlaceholderText("Title of link (optional)");
    const urlInput = screen.getByPlaceholderText("Paste or type link here");
    const insertButton = screen.getByRole("button", { name: "Insert" });
    fireEvent.click(titleInput);
    fireEvent.change(titleInput, { target: { value: "Test title" } });
    fireEvent.click(urlInput);
    fireEvent.change(urlInput, { target: { value: "valid.com" } });
    fireEvent.click(insertButton);
    expect(mockConfirmLink).toHaveBeenCalled();
    expect(
      screen.queryByText("Link doesn't look right")
    ).not.toBeInTheDocument();
  });
});
