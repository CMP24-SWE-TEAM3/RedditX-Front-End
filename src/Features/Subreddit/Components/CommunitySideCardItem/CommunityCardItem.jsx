import logo from "../../Assets/images/logo.svg";
import {Container,
CommunityA,
CommunityIndex,
Arrow,
CommunityImg,
TitleParagraph,
} from "./CommunityCardItem.styled";
import { FaAngleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

/**
 * Component that  shows the names of communities up-to-date.
 * @returns {Component.React}
 */
const CommunityCardItem = ({index, title}) => {

    return (
        <Container>
            <CommunityA href={`/${title}`}>
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

export default CommunityCardItem;