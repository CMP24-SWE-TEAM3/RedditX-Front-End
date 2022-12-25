import FollowProfile from "Features/settings/Components/FollowProfile/FollowProfile";
import ProfileImage from "Features/settings/Components/ProfileImage/ProfileImage";
import ProfileInformation from "Features/settings/Components/ProfileInformation/ProfileInformation";
import ProfileNsfw from "Features/settings/Components/ProfileNsfw/ProfileNsfw";

// import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import { HeaderPage } from "./ProfilePage.styled";

/**
 * Component that contains the Emails Layout
 *
 * @Component
 * @param {object} prefs - Object that contains the needed settings
 * @returns {React.Component}
 */
const ProfilePage = ({prefs}) => {
  
  
  console.log("from profile",prefs)

  return (
    <>
      <HeaderPage>Customize profile</HeaderPage>
      <ProfileInformation prefs={prefs} />
      <ProfileImage />
      <ProfileNsfw />
      <FollowProfile />
    </>
  );
};

export default ProfilePage;
