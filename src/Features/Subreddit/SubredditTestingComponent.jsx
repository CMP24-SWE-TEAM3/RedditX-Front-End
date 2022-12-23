import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { BrowserRouter as Router } from "react-router-dom";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { SubRedditIDProvider } from "./Contexts/SubRedditIDProvider";
import { IsModeratorProvider } from "Features/Subreddit/Contexts/IsModeratorProvider";
import { IsBannedProvider } from "Features/Subreddit/Contexts/IsBannedProvider";
import { IsMutedProvider } from "Features/Subreddit/Contexts/IsMutedProvider";

const theme = { ...defaultTheme, ...lightTheme };

/**
 * Function that wraps Children props inside a Browser Router and a Theme Provider
 * @returns {React.Component}The component is being returned.
 */
const SubredditTestingComponent = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SubRedditProvider>
          <SubRedditIDProvider>
            <IsModeratorProvider>
              <IsBannedProvider>
                <IsMutedProvider>{children}</IsMutedProvider>
              </IsBannedProvider>
            </IsModeratorProvider>
          </SubRedditIDProvider>
        </SubRedditProvider>
      </ThemeProvider>
    </Router>
  );
};

export default SubredditTestingComponent;
