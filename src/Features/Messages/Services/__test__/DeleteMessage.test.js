import deleteMessage from "Features/Messages/Services/DeleteMessage";
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
describe("deleteMessage", () => {
  it("Should not submit if auth is missing", () => {
    deleteMessage(mockFetchData);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if token is missing && not logged in", () => {
    deleteMessage(mockFetchData,{id:22}, mockAuth);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    deleteMessage(mockFetchData,{id:22}, mockAuthWithLogin);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    deleteMessage(mockFetchData,{id:22}, mockAuthWithToken);
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    deleteMessage(mockFetchData,{id:22},mockAuthWithTokenAndLogin);
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "POST",
      url: `/api/message/del`,
      requestConfig: {
        data: {id:22},
        headers: {
          "Content-Language": "en-US",
          Authorization: `Bearer token`,
        },
      },
    });
  });
});
