// import axios from "API/axios";
// import joinCommunity from "../joinCommunity";

// const mockFetchData = jest.fn(function (config) {
//   return config;
// });
// const mockAuth = {
//   isLoggedIn: () => false,
//   getToken: () => false,
// };
// const , { id: "t5_Amazing" } = {
//   isLoggedIn: () => true,
//   getToken: () => false,
// };
// const mockAuthWithToken = {
//   isLoggedIn: () => false,
//   getToken: () => "token",
// };
// const mockAuthWithTokenAndLogin = {
//   getToken: () => "token",
//   isLoggedIn: () => true,
// };
// describe("joinCommunity", () => {
//   it("Should not submit if auth is missing", () => {
//     joinCommunity(mockFetchData);
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should not submit if token is missing && not logged in", () => {
//     joinCommunity(mockFetchData, mockAuth, "data");
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should not submit if not logged in", () => {
//     joinCommunity(mockFetchData, mockAuthWithLogin, "data");
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should not submit if not logged in and token is available", () => {
//     joinCommunity(mockFetchData, mockAuthWithToken, "data");
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should submit if logged in and token is available", () => {
//     joinCommunity(mockFetchData, mockAuthWithTokenAndLogin, "data");
//     expect(mockFetchData).toBeCalledWith({
//       axiosInstance: axios,
//       method: "post",
//       url: "/api/user/subscribe/",
//       requestConfig: {
//         data: "data",
//         headers: {
//           "Content-Language": "en-US",
//           authorization: `Bearer token`,
//         },
//       },
//     });
//   });
// });
//
it("this is a test", () => {});
//
// import axios from "API/axios";
// import joinCommunity from "../joinCommunity";

// const mockFetchData = jest.fn(function (config) {
//   return config;
// });
// const mockAuth = {
//   isLoggedIn: () => false,
//   getToken: () => false,
// };
// const mockAuthWithLogin = {
//   isLoggedIn: () => true,
//   getToken: () => false,
// };
// const mockAuthWithToken = {
//   isLoggedIn: () => false,
//   getToken: () => "token",
// };
// const mockAuthWithTokenAndLogin = {
//   getToken: () => "token",
//   isLoggedIn: () => true,
// };
// describe("joinCommunity", () => {
//   it("Should not submit if auth is missing", () => {
//     joinCommunity(mockFetchData);
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should not submit if token is missing && not logged in", () => {
//     joinCommunity(mockFetchData, mockAuth, { id: "t5_Amazing" });
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should not submit if not logged in", () => {
//     joinCommunity(mockFetchData, mockAuthWithLogin, { id: "t5_Amazing" });
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should not submit if not logged in and token is available", () => {
//     joinCommunity(mockFetchData, mockAuthWithToken, { id: "t5_Amazing" });
//     expect(mockFetchData).not.toHaveBeenCalled();
//   });
//   it("Should submit if logged in and token is available", () => {
//     joinCommunity(mockFetchData, mockAuthWithTokenAndLogin, {
//       id: "t5_Amazing",
//     });
//     expect(mockFetchData).toBeCalledWith({
//       axiosInstance: axios,
//       method: "POST",
//       url: `/api/user/subscribe`,
//       requestConfig: {
//         data: { id: "t5_Amazing" },
//         headers: {
//           "Content-Language": "en-US",
//           Authorization: `Bearer token`,
//         },
//       },
//     });
//   });
// });
