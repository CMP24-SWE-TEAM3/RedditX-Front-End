import { giveVote, makeFollow } from "../postActions";

const dataFetch = async (configObj) => {};

describe("Testing for post actions functions", () => {
  it("this is a test for giveVote", () => {
    expect(
      giveVote(dataFetch, {
        id: "5464668",
        dir: 1,
      })
    ).toEqual(true);
  });

  it("this is a test for giveVote will fail 1", () => {
    expect(
      giveVote(dataFetch, {
        id: "5464668",
      })
    ).toEqual(false);
  });

  it("this is a test for giveVote will fail 2", () => {
    expect(
      giveVote(dataFetch, {
        id: "5464668",
        dir: 7,
      })
    ).toEqual(false);
  });
  it("this is a test for makeFollow", () => {
    expect(
      makeFollow(dataFetch, {
        linkID: "5464668",
        action: false,
      })
    ).toEqual(true);
  });

  it("this is a test for makeFollow will fail 1", () => {
    expect(
      makeFollow(dataFetch, {
        linkID: "5464668",
      })
    ).toEqual(false);
  });

  it("this is a test for makeFollow will fail 2", () => {
    expect(
      makeFollow(dataFetch, {
        linkID: "5464668",
        action: 7,
      })
    ).toEqual(false);
  });
});
