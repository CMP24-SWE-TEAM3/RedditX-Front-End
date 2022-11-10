// imports
import blackLogo from 'Assets/Images/black-logo.png'
import whiteLogo from 'Assets/Images/white-logo.png';
import logo from 'Assets/Images/logo.png'
import {StyledIcon, StyledLink, StyledTextLogo} from './Badge.styled'
import {Link} from "react-router-dom";

/**
 * Component that displays logos of reddit website
 * @returns {React.Component}
 *
 */
const Badge = ({theme}) => {
    let textLogo = whiteLogo;
    if (theme.id === 'light')
        textLogo = blackLogo;
    return (
        <StyledLink>
            <Link href={"https://www.google.com"}>
                <StyledIcon src={logo} alt="logo of reddit"/>
                < StyledTextLogo src={textLogo} alt="Reddit Logo"/>
            </Link>
        </StyledLink>
    );
};
export default Badge;
