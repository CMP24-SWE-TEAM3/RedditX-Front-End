import CompContainer from "Features/settings/Components/CompContainer/CompContainer";
import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import setToggledPrefs from "../../Services/SetToggledPrefs";
import { Header } from "./EmailsPage.styled";
import useFetchFunction from "Hooks/useFetchFunction";
import {useAuth} from "Features/Authentication/Contexts/Authentication";
import { useEffect, useState } from "react";

/**
 * Component that contains the Emails Layout
 *
 * @Component
 * @param {boolean} emailSubscribe - Whether this setting is enabled or not
 * @param {boolean} Followers - Whether this setting is enabled or not
 * @param {boolean} Request - Whether this setting is enabled or not
 * @returns {React.Component}
 */
const EmailsPage = ({emailSubscribe, Followers, Request}) => {

  useEffect(()=>{
    console.log(`Request is: ${Request}`);
  },[]);

  const [subscribe, setSubscribe] = useState( false);
  const [followers, setFollowers] = useState( false);
  const [request, setRequest] = useState( false);
  const auth = useAuth();
  const [resUnSubscribe, errorUnSubscribe, loadingUnSubscribe, fetchDataUnSubscribe] = useFetchFunction();
  const [resRequest, errorRequest, loadingRequest, fetchRequest] = useFetchFunction();
  const [resFollowers, errorFollowers, loadingFollowers, fetchDataFollowers] = useFetchFunction();
  function UnsubscribeEmail(e){
    setSubscribe((prev)=>!prev);
    let dataObject = {
      emailUnsubscripeAll: e
    };
    setToggledPrefs(fetchDataUnSubscribe, dataObject, auth);
  }

  function RequestMail(e){
    setRequest((prev)=>!prev);
    let dataObject = {
      emailMessages: e
    };
    setToggledPrefs(fetchRequest, dataObject, auth);
  }

  function FollowersMail(e){
    //To Be Done
    setFollowers((prev)=>!prev);
    let dataObject = {
      enableFollowers: e
    };
    setToggledPrefs(fetchDataFollowers, dataObject, auth);
  }



  
  return (
    <>
      <Header>Inbox messages</Header>
      <CompContainer headerTitle="Messages" >
      <SettingsComponent headerText="Chat requests" innerText="" onToggle={RequestMail} state={request} />
      </CompContainer>
      <CompContainer headerTitle="Activity" >
      <SettingsComponent headerText="New followers" innerText="" onToggle={FollowersMail} state={followers} />
      </CompContainer>
      <CompContainer headerTitle="" >
      <SettingsComponent headerText="Unsubscribe from all emails" innerText="" onToggle={UnsubscribeEmail} state={subscribe} />
      </CompContainer>
    </>
  );
};

export default EmailsPage;
