import DisplayName from "Features/settings/Components/DisplayName/DisplayName";
import AboutUser from "../AboutUser/AboutUser";
import { Header } from "./ProfileInformation.styled";

/**
 * Component that contains change progile information settings
 *
 * @Component
 * @param {object} prefs - Settings that include the needed ones
 * @returns {React.Component}
 */
const ProfileInformation = ({ prefs }) => {
  console.log("profile inf", prefs);

  return (
    <>
      <Header>Profile Information</Header>
      <DisplayName prefs={prefs} />
      <AboutUser prefs={prefs} />
    </>
  );
};

export default ProfileInformation;
