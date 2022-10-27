import {useState} from "react";
import logo from "Assets/logo.png";
import {Container} from "./CommunityCardItem.styled";

const CommunityCardItem = () => {
    const [btnContent, setstate] = useState("Join");

    function clickHandler(e) {
        e.preventDefault();
        if (btnContent === "Join") {
            setstate("Joined");
        } else {
            setstate("Join");
        }
    }

    function mouseEnterHandler() {
        if (btnContent === "Joined") {
            setstate("Leave");
        }
    }

    function MouseLeaveHandler() {
        if (btnContent === "Leave") {
            setstate("Joined");
        }
    }

    return (
        <Container>
            <a href="https://www.reddit.com/r/Steam/">
                <div className="item">
                    <span>1</span>
                    <span className='caret'>&#94;</span>
                    <img src={logo} alt=""/>
                    <div className="info">
                        <div className="info2">
                            <h6>r/Egypt</h6>
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