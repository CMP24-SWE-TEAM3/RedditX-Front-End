// import Components
import React from "react";
import Modal from "react-bootstrap/Modal";
import {
  Arrow,
  CloseButton,
  CloseButtonContainer,
  FlairTitle,
  Gallery,
  Header,
  Rate,
  Title,
} from "./NavigationPost.styled";
import { ImArrowDown, ImArrowUp } from "react-icons/im";
import { RiGalleryLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const NavigationPost = () => {
  return (
    <Modal.Header>
      <Header>
        <div className={"content"}>
          <Rate>
            <button className={"but-up"}>
              <Arrow>
                <ImArrowUp />
              </Arrow>
            </button>
            <div className={"score"}>53</div>
            <button className={"but-down"}>
              <Arrow>
                <ImArrowDown />
              </Arrow>
            </button>
          </Rate>
          <Gallery>
            <RiGalleryLine />
          </Gallery>
          <Title>
            <h6>الواحد و هو بيتفرج مش عارف يفرح ولا يزعل</h6>
          </Title>
          <FlairTitle>
            <div>
              <Link
                href={
                  "https://www.reddit.com/r/Egypt/search?q=flair_name%3A%22Sports%20%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9%20%22&restrict_sr=1"
                }
              >
                <div className={"text-flair"}>
                  <span>Sports رياضة </span>
                </div>
              </Link>
            </div>
          </FlairTitle>
        </div>
        <CloseButtonContainer>
          <CloseButton>
            <i>
              <IoMdClose />
            </i>
            <span>Close</span>
          </CloseButton>
        </CloseButtonContainer>
      </Header>
    </Modal.Header>
  );
};

export default NavigationPost;
