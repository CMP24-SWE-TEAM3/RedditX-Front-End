import isJsonString from "../isJsonString";

describe("isJsonString", () => {
  it("should return true for valid json strings", async () => {
    expect(isJsonString('{"name":"John", "age":30, "city":"New York"}')).toBe(
      true
    );
    expect(isJsonString('{"name":"John"}')).toBe(true);
    expect(isJsonString('{"name":"John", "age":30}')).toBe(true);
  });
  it("should return false for invalid json strings", async () => {
    expect(isJsonString("google")).toBe(false);
    expect(isJsonString("")).toBe(false);
    expect(isJsonString(" ")).toBe(false);
    expect(isJsonString("  ")).toBe(false);
  });
});
