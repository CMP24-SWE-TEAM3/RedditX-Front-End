import CompContainer from "Features/settings/Components/CompContainer/CompContainer";
import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import { Header } from "./EmailsPage.styled";

const EmailsPage = () => {

  function func(){
    console.log("func");
  }

  return (
    <>
      <Header>Inbox messages</Header>
      <CompContainer headerTitle="Messages" >
      <SettingsComponent headerText="Chat requests" innerText="" onToggle={func} state={true} />
      </CompContainer>
      <CompContainer headerTitle="Activity" >
      <SettingsComponent headerText="New followers" innerText="" onToggle={func} state={true} />
      </CompContainer>
      <CompContainer headerTitle="" >
      <SettingsComponent headerText="Unsubscribe from all emails" innerText="" onToggle={func} state={true} />
      </CompContainer>
    </>
  );
};

export default EmailsPage;
