import axios from "API/axios";
import AddFlair from "../AddFlair";

const mockFetchData = jest.fn(function (config) {
  return config;
});
const mockAuth = {
  isLoggedIn: () => false,
  getToken: () => false,
};
const mockAuthWithLogin = {
  isLoggedIn: () => true,
  getToken: () => false,
};
const mockAuthWithToken = {
  isLoggedIn: () => false,
  getToken: () => "token",
};
const mockAuthWithTokenAndLogin = {
  getToken: () => "token",
  isLoggedIn: () => true,
};
describe("AddFlair", () => {
  it("Should not submit if auth is missing", () => {
    AddFlair(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    AddFlair(mockFetchData, "data", mockAuth, "subreddit");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    AddFlair(mockFetchData, "data", mockAuthWithLogin, "subreddit");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    AddFlair(mockFetchData, "data", mockAuthWithToken, "subreddit");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    AddFlair(mockFetchData, "data", mockAuthWithTokenAndLogin, "subreddit");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "post",
      url: `/api/r/t5_subreddit/flair`,
      requestConfig: {
        data: "data",
        headers: {
          "Content-Language": "en-US",
          // "Content-Type": "multipart/form-data",
          authorization: `Bearer token`,
        },
      },
    });
  });
});
