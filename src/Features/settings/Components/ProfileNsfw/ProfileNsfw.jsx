import SettingsComponent from "../SettingsComponent/SettingsComponent";
import { HeaderImages } from "./ProfileNsfw.styled";

const ProfileNsfw = () => {
  const toggleHandler = (state) => {
    console.log(state);
  };
  return (
    <>
      <HeaderImages>PROFILE CATEGORY</HeaderImages>
      <SettingsComponent
        headerText="NSFW"
        innerText="This content is NSFW (may contain nudity, pornography, profanity or inappropriate content for those under 18)"
        onToggle={toggleHandler}
        state={true}
      />
    </>
  );
};

export default ProfileNsfw;
