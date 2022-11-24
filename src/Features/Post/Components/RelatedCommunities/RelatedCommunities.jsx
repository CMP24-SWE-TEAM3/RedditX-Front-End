import React, { useState } from "react";
import ico from "Features/Post/Assets/Images/eagle.png";
import {
  Container,
  ContentBody,
  Item,
  Title,
  Ico,
  Description,
  JoinBtn,
} from "./RelatedCommunities.styled";
import { Link } from "react-router-dom";

const RelatedCommunities = () => {
  const [joined, setJoined] = useState("Join");
  const handleJoining = () => {
    if (joined === "join") setJoined("Leave");
    else setJoined("join");
  };
  return (
    <Container>
      <div className="content">
        <Title>
          <div>
            <h2>Related Communities</h2>
          </div>
        </Title>
        <ContentBody>
          <div>
            <Item>
              <div className="child-item">
                <Ico>
                  <div>
                    <img src={ico} alt={"ico's community "} />
                  </div>
                </Ico>
                <Description>
                  <div>
                    <Link to="https://www.reddit.com/r/askegypt/">
                      r/askegypt
                    </Link>
                    <div>
                      <p>3,047 members</p>
                    </div>
                  </div>
                </Description>
                <JoinBtn onClick={handleJoining} flip={joined}>
                  <button>{joined}</button>
                </JoinBtn>
              </div>
            </Item>
          </div>
        </ContentBody>
      </div>
    </Container>
  );
};

export default RelatedCommunities;
