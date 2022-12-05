import FollowProfile from "Features/settings/Components/FollowProfile/FollowProfile";
import ProfileImage from "Features/settings/Components/ProfileImage/ProfileImage";
import ProfileInformation from "Features/settings/Components/ProfileInformation/ProfileInformation";
import ProfileNsfw from "Features/settings/Components/ProfileNsfw/ProfileNsfw";
// import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import { HeaderPage } from "./ProfilePage.styled";

const ProfilePage = () => {
  return (
    <>
      <HeaderPage>Customize profile</HeaderPage>
      <ProfileInformation />
      <ProfileImage />
      <ProfileNsfw />
      <FollowProfile />
    </>
  );
};

export default ProfilePage;
