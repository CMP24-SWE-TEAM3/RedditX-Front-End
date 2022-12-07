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
    // console.log(CommentLists.results);
    return (
      <SubRedditProvider>
        <SubRedditIDProvider>
          <Container>
            <OuterContainer>
              <InnerContainer>
                <List>
                  {CommentsNumber !== 0 &&
                    CommentLists.results.map((comment) => (
                      <Comment comment={comment} key={comment._id} />
                    ))}
                  {CommentsNumber === 0 && <NotFound />}
                </List>
              </InnerContainer>
            </OuterContainer>
            {ctx.isSubreddit && (
              <div className="side-cards">
                <CommunityCard />
              </div>
            )}
          </Container>
        </SubRedditIDProvider>
      </SubRedditProvider>
    );
  } else {
    return <h1>load</h1>;
  }
};

export default CommentsPage;
