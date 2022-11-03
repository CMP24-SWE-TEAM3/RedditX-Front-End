// Import styled components
import { StyledPostFlag } from "./PostFlag.styled";

/**
 * The flag is the button that appears in the post form like Flair, NSFW, Spoiler, etc.
 *
 * @param {Boolean} disabled - If the flag is disabled or not
 * @param {Array} children - The children of the component
 * @returns {React.Component} - Post Flag component (The flag is the button that appears in the post form like Flair, NSFW, Spoiler, etc.)
 */
const PostFlag = ({ children, disabled, clickHandler }) => {
  return (
    <StyledPostFlag variant="light" disabled={disabled} onClick={clickHandler}>
      {children}
    </StyledPostFlag>
  );
};

export default PostFlag;
