import { handleUp, handleDown } from "./upAndDownVoting";

const dataFetch = async (configObj) => {};
const setCount = jest.fn();
const setGiveUp = jest.fn();
const setGiveDown = jest.fn();
let count = 2;
describe("Testing for voting utility functions", () => {
  it("this is a test for handleUp", () => {
    handleUp(
      false,
      true,
      count,
      setCount,
      setGiveUp,
      setGiveDown,
      "id",
      dataFetch,
      "token"
    );
    expect(setCount).toBeCalledWith(count + 2);
    expect(setGiveUp).toBeCalledWith(true);
    expect(setGiveDown).toBeCalledWith(false);
  });
  it("this is a test for handleUp 2", () => {
    handleUp(
      false,
      false,
      count,
      setCount,
      setGiveUp,
      setGiveDown,
      "id",
      dataFetch,
      "token"
    );
    expect(setCount).toBeCalledWith(count + 1);
    expect(setGiveUp).toBeCalledWith(true);
    expect(setGiveDown).toBeCalledWith(false);
  });
  it("this is a test for handleUp 3", () => {
    handleUp(
      true,
      false,
      count,
      setCount,
      setGiveUp,
      setGiveDown,
      "id",
      dataFetch,
      "token"
    );
    expect(setCount).toBeCalledWith(count - 1);
    expect(setGiveUp).toBeCalledWith(false);
    expect(setGiveDown).toBeCalledWith(false);
  });
  it("this is a test for handleDown", () => {
    handleDown(
      true,
      false,
      count,
      setCount,
      setGiveUp,
      setGiveDown,
      "id",
      dataFetch,
      "token"
    );
    expect(setCount).toBeCalledWith(count - 2);
    expect(setGiveUp).toBeCalledWith(false);
    expect(setGiveDown).toBeCalledWith(true);
  });
  it("this is a test for handleDown 2", () => {
    handleDown(
      false,
      false,
      count,
      setCount,
      setGiveUp,
      setGiveDown,
      "id",
      dataFetch,
      "token"
    );
    expect(setCount).toBeCalledWith(count - 1);
    expect(setGiveUp).toBeCalledWith(false);
    expect(setGiveDown).toBeCalledWith(true);
  });
  it("this is a test for handleDown 3", () => {
    handleDown(
      true,
      true,
      count,
      setCount,
      setGiveUp,
      setGiveDown,
      "id",
      dataFetch,
      "token"
    );
    expect(setCount).toBeCalledWith(count + 1);
    expect(setGiveUp).toBeCalledWith(false);
    expect(setGiveDown).toBeCalledWith(false);
  });
});
