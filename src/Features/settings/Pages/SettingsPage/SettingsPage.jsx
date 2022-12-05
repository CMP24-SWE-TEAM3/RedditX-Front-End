import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import AccountPage from "Features/settings/Layouts/AccountPage/AccountPage";
import EmailsPage from "Features/settings/Layouts/EmailsPage/EmailsPage";
import FeedPage from "Features/settings/Layouts/FeedPage/FeedPage";
import PrivacyPage from "Features/settings/Layouts/PrivacyPage/PrivacyPage";
import ProfilePage from "Features/settings/Layouts/ProfilePage/ProfilePage";
import {
  Navigate,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  ContainerSettings,
  InnerContainerSettings,
  SettingsNav,
  TabContainer,
  TabInnerContainer,
  Title,
} from "./SettingsPage.styled";

const SettingsPage = () => {
  const toggleHandler = (p) => {
    console.log(p);
  };
  // console.log(window.location.pathname);
  // const current = window.location.pathname;
  const location = useLocation();
  console.log("hh", location.pathname);

  return (
    <ContainerSettings>
      <InnerContainerSettings>
        <Title>User settings</Title>
        <SettingsNav>
          {location.pathname !== "/settings/" && (
            <NavLink to={"/settings/Account"}>Account</NavLink>
          )}
          {location.pathname === "/settings/" && (
            <NavLink to={"/settings/"}>Account</NavLink>
          )}
          <NavLink to={"/settings/Profile"}>Profile</NavLink>
          <NavLink to={"/settings/privacy"}>Safety & Privacy</NavLink>
          <NavLink to={"/settings/feed"}>Feed Settings</NavLink>
          <NavLink to={"/settings/emails"}>Emails</NavLink>
        </SettingsNav>
        <TabContainer>
          <TabInnerContainer>
            <Routes>
              <Route path="" element={<AccountPage />} />
              <Route path="Account" element={<AccountPage />} />
              <Route path="Profile" element={<ProfilePage />} />
              <Route path="privacy" element={<PrivacyPage />} />
              <Route path="feed" element={<FeedPage />} />
              <Route path="emails" element={<EmailsPage />} />
              <Route
                path="/settings"
                element={<Navigate to={"/settings/Account"} />}
              />
            </Routes>
          </TabInnerContainer>
        </TabContainer>
      </InnerContainerSettings>
    </ContainerSettings>
  );
};

export default SettingsPage;
