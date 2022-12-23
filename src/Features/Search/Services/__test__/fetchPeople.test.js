import axios from "API/axios";
import fetchPeople from "../fetchPeople";

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
describe("fetchPeople", () => {
  it("Should not submit if token is missing && not logged in", () => {
    fetchPeople(mockFetchData, mockAuth, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    fetchPeople(mockFetchData, mockAuthWithLogin, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    fetchPeople(mockFetchData, mockAuthWithToken, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    fetchPeople(mockFetchData, mockAuthWithTokenAndLogin, "text");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/search/r?type=user&q=text`,
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
