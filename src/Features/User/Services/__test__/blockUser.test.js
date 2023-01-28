import blockUser from "../blockUser";
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
describe("blockUser", () => {
  it("Should not submit if auth is missing", () => {
    blockUser(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    blockUser(mockFetchData, mockAuth, 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    blockUser(mockFetchData, mockAuthWithLogin, 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    blockUser(mockFetchData, mockAuthWithToken, 1);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    blockUser(mockFetchData, mockAuthWithTokenAndLogin, {
      action: true,
      userID: "mohamed",
    });
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "post",
      url: `/api/user/block-user`,
      requestConfig: {
        data: { action: true, userID: "mohamed" },
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});