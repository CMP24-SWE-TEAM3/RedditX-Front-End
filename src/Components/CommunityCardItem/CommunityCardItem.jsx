import {useState} from "react";
import logo from "Assets/Images/logo.png";
import {Container} from "./CommunityCardItem.styled";
import {Link} from "react-router-dom";
import {FaAngleUp, FaAngleDown} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

/**
 * Component that  shows the names of communities up-to-date.
 * @returns {Component.React}
 */
const CommunityCardItem = ({communityId, community}) => {
    const [btnContent, setBtnContent] = useState("Join");

    const clickHandler = (e) => {
        e.preventDefault();
        if (btnContent === "Join") {
            setBtnContent("Joined");
        } else {
            setBtnContent("Join");
        }
    }

    const mouseEnterHandler = () => {
        if (btnContent === "Joined") {
            setBtnContent("Leave");
        }
    }

    const MouseLeaveHandler = () => {
        if (btnContent === "Leave") {
            setBtnContent("Joined");
        }
    }
    const navigate = useNavigate();

    return (
        <Container>
            <Link to={"/subreddit"}>
                <div className="item">
                    <span className={'num'}>{communityId}</span>
                    <span className='caret'><FaAngleUp/></span>
                    <img src={logo} alt=""/>
                    <div  className="info">
                        <div  className="info2">
                            <h6 >r/{community}</h6>

                        </div>
                    </div>
                    <div className="button">
                        <button
                            onClick={clickHandler}
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={MouseLeaveHandler}>
                            {btnContent}
                        </button>
                    </div>
                </div>
            </Link>
        </Container>
    );
};

export default CommunityCardItem;