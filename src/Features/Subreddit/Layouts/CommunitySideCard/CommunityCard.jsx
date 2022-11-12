import {
BtnDiv, 
CommunityContainer, 
ViewAllBtn,
CoverDiv,
GradientDiv,
LinkH2,
} from "./CommunityCard.styled";
import { useNavigate } from "react-router-dom";
import { CommunityOl } from "../Communities Container/CommunitiesContainer.styled";
import CommunityCardItem from "../../Components/CommunitySideCardItem/CommunityCardItem";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import {Link} from "react-router-dom";

/**
 * Component that links each  of community card item.
 *
 * @Component
 * @returns {React.Component}
 */
const TopCommunities = () => {

    const navigate = useNavigate();

    const navigateToRandomCat = (categoryTitle) => {
        // 👇️ navigate to /contacts
        navigate(`/category/${categoryTitle}`);
    };

    // Fetch communities
    const [communityList, error, loading, reload] = useFetch({
        axiosInstance: axios,
        method: "GET",
        //  /api/random-category/
        url: "http://localhost:8000/feedback--Leaderboard",
        requestConfig: {
            headers: {
                "Content-Language": "en-US",
            },
        },
    });

    const com = communityList.map((community, index) => {
        return (
            <li key={community.id}>
                <CommunityCardItem
                title = {community.title} 
                community={community.name} 
                index = {index+1}/>
            </li>
        );
    });
    
    return (
        <CommunityContainer>
              <CoverDiv>
                <GradientDiv>
                  <LinkH2>
                      <Link href={"https://www.reddit.com/subreddits/leaderboard/"}>Top
                          <span>&nbsp;Gaming&nbsp;</span>
                          Communities
                      </Link>
                  </LinkH2>
                </GradientDiv>
              </CoverDiv>
              <CommunityOl>
                  {com}
              </CommunityOl>
            <BtnDiv>
                <ViewAllBtn onClick={()=>navigateToRandomCat('Gaming')}>See All Gaming</ViewAllBtn>
            </BtnDiv>
        </CommunityContainer>
    );
};

export default TopCommunities;