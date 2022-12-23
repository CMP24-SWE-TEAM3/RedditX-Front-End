import {
  getModerators,
  getApproved,
  inviteModerator,
  leaveModerator,
  kickModerator,
  kickMember,
  getBanned,
  getMutted,
  banUser,
  muteUser,
} from "../userManagementApi";

const dataFetch = async (configObj) => {};

describe("Testing for user management functions", () => {
  it("this is a test for getCommunitySettings", () => {
    expect(getModerators(dataFetch, "communityName", "token")).toEqual(true);
  });

  it("this is a test for getModerators that is expected to fail 1", () => {
    expect(getModerators(dataFetch, "communityName")).toEqual(false);
  });

  it("this is a test for getModerators that is expected to fail 2", () => {
    expect(getModerators("communityName")).toEqual(false);
  });

  it("this is a test for getModerators that is expected to fail 3", () => {
    expect(getModerators(dataFetch)).toEqual(false);
  });

  it("this is a test for getApproved", () => {
    expect(getApproved(dataFetch, "communityName", "token")).toEqual(true);
  });

  it("this is a test for getApproved that is expected to fail 1", () => {
    expect(getApproved(dataFetch, "communityName")).toEqual(false);
  });

  it("this is a test for getApproved that is expected to fail 2", () => {
    expect(getApproved("communityName")).toEqual(false);
  });

  it("this is a test for getApproved that is expected to fail 3", () => {
    expect(getApproved(dataFetch)).toEqual(false);
  });

  it("this is a test for inviteModerator", () => {
    expect(
      inviteModerator(
        dataFetch,
        { userID: "t2_dgdhg", type: "moderator_invite", communityID: "t5_tyythd" },
        "token"
      )
    ).toEqual(true);
  });

  it("this is a test for inviteModerator that is expected to fail 1", () => {
    expect(
      inviteModerator(
        dataFetch,
        { type: "moderator_invite", communityID: "t5_tyythd" },
        "token"
      )
    ).toEqual(false);
  });

  it("this is a test for inviteModerator that is expected to fail 2", () => {
    expect(
      inviteModerator(
        { userID: "t2_dgdhg", type: "moderator_invite", communityID: "t5_tyythd" },
        "token"
      )
    ).toEqual(false);
  });

  it("this is a test for inviteModerator that is expected to fail 3", () => {
    expect(inviteModerator(dataFetch)).toEqual(false);
  });

  it("this is a test for leaveModerator", () => {
    expect(
      leaveModerator(dataFetch, { userID: "t2_dgdhg" }, "t5_com", "token")
    ).toEqual(true);
  });

  it("this is a test for leaveModerator that is expected to fail 1", () => {
    expect(leaveModerator(dataFetch, {}, "token")).toEqual(false);
  });

  it("this is a test for leaveModerator that is expected to fail 2", () => {
    expect(leaveModerator({ userID: "t2_dgdhg" }, "token")).toEqual(false);
  });

  it("this is a test for leaveModerator that is expected to fail 3", () => {
    expect(leaveModerator(dataFetch)).toEqual(false);
  });

  it("this is a test for kickModerator", () => {
    expect(
      kickModerator(dataFetch, { userID: "t2_dgdhg" }, "t5_com", "token")
    ).toEqual(true);
  });

  it("this is a test for kickModerator that is expected to fail 1", () => {
    expect(kickModerator(dataFetch, {}, "token")).toEqual(false);
  });

  it("this is a test for kickModerator that is expected to fail 2", () => {
    expect(kickModerator({ userID: "t2_dgdhg" }, "token")).toEqual(false);
  });

  it("this is a test for kickModerator that is expected to fail 3", () => {
    expect(kickModerator(dataFetch)).toEqual(false);
  });

  it("this is a test for kickMember", () => {
    expect(
      kickMember(dataFetch, { userID: "t2_dgdhg" }, "t5_com", "token")
    ).toEqual(true);
  });

  it("this is a test for kickMember that is expected to fail 1", () => {
    expect(kickMember(dataFetch, {}, "token")).toEqual(false);
  });

  it("this is a test for kickMember that is expected to fail 2", () => {
    expect(kickMember({ userID: "t2_dgdhg" }, "token")).toEqual(false);
  });

  it("this is a test for kickMember that is expected to fail 3", () => {
    expect(kickMember(dataFetch)).toEqual(false);
  });

  it("this is a test for getBanned", () => {
    expect(getBanned(dataFetch, "communityName", "token")).toEqual(true);
  });

  it("this is a test for getBanned that is expected to fail 1", () => {
    expect(getBanned(dataFetch, "communityName")).toEqual(false);
  });

  it("this is a test for getBanned that is expected to fail 2", () => {
    expect(getBanned("communityName")).toEqual(false);
  });

  it("this is a test for getBanned that is expected to fail 3", () => {
    expect(getBanned(dataFetch)).toEqual(false);
  });

  it("this is a test for getMutted", () => {
    expect(getMutted(dataFetch, "communityName", "token")).toEqual(true);
  });

  it("this is a test for getMutted that is expected to fail 1", () => {
    expect(getMutted(dataFetch, "communityName")).toEqual(false);
  });

  it("this is a test for getMutted that is expected to fail 2", () => {
    expect(getMutted("communityName")).toEqual(false);
  });

  it("this is a test for getMutted that is expected to fail 3", () => {
    expect(getMutted(dataFetch)).toEqual(false);
  });

  it("this is a test for banUser", () => {
    expect(
      banUser(
        dataFetch,
        { userID: "t2_dgdhg", operation: "ban" },
        "t5_image",
        "token"
      )
    ).toEqual(true);
  });

  it("this is a test for banUser that is expected to fail 1", () => {
    expect(
      banUser(dataFetch, { userID: "t2_dgdhg" }, "t5_image", "token")
    ).toEqual(false);
  });

  it("this is a test for banUser that is expected to fail 2", () => {
    expect(
      banUser({ userID: "t2_dgdhg", operation: "unban" }, "token")
    ).toEqual(false);
  });

  it("this is a test for banUser that is expected to fail 3", () => {
    expect(banUser(dataFetch)).toEqual(false);
  });

  it("this is a test for muteUser", () => {
    expect(
      muteUser(
        dataFetch,
        { userID: "t2_dgdhg", operation: "mute" },
        "t5_image",
        "token"
      )
    ).toEqual(true);
  });

  it("this is a test for muteUser that is expected to fail 1", () => {
    expect(
      muteUser(dataFetch, { userID: "t2_dgdhg" }, "t5_image", "token")
    ).toEqual(false);
  });

  it("this is a test for muteUser that is expected to fail 2", () => {
    expect(
      muteUser({ userID: "t2_dgdhg", operation: "unmute" }, "token")
    ).toEqual(false);
  });

  it("this is a test for muteUser that is expected to fail 3", () => {
    expect(muteUser(dataFetch)).toEqual(false);
  });
});
