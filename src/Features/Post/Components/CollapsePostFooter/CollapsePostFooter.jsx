import {
  Container,
  Comment,
  MyDropdown,
  CommentCollapse,
} from "./CollapsePostFooter.styled";

import { TfiComment } from "react-icons/tfi";
import { VscGift } from "react-icons/vsc";
import { IoMdShareAlt } from "react-icons/io";
import { TbBadge } from "react-icons/tb";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { FiFlag } from "react-icons/fi";
import { CgArrowsExpandLeft } from "react-icons/cg";

/**
 * PostFooter Component that is in the side of Post
 * @returns {React.Component} PostFooter component
 */
const CollapsePostFooter = ({ collapse, setCollapse }) => {
  return (
    <Container>
      <CommentCollapse
        onClick={(event) => {
          event.stopPropagation();
          setCollapse(!collapse);
        }}
      >
        <CgArrowsExpandLeft />
      </CommentCollapse>
      <CommentCollapse onClick={(event) => {}}>
        <TfiComment /> 231 Comments
      </CommentCollapse>
      <CommentCollapse
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <VscGift /> Award
      </CommentCollapse>
      <CommentCollapse
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <IoMdShareAlt /> Share
      </CommentCollapse>
      <CommentCollapse
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <TbBadge /> Save
      </CommentCollapse>
      <CommentCollapse
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <MyDropdown className="d-inline" autoClose="outside">
          <MyDropdown.Toggle id="dropdown-autoclose-outside">
            <HiOutlineDotsHorizontal />
          </MyDropdown.Toggle>

          <MyDropdown.Menu>
            <MyDropdown.Item href="#">
              <span>
                <BiHide /> Hide
              </span>
            </MyDropdown.Item>
            <MyDropdown.Item href="#">
              <span>
                <FiFlag /> Report
              </span>
            </MyDropdown.Item>
          </MyDropdown.Menu>
        </MyDropdown>
      </CommentCollapse>
    </Container>
  );
};

export default CollapsePostFooter;
