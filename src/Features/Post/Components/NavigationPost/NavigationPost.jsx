// import Components
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import {
  CloseButton,
  CloseButtonContainer,
  Down,
  FlairTitle,
  Gallery,
  Header,
  Rate,
  Title,
  Up,
} from "./NavigationPost.styled";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { RiGalleryLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

/**
 * Component that displays a post page displayed on modal window
 * @param setHandleShowModal - handle show modal window which is true by clicking on post and false by clicking on close button
 * @return {React.Component}
 */
const NavigationPost = ({ setHandleShowModal }) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const addCount = () => {
    let countTemp = count + 1;
    setCount(countTemp);
  };
  const deleteCount = () => {
    let countTemp = count - 1;
    if (countTemp >= 0) setCount(countTemp);
    else setCount(0);
  };

  return (
    <Modal.Header>
      <Header>
        <div className={"content"}>
          <Rate>
            <Up onClick={addCount}>
              <TbArrowBigTop size={26} />
            </Up>
            <div className={"score"}>{count}</div>
            <Down onClick={deleteCount}>
              <TbArrowBigDown size={26} />
            </Down>
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
        {/*<CloseButtonContainer onClick={()=>setHandleShowModal(false)}>*/}
        <CloseButtonContainer onClick={() => navigate(-1)}>
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
