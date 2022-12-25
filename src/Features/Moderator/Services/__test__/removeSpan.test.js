import removeSpan from "Features/Moderator/Services/removeSpan";
import axios from "API/axios";

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
describe("removeSpan", () => {
  it("Should not submit if auth is missing", () => {
    removeSpan(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    removeSpan(mockFetchData, mockAuth, "subreddit", "data");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    removeSpan(mockFetchData, mockAuthWithLogin, "subreddit", "data");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    removeSpan(mockFetchData, mockAuthWithToken, "subreddit", "data");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    removeSpan(mockFetchData, mockAuthWithTokenAndLogin, "subreddit", "data");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "patch",
      url: `/api/r/t5_subreddit/about/spammed`,
      requestConfig: {
        data: "data",
        headers: {
          "Content-Language": "en-US",
          authorization: `Bearer token`,
        },
      },
    });
  });
});
