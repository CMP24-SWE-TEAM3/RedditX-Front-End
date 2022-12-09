// imports
import React, { useState } from "react";
import {
  BlockHome,
  ButtonContainer,
  Container,
  Content,
  Cover,
  CreateCommunityBtn,
  CreatePostBtn,
  HeaderLine,
  Home,
  Image,
  Quote,
  QuoteContainer,
  Word,
} from "./CreatePostSideBar.styled";
import reddit from "Assets/Images/reddit.png";
import ModalCommunity from "Components/ModalCommunity/ModalCommunity";
import { useNavigate } from "react-router-dom"; /**
/**
 * Component that displays a create post and community button on sidebar.
 * @returns {Component.React}
 */
const CreatePostSideBar = () => {
  /**
   * function that controls showing modal
   */
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <Content>
          <Cover />
          <Home>
            <Image src={reddit} />
            <BlockHome>
              <Word>Home</Word>
            </BlockHome>
          </Home>
          <QuoteContainer>
            <Quote>
              Your personal Reddit frontpage. Come here to check in with your
              favorite communities.
            </Quote>
          </QuoteContainer>
          <HeaderLine />
          <ButtonContainer>
            <CreatePostBtn
              id={"create-post-button"}
              onClick={() => navigate("/submit")}
            >
              Create Post
            </CreatePostBtn>
            <CreateCommunityBtn
              id={"create-community-button"}
              data-testid="createModalID"
              onClick={() => setShow(true)}
            >
              Create Community
            </CreateCommunityBtn>
          </ButtonContainer>
        </Content>
      </Container>
      {<ModalCommunity show={show} close={() => setShow(false)} />}
    </>
  );
};

export default CreatePostSideBar;
