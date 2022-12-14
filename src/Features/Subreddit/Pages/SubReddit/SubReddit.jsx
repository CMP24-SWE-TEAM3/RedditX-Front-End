import SetSubReddit from "Features/Subreddit/Components/SetSubReddit/SetSubReddit";
import SubRedditBody from "Features/Subreddit/Components/SubRedditBody/SubRedditBody";
import SubRedditHeader from "Features/Subreddit/Components/SubRedditHeader/SubRedditHeader";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { SubRedditIDProvider } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { IsModeratorProvider } from "Features/Subreddit/Contexts/IsModeratorProvider";
import { IsBannedProvider } from "Features/Subreddit/Contexts/IsBannedProvider";
import { IsMutedProvider } from "Features/Subreddit/Contexts/IsMutedProvider";
import useDocumentTitle from "Hooks/useDocumentTitle";
import { useState } from "react";
import { InnerContainer, SubRedditContainer } from "./SubReddit.styled";
import { useParams } from "react-router-dom";

/**
 * the whole subreddit Component
 *
 * @returns {React.Component}
 */
const SubReddit = () => {
  const { id } = useParams();

  // Change document title
  useDocumentTitle(id.substring(3));

  const [isJoined, setIsJoined] = useState(false);
  function joinHandler(e) {
    setIsJoined(e);
  }

  return (
    <SubRedditProvider>
      <SubRedditIDProvider>
        <IsModeratorProvider>
          <IsBannedProvider>
            <IsMutedProvider>
              <SetSubReddit comm={id}>
                <SubRedditContainer>
                  {/*<header>Navbar</header>*/}
                  <InnerContainer>
                    <SubRedditHeader isJoined={isJoined} onJoin={joinHandler} />
                    <SubRedditBody />
                  </InnerContainer>
                </SubRedditContainer>
              </SetSubReddit>
            </IsMutedProvider>
          </IsBannedProvider>
        </IsModeratorProvider>
      </SubRedditIDProvider>
    </SubRedditProvider>
  );
};

export default SubReddit;
