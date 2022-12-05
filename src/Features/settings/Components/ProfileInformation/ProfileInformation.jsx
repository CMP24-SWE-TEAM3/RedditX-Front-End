import DisplayName from "Features/settings/Components/DisplayName/DisplayName";
import AboutUser from "../AboutUser/AboutUser";
import { Header } from "./ProfileInformation.styled";

const ProfileInformation = () => {
  return ( 
    <>
      <Header>Profile Information</Header>
      <DisplayName />
      <AboutUser />
    </>
   );
}
 
export default ProfileInformation;