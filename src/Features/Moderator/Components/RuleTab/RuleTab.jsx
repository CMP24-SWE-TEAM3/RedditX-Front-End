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
import Card from "react-bootstrap/Card";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

const HandleButton = ({
  eventKey,
  showDragDrop,
  setShowModal,
  setShowEditModal,
}) => {
  // state  handles expand/collapse of body accordion button
  const [expand, setExpand] = useState(false);
  const handleExpansion = () => {
    setExpand(!expand);
  };
  const decoratedOnClick = useAccordionButton(eventKey);

  return (
    <Space showDragDrop={showDragDrop}>
      <EditBtn
        onClick={() => {
          setShowModal(true);
          setShowEditModal(true);
        }}
      >
        <MdOutlineModeEdit size={22} />
      </EditBtn>
      <ExpandedBtn
        onClick={() => {
          decoratedOnClick(undefined);
          handleExpansion();
        }}
        show={expand}
      >
        <CgArrowsExpandLeft size={22} />
      </ExpandedBtn>
      <ShrinkBtn
        show={expand}
        onClick={() => {
          decoratedOnClick(undefined);
          handleExpansion();
        }}
      >
        <TbArrowsDiagonalMinimize size={22} />
      </ShrinkBtn>
    </Space>
  );
};

const Rules = ({
  setShowModal,
  name,
  showDragDrop,
  collapse,
  setShowEditModal,
}) => {
  return (
    <Accordion defaultActiveKey="1">
      <AccordionContainer>
        <Card.Header>
          <Number>{name}</Number>
          <RuleText>try</RuleText>
          <HandleButton
            eventKey={collapse}
            showDragDrop={showDragDrop}
            setShowModal={setShowModal}
            setShowEditModal={setShowEditModal}
          />
          <Tabs showDragDrop={showDragDrop}>
            <GrDrag size={22} />
          </Tabs>
        </Card.Header>
        <Accordion.Collapse eventKey={collapse}>
          <Card.Body>
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
          </Card.Body>
        </Accordion.Collapse>
      </AccordionContainer>
    </Accordion>
  );
};

export default Rules;
