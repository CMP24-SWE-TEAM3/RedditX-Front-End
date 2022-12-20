import SettingsComponent from "../SettingsComponent/SettingsComponent";
import { HeaderImages } from "./FollowProfile.styled";
import {useAuth} from "Features/Authentication/Contexts/Authentication";
import setToggledPrefs from "Features/settings/Services/SetToggledPrefs";
import useFetchFunction from "Hooks/useFetchFunction";
import { useState } from "react";
const FollowProfile = ({follow}) => {

  const auth = useAuth();
  const [resAdult, errorAdult, loadingAdult, fetchData] = useFetchFunction();
  const [enFollow, setEnable] = useState(false); 

  function enableFollowHandle(e) {
    setEnable((prev)=>!prev);
    console.log(e);
    let dataObject = {
      enableFollowers: e
    };
    setToggledPrefs(fetchData, dataObject, auth);
  }

  return (
    <>
      <HeaderImages>ADVANCED</HeaderImages>
      <SettingsComponent
        headerText="Allow people to follow you"
        innerText="Followers will be notified about posts you make to your profile and see them in their home feed."
        onToggle={enableFollowHandle}
        state={enFollow}
      />
    </>
  );
};

export default FollowProfile;
