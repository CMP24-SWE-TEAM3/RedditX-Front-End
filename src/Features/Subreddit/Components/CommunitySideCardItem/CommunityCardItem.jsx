import { BASE_URL } from "API/axios";
import {Container,
CommunityA,
CommunityIndex,
Arrow,
CommunityImg,
TitleParagraph,
EmptyImagePadding,
} from "./CommunityCardItem.styled";

/**
 * Component that  shows the communities in side cards
 * @Component
 * @param {string} title - Subreddit Title
 * @param {number} index - Subreddit index among fetched data to index the list
 * @param {string} img - Subreddit Image
 * @returns {Component.React}
 */
const CommunitySideCardItem = ({index, title, img}) => {
    
    return (
        <Container>
            <CommunityA to={`/subreddit/t5_${title}`}>
                <CommunityIndex>{index}</CommunityIndex>
                <Arrow className={img? "": "push"}/>
                {!img &&
                <EmptyImagePadding />}

                {img &&
                <CommunityImg
                    crossOrigin="anonynmous"
                    src={`${BASE_URL}/subreddits/files/${img}`}
                ></CommunityImg>}
                <TitleParagraph>r/{title}</TitleParagraph> 
            </CommunityA>
        </Container>
    );
};

export default CommunitySideCardItem;