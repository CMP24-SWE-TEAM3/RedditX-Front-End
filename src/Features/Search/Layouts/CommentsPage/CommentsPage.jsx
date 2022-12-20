import Comment from "Features/Search/Components/Comment/Comment.jsx";
import {
  Container,
  List,
  OuterContainer,
  InnerContainer,
} from "./CommentsPage.styled.js";
// Import api
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import NotFound from "Features/Search/Components/NotFound/NotFound.jsx";
import SafeContext from "Features/Search/Contexts/SafeSearchContext/Safe-context";
import SearchContext from "Features/Search/Contexts/SearchWordContext/Search-context";
import { CommunityCard } from "Features/Subreddit";
import { SubRedditIDProvider } from "Features/Subreddit/Contexts/SubRedditIDProvider";
import { SubRedditProvider } from "Features/Subreddit/Contexts/SubRedditProvider";
import { useState, useContext } from "react";
import { IsModeratorProvider } from "Features/Subreddit/Contexts/IsModeratorProvider.js";
import { IsBannedProvider } from "Features/Subreddit/Contexts/IsBannedProvider.js";
import { IsMutedProvider } from "Features/Subreddit/Contexts/IsMutedProvider.js";
import SetCommunityCard from "Features/Search/Components/SetCommunityCard/SetCommunityCard.jsx";
/**
 * Component that render the CommentsPage component and Contains Comment item.
 * @Component
 * @param {object} CommentLists - contain all the Comments
 * @returns {React.Component}
 */

const CommentsPage = ({ CommentLists }) => {
  const ctx = useContext(SearchContext);
  if (CommentLists.results) {
    const CommentsNumber = CommentLists.results.length;
    console.log(CommentLists.results);
    return (
      <SubRedditProvider>
        <SubRedditIDProvider>
          <IsModeratorProvider>
            <IsBannedProvider>
              <IsMutedProvider>
                <Container>
                  <OuterContainer>
                    <InnerContainer>
                      <List>
                        {CommentsNumber !== 0 &&
                          CommentLists.results &&
                          CommentLists.results.map((comment) => (
                            <Comment comment={comment} key={comment._id} />
                          ))}
                        {CommentsNumber === 0 && <NotFound />}
                      </List>
                    </InnerContainer>
                  </OuterContainer>
                  {ctx.isSubreddit && ctx.community && (
                    <div className="side-cards">
                      <SetCommunityCard comm={ctx.community}>
                        <CommunityCard />
                      </SetCommunityCard>
                    </div>
                  )}
                </Container>
              </IsMutedProvider>
            </IsBannedProvider>
          </IsModeratorProvider>
        </SubRedditIDProvider>
      </SubRedditProvider>
    );
  } else {
    return <h1>load</h1>;
  }
};

export default CommentsPage;
