import moderatorCheck from "Features/Messages/Services/ModeratorCheck";
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
describe("moderatorCheck", () => {
  it("Should not submit if auth is missing", () => {
    moderatorCheck(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    moderatorCheck(mockFetchData,  mockAuth);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    moderatorCheck(mockFetchData, mockAuthWithLogin);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    moderatorCheck(mockFetchData, mockAuthWithToken);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    moderatorCheck(mockFetchData, mockAuthWithTokenAndLogin);
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/r/mine/moderator`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
