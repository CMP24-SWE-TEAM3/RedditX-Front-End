import submitSave from "Features/Post/Services/submitSave";
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
describe("submitSave", () => {
  it("Should not submit if auth is missing", () => {
    submitSave(mockFetchData, "comment");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    submitSave(mockFetchData, "saveData", mockAuth);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    submitSave(mockFetchData, "saveData", mockAuthWithLogin);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    submitSave(mockFetchData, "saveData", mockAuthWithToken);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    submitSave(mockFetchData, "saveData", mockAuthWithTokenAndLogin);
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "post",
      url: `/api/listing/save/`,
      requestConfig: {
        data: "saveData",
        headers: {
          "Content-Language": "en-US",
          authorization: `Bearer token`,
        },
      },
    });
  });
});
