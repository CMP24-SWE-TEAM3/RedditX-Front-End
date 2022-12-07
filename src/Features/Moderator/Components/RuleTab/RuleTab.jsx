import React from "react";
import { Accordion } from "react-bootstrap";
import {
  Apply,
  PostsComments,
  ReportReason,
  Description,
  StampOne,
  StampTwo,
  AccordionBody, Number, RuleText, Space,
} from "./RuleTab.styled";
import {MdOutlineModeEdit} from "react-icons/md";

const Rules = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <Number>1</Number>
          <RuleText>
            try
          </RuleText>
<Space>

</Space>
          <button><MdOutlineModeEdit/></button>
        </Accordion.Header>
        <AccordionBody>
          <ReportReason>
            <StampOne>REPORT REASON</StampOne>
            <StampTwo>try</StampTwo>
          </ReportReason>
          <Apply>
            <div>
              <StampOne>Applies to</StampOne>
              <PostsComments>Posts & comments</PostsComments>
            </div>
            <div>
              <StampOne>Created</StampOne>
              <StampTwo>Fri, Jun 19, 54781, 05:26:40 PM GMT+02:00</StampTwo>
            </div>
          </Apply>
          <Description>
            <StampOne>Full description</StampOne>
            <StampTwo>
              <StampTwo>
                <p>just a try</p>
              </StampTwo>
            </StampTwo>
          </Description>
        </AccordionBody>
      </Accordion.Item>
    </Accordion>
  );
};

export default Rules;
