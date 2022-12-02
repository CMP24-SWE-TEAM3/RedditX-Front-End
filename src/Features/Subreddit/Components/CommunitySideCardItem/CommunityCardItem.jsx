import logo from "../../Assets/images/logo.svg";
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
const CommunitySideCardItem = ({index, title}) => {

    return (
        <Container>
            <CommunityA to={`/subreddit`}>
                <CommunityIndex>{index}</CommunityIndex>
                <Arrow />
                 <CommunityImg
                    src={logo}
                    alt="logo"
                ></CommunityImg>
                <TitleParagraph>{title}</TitleParagraph> 
            </CommunityA>
        </Container>
    );
};

export default CommunitySideCardItem;