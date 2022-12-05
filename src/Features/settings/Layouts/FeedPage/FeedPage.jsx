import { Header } from "Features/settings/Layouts/EmailsPage/EmailsPage.styled";
import CompContainer from "Features/settings/Components/CompContainer/CompContainer";
import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";

const FeedPage = () => {
  function func() {
    console.log("func");
  }

  return (
    <>
      <Header>Feed settings</Header>
      <CompContainer headerTitle="Content Preferences">
        <SettingsComponent
          headerText="Adult content"
          innerText="Enable to view adult and NSFW (not safe for work) content in your feed and search results."
          onToggle={func}
          state={true}
        />
        <SettingsComponent
          headerText="Autoplay media"
          innerText="Play videos and gifs automatically when in the viewport."
          onToggle={func}
          state={true}
        />
      </CompContainer>
    </>
  );
};

export default FeedPage;
