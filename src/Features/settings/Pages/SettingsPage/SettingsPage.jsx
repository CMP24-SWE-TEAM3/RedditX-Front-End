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
import SettingModal from "../../Components/SettingModal/SettingModal";
import useFetchFunction from "Hooks/useFetchFunction";
import { useEffect, useState } from "react";
import fetchPrefs from "../../Services/FetchPrefs";
import { useAuth } from "Features/Authentication/Contexts/Authentication";

const SettingsPage = () => {
  const [prefs, setPrefs] = useState({});
  const auth = useAuth();
  const [data, error, loading, fetchData] = useFetchFunction();

  useEffect(() => {
    fetchPrefs(fetchData, auth);
  }, []);

  useEffect(() => {
    if (data) {
      setPrefs(data);
    }
  }, [data]);

  console.log(data);
  const toggleHandler = (p) => {
    console.log(p);
  };
  const location = useLocation();

  return (
    <ContainerSettings>
      <InnerContainerSettings>
        <Title>User settings</Title>
        <SettingsNav>
          {location.pathname !== "/settings" && (
            <NavLink to={"/settings/Account"}>Account</NavLink>
          )}
          {location.pathname === "/settings" && (
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
              <Route path="Profile" element={<ProfilePage prefs={prefs} />} />
              <Route path="privacy" element={<PrivacyPage />} />

              <Route
                path="feed"
                element={
                  !loading &&
                  prefs &&
                  prefs.user &&
                  prefs.user.searchIncludeOver18 && (
                    <FeedPage adult={prefs.user.searchIncludeOver18} />
                  )
                }
              />

              <Route
                path="emails"
                element={
                  !loading &&
                  prefs &&
                  prefs.user &&
                  prefs.user.emailUnsubscripeAll &&
                  prefs.user.emailMessages &&
                  prefs.user.enableFollowers && (
                    <EmailsPage
                      emailSubscribe={prefs.user.emailUnsubscripeAll}
                      Request={prefs.user.emailMessages}
                      Followers={prefs.user.enableFollowers}
                    />
                  )
                }
              />
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
