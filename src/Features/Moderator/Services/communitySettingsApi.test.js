import { getCommunitySettings, updateSettings } from "./communitySettingsApi";

const dataFetch = async (configObj) => {};

describe("Testing for community settings functions", () => {
  it("this is a test for getCommunitySettings", () => {
    expect(getCommunitySettings(dataFetch, "communityName", "token")).toEqual(
      true
    );
  });

  it("this is a test for getCommunitySettings that is expected to fail 1", () => {
    expect(getCommunitySettings(dataFetch, "communityName")).toEqual(false);
  });

  it("this is a test for getCommunitySettings that is expected to fail 2", () => {
    expect(getCommunitySettings("communityName")).toEqual(false);
  });

  it("this is a test for getCommunitySettings that is expected to fail 3", () => {
    expect(getCommunitySettings(dataFetch)).toEqual(false);
  });

  it("this is a test for updateSettings", () => {
    expect(updateSettings(dataFetch, {}, "communityName", "token")).toEqual(
      true
    );
  });

  it("this is a test for updateSettings that is expected to fail 1", () => {
    expect(updateSettings(dataFetch, "communityName")).toEqual(false);
  });

  it("this is a test for updateSettings that is expected to fail 2", () => {
    expect(updateSettings("communityName")).toEqual(false);
  });

  it("this is a test for updateSettings that is expected to fail 3", () => {
    expect(updateSettings(dataFetch)).toEqual(false);
  });
});
