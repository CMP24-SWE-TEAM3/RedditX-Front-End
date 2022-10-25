// Import styled components
import { StyledPostFlag } from "./PostFlag.styled";

const PostFlag = ({ children, disabled }) => {
  return (
    <StyledPostFlag variant="light" disabled={disabled}>
      {children}
    </StyledPostFlag>
  );
};

export default PostFlag;
