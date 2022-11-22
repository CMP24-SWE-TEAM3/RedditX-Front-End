import isValidUrl from "../isValidUrl";

describe("is valid url", () => {
  it("should return true for valid urls", async () => {
    expect(isValidUrl("https://www.google.com")).toBe(true);
    expect(isValidUrl("https://www.google.com/")).toBe(true);
    expect(isValidUrl("https://www.google.com/abc")).toBe(true);
    expect(isValidUrl("https://www.google.com/abc/")).toBe(true);
    expect(isValidUrl("https://www.google.com/abc/def")).toBe(true);
    expect(isValidUrl("www.google.com")).toBe(true);
    expect(isValidUrl("www.google.com/")).toBe(true);
    expect(isValidUrl("www.google.com/abc")).toBe(true);
    expect(isValidUrl("www.google.com/abc/")).toBe(true);
    expect(isValidUrl("www.google.com/abc/def")).toBe(true);
    expect(isValidUrl("google.com")).toBe(true);
    expect(isValidUrl("google.com/")).toBe(true);
    expect(isValidUrl("google.com/abc")).toBe(true);
    expect(isValidUrl("google.com/abc/")).toBe(true);
    expect(isValidUrl("google.com/abc/def")).toBe(true);
  });
  it("should return false for invalid urls", async () => {
    expect(isValidUrl("google")).toBe(false);
  });
});
