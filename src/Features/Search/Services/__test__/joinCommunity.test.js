import joinCommunity from "Features/Subreddit/Services/joinCommunity";
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
describe("joinCommunity", () => {
  it("Should not submit if auth is missing", () => {
    joinCommunity(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    joinCommunity(mockFetchData, { id: "t5_Amazing" }, mockAuth);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    joinCommunity(mockFetchData, { id: "t5_Amazing" }, mockAuthWithLogin);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    joinCommunity(mockFetchData, { id: "t5_Amazing" }, mockAuthWithToken);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    joinCommunity(
      mockFetchData,
      { id: "t5_Amazing" },
      mockAuthWithTokenAndLogin
    );
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "POST",
      url: `/api/user/subscribe`,
      requestConfig: {
        data: { id: "t5_Amazing" },
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
