import {
  Banner,
  HeaderContainer,
  HeaderContent,
  HeaderDetails,
  Info
} from "./SubRedditHeader.styled";

import profile from "Features/Subreddit/Assets/index.jpeg";
import Button from "Features/Subreddit/Components/Button/Button";

const SubRedditHeader = (props) => {
  function joinHandler(e) {
    props.onJoin(e);
  }

  return (
    <HeaderContainer>
      <Banner banner={props.banner} />
      <HeaderContent>
        <HeaderDetails>
          <div className="content">
            <img src={profile} alt="" />
            <Info>
              <div className="title-info">
                <h1 className="title">{props.info.name}</h1>
                <h2 className="subtitle">{`r/${props.info.name}`}</h2>
              </div>
              <Button isJoined={props.isJoined} onJoin={joinHandler} />
            </Info>
          </div>
        </HeaderDetails>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default SubRedditHeader;
