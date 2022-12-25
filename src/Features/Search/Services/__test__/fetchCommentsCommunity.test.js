import axios from "API/axios";
import fetchCommentsCommunity from "../fetchCommentsCommunity";

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
describe("fetchCommentsCommunity", () => {
  it("Should not submit if token is missing && not logged in", () => {
    fetchCommentsCommunity(mockFetchData, mockAuth, "text", "com");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    fetchCommentsCommunity(mockFetchData, mockAuthWithLogin, "text", "com");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    fetchCommentsCommunity(mockFetchData, mockAuthWithToken, "text", "com");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    fetchCommentsCommunity(
      mockFetchData,
      mockAuthWithTokenAndLogin,
      "text",
      "com"
    );
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/search/r/com?type=comment&q=text`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: ` Bearer token`,
        },
      },
    });
  });
});
//
