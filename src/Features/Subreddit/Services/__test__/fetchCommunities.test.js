import fetchCommunities from "Features/Subreddit/Services/fetchCommunities";
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
describe("fetchCommunities", () => {
  it("Should not submit if auth is missing", () => {
    fetchCommunities(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    fetchCommunities(mockFetchData, mockAuth, "Gaming", 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    fetchCommunities(mockFetchData, mockAuthWithLogin, "Gaming", 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    fetchCommunities(mockFetchData, mockAuthWithToken, "Gaming", 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    fetchCommunities(mockFetchData, mockAuthWithTokenAndLogin, "Gaming", 1);
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `https://api.redditswe22.tech/api/r/get-specific-category/?category=Gaming&page=1&limit=12`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
