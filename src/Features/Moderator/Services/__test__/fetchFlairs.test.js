import axios from "API/axios";
import fetchFlairs from "../fetchFlairs";

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
describe("fetchFlairs", () => {
  it("Should not submit if token is missing && not logged in", () => {
    fetchFlairs(mockFetchData, mockAuth, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in", () => {
    fetchFlairs(mockFetchData, mockAuthWithLogin, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should not submit if not logged in and token is available", () => {
    fetchFlairs(mockFetchData, mockAuthWithToken, "text");
    expect(mockFetchData).not.toHaveBeenCalled();
  });
  it("Should submit if logged in and token is available", () => {
    fetchFlairs(mockFetchData, mockAuthWithTokenAndLogin, "text");
    expect(mockFetchData).toBeCalledWith({
      axiosInstance: axios,
      method: "GET",
      url: `/api/r/t5_text/api/flair-list`,
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          Authorization: ` Bearer token`,
        },
      },
    });
  });
});
