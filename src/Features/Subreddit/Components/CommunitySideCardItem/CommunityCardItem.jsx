import { BASE_URL } from "API/axios";
import {Container,
CommunityA,
CommunityIndex,
Arrow,
CommunityImg,
TitleParagraph,
} from "./CommunityCardItem.styled";

/**
 * Component that  shows the names of communities up-to-date.
 * @Component
 * @param {string} title - Subreddit Title
 * @param {number} index - Subreddit index among fetched data to index the list
 * @returns {Component.React}
 */
const CommunitySideCardItem = ({index, title, img}) => {
    
    return (
        <Container>
            <CommunityA to={`/subreddit/*`}>
                <CommunityIndex>{index}</CommunityIndex>
                <Arrow />
                 <CommunityImg
                    crossOrigin="anonynmous"
                    src={`${BASE_URL}/subreddits/files/${img}`}
                ></CommunityImg>
                <TitleParagraph>r/{title}</TitleParagraph> 
            </CommunityA>
        </Container>
    );
};

export default CommunitySideCardItem;