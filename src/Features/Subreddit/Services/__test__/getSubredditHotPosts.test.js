import getSubredditHotPosts from "../getSubredditHotPosts";
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
describe("getSubredditHotPosts", () => {
  it("Should not submit if auth is missing", () => {
    getSubredditHotPosts(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    getSubredditHotPosts(mockFetchData, "username", mockAuth, "week", 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    getSubredditHotPosts(
      mockFetchData,
      "username",
      mockAuthWithLogin,
      "week",
      1
    );
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    getSubredditHotPosts(
      mockFetchData,
      "username",
      mockAuthWithToken,
      "hot",
      "week",
      1
    );
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    getSubredditHotPosts(
      mockFetchData,
      "username",
      mockAuthWithTokenAndLogin,
      "hot",
      "week",
      1
    );
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/listing/posts/r/username/hot?page=1&limit=12&t=week`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
