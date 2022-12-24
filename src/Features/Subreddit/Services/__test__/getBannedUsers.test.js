import getBannedUsers from "../getBannedUsers";
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
describe("getBannedUsers", () => {
  it("Should not submit if auth is missing", () => {
    getBannedUsers(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    getBannedUsers(mockFetchData, mockAuth, "username");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    getBannedUsers(mockFetchData, mockAuthWithLogin, "username");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    getBannedUsers(mockFetchData, mockAuthWithToken, "username");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    getBannedUsers(mockFetchData, mockAuthWithTokenAndLogin, "username");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/r/username/about/banned`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
