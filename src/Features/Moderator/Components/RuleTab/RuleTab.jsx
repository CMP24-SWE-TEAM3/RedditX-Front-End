import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import {
  Apply,
  PostsComments,
  ReportReason,
  Description,
  StampOne,
  StampTwo,
  Number,
  RuleText,
  Space,
  AccordionContainer,
  MarginRight,
  EditBtn,
  ExpandedBtn,
  ShrinkBtn,
  Tabs,
} from "./RuleTab.styled";
import { MdOutlineModeEdit } from "react-icons/md";
import { CgArrowsExpandLeft } from "react-icons/cg";
import { TbArrowsDiagonalMinimize } from "react-icons/tb";
import { GrDrag } from "react-icons/gr";

const Rules = ({ setShowModal, name, showDragDrop }) => {
  const [expand, setExpand] = useState(false);
  const handleExpansion = () => {
    setExpand(!expand);
  };
  return (
    <AccordionContainer defaultActiveKey="1" onClick={handleExpansion}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Number>{name}</Number>
          <RuleText>try</RuleText>
          <Space showDragDrop={showDragDrop}>
            <EditBtn onClick={() => setShowModal(true)}>
              <MdOutlineModeEdit />
            </EditBtn>
            <ExpandedBtn show={expand}>
              <CgArrowsExpandLeft />
            </ExpandedBtn>
            <ShrinkBtn show={expand}>
              <TbArrowsDiagonalMinimize />
            </ShrinkBtn>
          </Space>
          <Tabs showDragDrop={showDragDrop}>
            <GrDrag />
          </Tabs>
        </Accordion.Header>
        <Accordion.Body disabled>
          <ReportReason>
            <StampOne>REPORT REASON</StampOne>
            <StampTwo>try</StampTwo>
          </ReportReason>
          <Apply>
            <MarginRight>
              <StampOne>Applies to</StampOne>
              <PostsComments>Posts & comments</PostsComments>
            </MarginRight>
            <MarginRight>
              <StampOne>Created</StampOne>
              <StampTwo>Fri, Jun 19, 54781, 05:26:40 PM GMT+02:00</StampTwo>
            </MarginRight>
          </Apply>
          <Description>
            <StampOne>Full description</StampOne>
            <StampTwo>
              <StampTwo>
                <p>just a try</p>
              </StampTwo>
            </StampTwo>
          </Description>
        </Accordion.Body>
      </Accordion.Item>
    </AccordionContainer>
  );
};

export default Rules;
