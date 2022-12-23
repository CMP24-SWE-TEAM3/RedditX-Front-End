import axios from "API/axios";
import fetchPosts from "../fetchPosts";

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
describe("fetchPosts", () => {
  it("Should not submit if token is missing && not logged in", () => {
    fetchPosts(mockFetchData, mockAuth, "text", "new");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    fetchPosts(mockFetchData, mockAuthWithLogin, "text", "new");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    fetchPosts(mockFetchData, mockAuthWithToken, "text", "new");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    fetchPosts(mockFetchData, mockAuthWithTokenAndLogin, "text", "new");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/search/r?type=post&q=text&sort=new`,
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
