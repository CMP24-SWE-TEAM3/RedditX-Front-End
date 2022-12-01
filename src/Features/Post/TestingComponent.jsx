// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";
import { CreatePostFlagsProvider } from "Features/Post/Contexts/createPostFlags";
import { CreatePostAttachmentsProvider } from "Features/Post/Contexts/createPostAttachments";
import { CreatePostFlairsProvider } from "Features/Post/Contexts/createPostFlairs";
import { CreatePostTextProvider } from "Features/Post/Contexts/createPostText";
import {
  AuthProvider,
  useAuth,
} from "Features/Authentication/Contexts/Authentication";

// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";

const AuthTesting = ({ children }) => {
  const auth = useAuth();
  useEffect(() => {
    auth.login({
      expiresIn: 86400,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbFR5cGUiOiJiYXJlIGVtYWlsIiwidXNlcm5hbWUiOiJ0Ml9ob21lIiwiaWF0IjoxNjY5OTI0MDEzLCJleHAiOjE2NzAzNTYwMTN9.FDa59vJi5gWy4dQVkEtgyCfm3Pp2BtHkPz0_AfNVKgY",
      username: "t2_home",
    });
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider theme={{ ...defaultTheme, ...lightTheme }}>
        <SubmitDestinationProvider>
          <CreatePostTitleProvider>
            <CreatePostFlagsProvider>
              <CreatePostAttachmentsProvider>
                <CreatePostFlairsProvider>
                  <CreatePostTextProvider>{children}</CreatePostTextProvider>
                </CreatePostFlairsProvider>
              </CreatePostAttachmentsProvider>
            </CreatePostFlagsProvider>
          </CreatePostTitleProvider>
        </SubmitDestinationProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const TestingComponent = ({ children }) => {
  return (
    <AuthProvider>
      <AuthTesting>{children}</AuthTesting>
    </AuthProvider>
  );
};

export default TestingComponent;
