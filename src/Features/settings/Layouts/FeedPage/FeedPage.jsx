import { Header } from "Features/settings/Layouts/EmailsPage/EmailsPage.styled";
import CompContainer from "Features/settings/Components/CompContainer/CompContainer";
import SettingsComponent from "Features/settings/Components/SettingsComponent/SettingsComponent";
import {useAuth} from "Features/Authentication/Contexts/Authentication";
import setToggledPrefs from "Features/settings/Services/SetToggledPrefs";
import useFetchFunction from "Hooks/useFetchFunction";
import { useState } from "react";
import { useEffect } from "react";

/**
 * Component that contains the Feed Layout
 *
 * @Component
 * @param {boolean} adult - Whether this setting is enabled or not
 * @param {boolean} autoPlay - Whether this setting is enabled or not
 * @returns {React.Component}
 */
const FeedPage = ({adult, autoPlay}) => {
  const [adultContent, setAdultContent] = useState(adult? adult: false);
  const [autoplay, setAutoPlay] = useState(false);

  

  const [resAdult, errorAdult, loadingAdult, fetchData] = useFetchFunction();
  const [resPlay, errorPlay, loadingPlay, fetchDataPlay] = useFetchFunction();
  const auth = useAuth();
  function AdultContent(e) {
    setAdultContent((prev)=>!prev);
    console.log(e);
    let dataObject = {
      searchIncludeOver18: e
    };
    setToggledPrefs(fetchData, dataObject, auth);
  }

  function AutoPlay(e) {
    setAutoPlay((prev)=>!prev);
  }

  return (
    <>
      <Header>Feed settings</Header>
      <CompContainer headerTitle="Content Preferences">
        <SettingsComponent
          headerText="Adult content"
          innerText="Enable to view adult and NSFW (not safe for work) content in your feed and search results."
          onToggle={AdultContent}
          state={adult}
        />
        <SettingsComponent
          headerText="Autoplay media"
          innerText="Play videos and gifs automatically when in the viewport."
          onToggle={AutoPlay}
          state={autoplay}
        />
      </CompContainer>
    </>
  );
};

export default FeedPage;
