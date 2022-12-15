// Import styled components
import { Container } from "./QueueHeader.styled";

// Import icons
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useState } from "react";
import QueueHeaderPopup from "../QueueHeaderPopup/QueueHeaderPopup";
const QueueHeader = ({ title }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        <a href="https://mods.reddithelp.com/hc/en-us/articles/360010090132">
          <AiOutlineInfoCircle size={21} />
        </a>
      </div>
      <div>
        {showPopup && <QueueHeaderPopup />}{" "}
        <img
          src="https://styles.redditmedia.com/t5_75g7xm/styles/profileIcon_snoo6422fdc6-0631-4a70-a9f3-36b423763138-headshot.png?width=256&height=256&crop=256:256,smart&s=e3461623660c1eeee9606f040eb23479ad255815"
          alt="img"
          onClick={() => setShowPopup(!showPopup)}
        />
      </div>
    </Container>
  );
};

export default QueueHeader;
