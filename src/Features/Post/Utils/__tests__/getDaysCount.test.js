import getDaysCount from "../getDaysCount";

describe("getDaysCount", () => {
  it("should return the difference between two dates", async () => {
    expect(getDaysCount("2020-01-01", "2020-01-01")).toBe(0);
    expect(getDaysCount("2020-01-01", "2020-01-02")).toBe(-1);
    expect(getDaysCount("2020-01-01", "2019-12-31")).toBe(1);
    expect(getDaysCount("2020-01-01", "2019-12-30")).toBe(2);
    expect(getDaysCount("2020-01-01", "2019-12-29")).toBe(3);
    expect(getDaysCount("2020-01-01", "2019-12-28")).toBe(4);
    expect(getDaysCount("2020-01-01", "2019-12-27")).toBe(5);
    expect(getDaysCount("2020-01-01", "2019-12-26")).toBe(6);
    expect(getDaysCount("2020-01-01", "2019-12-25")).toBe(7);
    expect(getDaysCount("2020-01-01", "2019-12-24")).toBe(8);
    expect(getDaysCount("2020-01-01", "2019-12-23")).toBe(9);
    expect(getDaysCount("2020-01-01", "2019-12-22")).toBe(10);
    expect(getDaysCount("2020-01-01", "2019-12-21")).toBe(11);
    expect(getDaysCount("2020-01-01", "2019-12-20")).toBe(12);
    expect(getDaysCount("2020-01-01", "2019-12-19")).toBe(13);
    expect(getDaysCount("2020-01-01", "2019-12-18")).toBe(14);
    expect(getDaysCount("2020-01-01", "2019-12-17")).toBe(15);
    expect(getDaysCount("2020-01-01", "2019-12-16")).toBe(16);
    expect(getDaysCount("2020-01-01", "2019-12-15")).toBe(17);
    expect(getDaysCount("2019-01-01", "2001-12-15")).toBe(6226);
    expect(getDaysCount("2019-01-01", "2001-12-14")).toBe(6227);
    expect(getDaysCount("2019-01-01", "2001-12-13")).toBe(6228);
    expect(getDaysCount("2019-01-01", "2001-12-12")).toBe(6229);
  });
});
