import {
  Container,
  ApproveButton,
  DotsButton,
  FlairButton,
} from "./SpamPostFooter.styled";

import { IoMdCheckmark } from "react-icons/io";
import { IoPricetagOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";

/**
 * SpamPostFooter Component that is in the side of Post
 * @returns {React.Component} SpamPostFooter component
 */
const SpamPostFooter = ({ post, handlerApprove }) => {
  return (
    <Container>
      <ApproveButton
        variant="white"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handlerApprove(post);
        }}
      >
        <IoMdCheckmark size={18} />
        <span>Approve</span>
      </ApproveButton>
      <FlairButton variant="white" onClick={(e) => e.preventDefault()}>
        <IoPricetagOutline size={18} />
        <span>Flairs</span>
      </FlairButton>
      <DotsButton variant="white" onClick={(e) => e.preventDefault()}>
        <BsThreeDots size={18} />
      </DotsButton>
    </Container>
  );
};

export default SpamPostFooter;
