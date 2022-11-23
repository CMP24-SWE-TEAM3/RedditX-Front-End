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
import CommunitySideCardItem from "../../Components/CommunitySideCardItem/CommunityCardItem";
import axios from "API/axios";
import useFetch from "Hooks/useFetch";
import {Link} from "react-router-dom";

/**
 * Component that links each  of community card item.
 *
 * @Component
 * @returns {React.Component}
 */
const CommunitySideCard = ({communityList}) => {
    const navigate = useNavigate();
    
    const navigateToRandomCat = (categoryTitle) => {
        // 👇️ navigate to /contacts
        navigate(`/category/${categoryTitle}`);
    };


    const com = communityList.map((community, index) => {
        return (
            <li key={community.id}>
                <CommunitySideCardItem
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

export default CommunitySideCard;