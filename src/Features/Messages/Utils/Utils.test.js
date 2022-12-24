import compareDate from "./ParseDate";
import downVote from "./Downvote";
import { useState } from "react";
describe("Date", () => {
    it("this is a test for Compare Date function", () => {
      expect(compareDate("2022-11-29T").toDateString()).toEqual("Tue Nov 29 2022");
    });
  });
