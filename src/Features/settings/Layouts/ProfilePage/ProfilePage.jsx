import FollowProfile from "Features/settings/Components/FollowProfile/FollowProfile";
import ProfileImage from "Features/settings/Components/ProfileImage/ProfileImage";
import ProfileNsfw from "Features/settings/Components/ProfileNsfw/ProfileNsfw";
// import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import { HeaderPage } from "./ProfilePage.styled";

const ProfilePage = () => {
  return (
    <>
      <HeaderPage>Customize profile</HeaderPage>
      <ProfileImage />
      <ProfileNsfw />
      <FollowProfile />
    </>
  );
};

export default ProfilePage;
