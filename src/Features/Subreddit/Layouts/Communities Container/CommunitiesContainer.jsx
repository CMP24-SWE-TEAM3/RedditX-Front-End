

import { useParams } from "react-router-dom";
import Community from "../../Components/Community/Community";
import { useEffect, useRef, useState } from "react";
import fetchCommunities from "Features/Subreddit/Services/fetchCommunities";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { communitiesWithCategory } from "../../Services/data";
import {
  CommunityContainer,
  AllCommunities,
  CommunityHeader,
  CommunityH3,
  CommunityOl,
} from "./CommunitiesContainer.styled";
import { useCallback } from "react";

/*TODO: const*/

/**
 * Component acts as a container for all communities of the community leaderboard page
 *
 * @Component
 * @param {object} subscribed - array that contains all the subscribed communities
 * @returns {React.Component}
 */
 const Container = ({subscribed }) => {
  const [pgNum, setPgNum] = useState(1);   //Page Number
  const [coms, setComs] = useState([]);          //communities
  
  let [communitiesList, error, loading, fetchFunction] = useFetchFunction();
  const auth = useAuth();
  const {categoryType} = useParams();
  let initial = categoryType;
  if(categoryType==="All Communities") {
    initial = "Growing";
  }
  else if (categoryType==="*") {
    initial = "Growing";
  }
  else if (categoryType==="Near You") {
    initial = "Local";
  }
  const [currCategory, setCurrCategory] = useState(categoryType==="*"? "Growing": initial);
  const [prevCategory, setPrevCategory] = useState();

  useEffect(()=> {
    
    if(categoryType==="All Communities") {
      setCurrCategory("Growing");
      if(currCategory!==prevCategory) {
        setPrevCategory(currCategory);
        fetchCommunities(fetchFunction, auth, currCategory, pgNum);
      }
        
      return;
    }
    else if (categoryType==="*") {
      setCurrCategory("Growing");
      if(currCategory!==prevCategory) {
        setPrevCategory(currCategory);
        fetchCommunities(fetchFunction, auth, currCategory, pgNum);
      }
      return;
    }
    else if (categoryType==="Near You") {
      setCurrCategory("Local");
      if(currCategory!==prevCategory) {
        setPrevCategory(currCategory);
        fetchCommunities(fetchFunction, auth, currCategory, pgNum);
      }
      return; 
    }
    setCurrCategory(categoryType);
    if(currCategory!==prevCategory) {
      setPrevCategory(currCategory);
      fetchCommunities(fetchFunction, auth, currCategory, pgNum);
      
    }
    
  }, [categoryType, currCategory]);

  // useEffect(()=>{
  //   fetchCommunities(fetchFunction, auth, currCategory, pgNum);
  // },[pgNum]);

  // const { commun } = communitiesList;

  useEffect(() => {
    console.log(communitiesList.communities);
    communitiesList.communities &&
      setComs((prev) => {
        return [...prev, ...communitiesList.communities];
      });
    // console.log(coms);
  }, [communitiesList.communities]);


  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && communitiesList.communities.length !== 0 /*&& hasMore*/) {
          setPgNum((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, communitiesList.communities]
  );

let communities;

if(coms && coms.length!==0)
{
     communities = communitiesList.communities.map((community, index) => {
    if (coms.length === index + 1) { 
        return (
        <li ref={lastPostElementRef} key={community._id}>
          <Community
            id={community._id}
            index={index + 1}
            img={community.icon}
            title={community._id}
            isJoined={subscribed.find((element) => {
              return element._id === community._id;
            })}
            members={community.membersCnt}
            description={community.description}
            rankChange = {community.rank}
          />
        </li>
        );
    }
    else {
      return (
        <li key={community._id}>
          <Community
            id={community.id}
            index={index + 1}
            img={community.icon}
            title={community._id}
            isJoined={subscribed.find((element) => {
              return element._id === community._id;
            })}
            members={community.membersCnt}
            description={community.description}
            rankChange = {community.rank}
          />
        </li>
        );
    }
  });
}
  return (
    <CommunityContainer>
      <AllCommunities>
        <CommunityHeader>
          <CommunityH3> Today's Top {currCategory} Communities</CommunityH3>
        </CommunityHeader>
        <CommunityOl>{communities}</CommunityOl>
      </AllCommunities>
    </CommunityContainer>
  );
}

export default Container;
