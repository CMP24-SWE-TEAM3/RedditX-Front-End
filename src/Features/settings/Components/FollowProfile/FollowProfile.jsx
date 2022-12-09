import SettingsComponent from "../SettingsComponent/SettingsComponent";
import { HeaderImages } from "./FollowProfile.styled";

const FollowProfile = () => {
  const toggleHandler = (state) => {
    console.log(state);
  };
  return (
    <>
      <HeaderImages>ADVANCED</HeaderImages>
      <SettingsComponent
        headerText="Allow people to follow you"
        innerText="Followers will be notified about posts you make to your profile and see them in their home feed."
        onToggle={toggleHandler}
        state={true}
      />
    </>
  );
};

export default FollowProfile;
