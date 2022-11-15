// Import contexts providers
import { SubmitDestinationProvider } from "Features/Post/Contexts/submitDestination";
import { CreatePostTitleProvider } from "Features/Post/Contexts/createPostTitle";
import { CreatePostFlagsProvider } from "Features/Post/Contexts/createPostFlags";
import { CreatePostAttachmentsProvider } from "Features/Post/Contexts/createPostAttachments";
import { CreatePostFlairsProvider } from "Features/Post/Contexts/createPostFlairs";
import { CreatePostTextProvider } from "Features/Post/Contexts/createPostText";
import { AuthProvider } from "Features/Authentication/Contexts/Authentication";

// Import react router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Import theme provider from styled components
import { ThemeProvider } from "styled-components";

const TestingComponent = ({ children }) => {
  return (
    <AuthProvider>
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
    </AuthProvider>
  );
};

export default TestingComponent;
