import axios from "API/axios";
import fetchComments from "../fetchComments";

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
describe("fetchComments", () => {
  it("Should not submit if token is missing && not logged in", () => {
    fetchComments(mockFetchData, mockAuth, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    fetchComments(mockFetchData, mockAuthWithLogin, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    fetchComments(mockFetchData, mockAuthWithToken, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    fetchComments(mockFetchData, mockAuthWithTokenAndLogin, "text");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/search/r/?type=comment&q=text`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: ` Bearer token`,
        },
      },
    });
  });
});
