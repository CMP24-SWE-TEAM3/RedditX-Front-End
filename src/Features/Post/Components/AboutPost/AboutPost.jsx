import profile from "Features/Post/Assets/Images/profile.jpg";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  AboutPostContainer,
  BackgroundImage,
  Date,
  Online,
  Paragraph,
  Profile,
  ProfileLink,
  Statistics,
  Button,
} from "./AboutPost.styled";
import { useState } from "react";
import CommunityOptions from "Features/Post/Components/CommunityOptions/CommunityOptions";

const AboutPost = () => {
  const [toggleStatus, setToggleStatus] = useState("Joined");

  const onMouseOver = (e) => {
    e.preventDefault();
    setToggleStatus("Leave");
  };
  const onMouseLeave = (e) => {
    e.preventDefault();
    setToggleStatus("Joined");
  };
  const navigate = useNavigate();

  return (
    <AboutPostContainer>
      <div className="content">
        <BackgroundImage />
        <Profile>
          <img src={profile} alt={profile} />
          <ProfileLink>
            <Link to={"/"}>
              <span>r/Egypt</span>
            </Link>
          </ProfileLink>
        </Profile>
        <Paragraph>
          <div>
            Welcome to r/Egypt. The Nile River, the birthplace of civilization,
            and the home of the ancient Pharaohs. We're a country-themed
            subreddit dedicated to posting on events that affect Egypt and
            Egyptians. We're a multilingual subreddit, therefore submissions
            made in either English or Arabic are welcome.
          </div>
        </Paragraph>
        <Date>
          <i>
            <HiOutlineDocumentText size={25} />
          </i>
          <OverlayTrigger
            placement={"bottom"}
            overlay={<Tooltip>14 years ago</Tooltip>}
          >
            <span>Aug 12, 2008</span>
          </OverlayTrigger>
        </Date>
        <hr />
        <Statistics>
          <OverlayTrigger
            placement={"bottom"}
            overlay={<Tooltip>Pharaohs</Tooltip>}
          >
            <div>
              <div className={"members"}>180k</div>
              <p>Pharaohs</p>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement={"bottom"}
            overlay={<Tooltip>285 Masry</Tooltip>}
          >
            <div>
              <Online>285</Online>
              <p>Masry</p>
            </div>
          </OverlayTrigger>
          <OverlayTrigger
            placement={"bottom"}
            overlay={
              <Tooltip>
                r/Egypt in the top of largest communities on Reddit{" "}
              </Tooltip>
            }
          >
            <Link to={"https://www.reddit.com/best/communities/4/#t5_2ql2m"}>
              <span>
                <div className={"top"}>Top 1%</div>
                <p>Ranked by size</p>
              </span>
            </Link>
          </OverlayTrigger>
        </Statistics>
        <hr />
        <div>
          <Button but={"1"} onMouseOver={onMouseOver} onMouseOut={onMouseLeave}>
            {toggleStatus}
          </Button>
          <Button onClick={() => navigate("/submit")}>Create Post</Button>
          <hr />
          <CommunityOptions />
        </div>
      </div>
    </AboutPostContainer>
  );
};

export default AboutPost;
