import submitSpam from "Features/Post/Services/submitSpam";
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
describe("submitSpam", () => {
  it("Should not submit if auth is missing", () => {
    submitSpam(mockFetchData, "comment");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    submitSpam(mockFetchData, "spamReason", mockAuth);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    submitSpam(mockFetchData, "spamReason", mockAuthWithLogin);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    submitSpam(mockFetchData, "spamReason", mockAuthWithToken);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    submitSpam(mockFetchData, "spamReason", mockAuthWithTokenAndLogin);
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "post",
      url: `/api/user/spam/`,
      requestConfig: {
        data: "spamReason",
        headers: {
          "Content-Language": "en-US",
          authorization: `Bearer token`,
        },
      },
    });
  });
});
