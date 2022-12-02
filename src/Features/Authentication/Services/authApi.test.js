import {
  loginApi,
  signupApi,
  loginWithGoogle,
  loginWithFacebook,
  signupWithGoogle,
  signupWithFacebook,
  isUserNameAvailable,
  forgetUserNameApi,
  forgetPasswordApi,
} from "./authApi";

const dataFetch = async (configObj) => {};

describe("Testing for authentication functions", () => {
  it("this is a test for loginApi", () => {
    expect(
      loginApi(dataFetch, {
        type: "bare email",
        username: "mohamed",
        password: "123456789",
      })
    ).toEqual(true);
  });

  it("this is a test for loginApi that is expected to fail 1", () => {
    expect(
      loginApi(dataFetch, {
        username: "mohamed",
        password: "123456789",
      })
    ).toEqual(false);
  });

  it("this is a test for loginApi that is expected to fail 2", () => {
    expect(
      loginApi(dataFetch, {
        username: 5,
        password: "123456789",
      })
    ).toEqual(false);
  });

  it("this is a test for loginApi that is expected to fail 3", () => {
    expect(
      loginApi(dataFetch, {
        type: "hakjfhdkj",
        username: 5,
        password: "123456789",
      })
    ).toEqual(false);
  });

  it("this is a test for signupApi", () => {
    expect(
      signupApi(dataFetch, {
        type: "bare email",
        email: "mohamedromee12@gmail.com",
        username: "mohamed",
        password: "123456789",
      })
    ).toEqual(true);
  });

  it("this is a test for signupApi that is expected to fail 1", () => {
    expect(
      signupApi(dataFetch, {
        email: "mohamedromee12@gmail.com",
        username: "mohamed",
        password: "123456789",
      })
    ).toEqual(false);
  });

  it("this is a test for signupApi that is expected to fail 2", () => {
    expect(
      signupApi(dataFetch, {
        email: "mohamedromee12@gmail.com",
        username: false,
        password: "123456789",
      })
    ).toEqual(false);
  });

  it("this is a test for signupApi that is expected to fail 3", () => {
    expect(
      signupApi(dataFetch, {
        type: "kjhfkjghsg",
        email: "mohamedromee12@gmail.com",
        username: "hkjhfas",
        password: "123456789",
      })
    ).toEqual(false);
  });

  it("this is a test for loginWithGoogle", () => {
    expect(
      loginWithGoogle(dataFetch, {
        type: "gmail",
        googleOrFacebookToken: "token",
      })
    ).toEqual(true);
  });

  it("this is a test for loginWithGoogle that is expected to fail 1", () => {
    expect(
      loginWithGoogle(dataFetch, {
        type: "bare email",
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for loginWithGoogle that is expected to fail 2", () => {
    expect(
      loginWithGoogle(dataFetch, {
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for loginWithGoogle that is expected to fail 3", () => {
    expect(
      loginWithGoogle(dataFetch, {
        type: "google",
        googleOrFacebookToken: true,
      })
    ).toEqual(false);
  });

  it("this is a test for loginWithFacebook", () => {
    expect(
      loginWithFacebook(dataFetch, {
        type: "facebook",
        googleOrFacebookToken: "token",
      })
    ).toEqual(true);
  });

  it("this is a test for loginWithFacebook that is expected to fail 1", () => {
    expect(
      loginWithFacebook(dataFetch, {
        type: "bare email",
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for loginWithFacebook that is expected to fail 2", () => {
    expect(
      loginWithFacebook(dataFetch, {
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for loginWithFacebook that is expected to fail 3", () => {
    expect(
      loginWithFacebook(dataFetch, {
        type: "facebook",
        googleOrFacebookToken: true,
      })
    ).toEqual(false);
  });

  it("this is a test for signUpWithGoogle", () => {
    expect(
      signupWithGoogle(dataFetch, {
        type: "gmail",
        googleOrFacebookToken: "token",
      })
    ).toEqual(true);
  });

  it("this is a test for signUpWithGoogle that is expected to fail 1", () => {
    expect(
      signupWithGoogle(dataFetch, {
        type: "bare email",
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for signUpWithGoogle that is expected to fail 2", () => {
    expect(
      signupWithGoogle(dataFetch, {
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for signUpWithGoogle that is expected to fail 3", () => {
    expect(
      signupWithGoogle(dataFetch, {
        type: "google",
        googleOrFacebookToken: true,
      })
    ).toEqual(false);
  });

  it("this is a test for signUpWithFacebook", () => {
    expect(
      signupWithFacebook(dataFetch, {
        type: "facebook",
        googleOrFacebookToken: "token",
      })
    ).toEqual(true);
  });

  it("this is a test for signUpWithFacebook that is expected to fail 1", () => {
    expect(
      signupWithFacebook(dataFetch, {
        type: "bare email",
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for signUpWithFacebook that is expected to fail 2", () => {
    expect(
      signupWithFacebook(dataFetch, {
        googleOrFacebookToken: "token",
      })
    ).toEqual(false);
  });

  it("this is a test for signUpWithFacebook that is expected to fail 3", () => {
    expect(
      signupWithFacebook(dataFetch, {
        type: "facebook",
        googleOrFacebookToken: true,
      })
    ).toEqual(false);
  });

  it("this is a test for isUserNameAvailable", () => {
    expect(isUserNameAvailable(dataFetch, "mohamed")).toEqual(true);
  });

  it("this is a test for isUserNameAvailable that is expected to fail 1", () => {
    expect(isUserNameAvailable(dataFetch, "")).toEqual(false);
  });

  it("this is a test for isUserNameAvailable that is expected to fail 2", () => {
    expect(isUserNameAvailable(dataFetch, 5)).toEqual(false);
  });

  it("this is a test for isUserNameAvailable that is expected to fail 3", () => {
    expect(isUserNameAvailable(dataFetch)).toEqual(false);
  });

  it("this is a test for forgetUserNameApi", () => {
    expect(
      forgetUserNameApi(dataFetch, {
        operation: true,
        email: "mohamedromee12@gmail.com",
      })
    ).toEqual(true);
  });

  it("this is a test for forgetUserNameApi that is expected to fail 1", () => {
    expect(
      forgetUserNameApi(dataFetch, {
        operation: false,
        email: "mohamedromee12@gmail.com",
      })
    ).toEqual(false);
  });

  it("this is a test for forgetUserNameApi that is expected to fail 2", () => {
    expect(
      forgetUserNameApi(dataFetch, {
        operation: true,
        email: 5,
      })
    ).toEqual(false);
  });

  it("this is a test for forgetUserNameApi that is expected to fail 3", () => {
    expect(
      forgetUserNameApi(dataFetch, {
        operation: true,
      })
    ).toEqual(false);
  });

  it("this is a test for forgetPasswordApi", () => {
    expect(
        forgetPasswordApi(dataFetch, {
        operation: false,
        email: "mohamedromee12@gmail.com",
        username: "mohamed"
      })
    ).toEqual(true);
  });

  it("this is a test for forgetPasswordApi that is expected to fail 1", () => {
    expect(
        forgetPasswordApi(dataFetch, {
        operation: true,
        email: "mohamedromee12@gmail.com",
        username: "mohamed"
      })
    ).toEqual(false);
  });

  it("this is a test for forgetPasswordApi that is expected to fail 2", () => {
    expect(
        forgetPasswordApi(dataFetch, {
        operation: false,
        email: 5,
        username: "mohamed"
      })
    ).toEqual(false);
  });

  it("this is a test for forgetPasswordApi that is expected to fail 3", () => {
    expect(
        forgetPasswordApi(dataFetch, {
        operation: false,
        username: "mohamed"
      })
    ).toEqual(false);
  });
});
