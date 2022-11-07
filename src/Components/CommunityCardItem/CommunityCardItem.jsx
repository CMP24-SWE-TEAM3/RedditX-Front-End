import {useState} from "react";
import logo from "Assets/Images/logo.png";
import {Container} from "./CommunityCardItem.styled";
import {GrFormUp} from "react-icons/gr";

/**
 * Component that  shows the names of communities up-to-date.
 * @returns {Component.React}
 */
const CommunityCardItem = ({community}) => {
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

    return (
        <Container>
            <a href="https://www.reddit.com/r/Steam/">
                <div className="item">
                    <span className={'num'}>1</span>
                    <span className='caret'><GrFormUp/></span>
                    <img src={logo} alt=""/>
                    <div className="info">
                        <div className="info2">
                            <h6>r/{community}</h6>
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
            </a>
        </Container>
    );
};

export default CommunityCardItem;