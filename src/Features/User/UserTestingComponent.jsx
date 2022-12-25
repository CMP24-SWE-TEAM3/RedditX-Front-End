import { ThemeProvider } from "styled-components";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";
import { BrowserRouter as Router } from "react-router-dom";
import { IsMeProvider } from "Features/User/Contexts/IsMeProvider";
import { UserAboutProvider } from "Features/User/Contexts/UserAboutProvider";
import { UserIDProvider } from "Features/User/Contexts/UserIDProvider";
import { FollowersProvider } from "Features/User/Contexts/FollowersProvider";
import { FollowingProvider } from "Features/User/Contexts/FollowingProvider";

const theme = { ...defaultTheme, ...lightTheme };

const UserTestingComponent = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <IsMeProvider>
          <UserIDProvider>
            <UserAboutProvider>
              <FollowersProvider>
                <FollowingProvider>{children}</FollowingProvider>
              </FollowersProvider>
            </UserAboutProvider>
          </UserIDProvider>
        </IsMeProvider>
      </ThemeProvider>
    </Router>
  );
};

export default UserTestingComponent;
