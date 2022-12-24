import markAllAsRead from "Features/Notifications/Services/MarkAllAsRead";
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
describe("markAllAsRead", () => {
  it("Should not submit if auth is missing", () => {
    markAllAsRead(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    markAllAsRead(mockFetchData,  mockAuth, {id: 5});
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    markAllAsRead(mockFetchData, mockAuthWithLogin, {id: 5});
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    markAllAsRead(mockFetchData, mockAuthWithToken, {id: 5});
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    markAllAsRead(mockFetchData, mockAuthWithTokenAndLogin, {id: 5});
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "POST",
      url: `/api/message/read-all-messages`,
      requestConfig: {
        data: {id: 5},
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
