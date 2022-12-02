import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { BrowserRouter as Router } from "react-router-dom";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { SubRedditIDProvider } from "./Contexts/SubRedditIDProvider";

const theme = { ...defaultTheme, ...lightTheme };

const SubredditTestingComponent = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SubRedditProvider>
          <SubRedditIDProvider>{children}</SubRedditIDProvider>
        </SubRedditProvider>
      </ThemeProvider>
    </Router>
  );
};

export default SubredditTestingComponent;
