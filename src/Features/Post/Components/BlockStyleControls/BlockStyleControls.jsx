// Import components
import StyleControlButton from "../StyleControlButton/StyleControlButton";

// Import icons
import { MdOutlineTextFields } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { TfiQuoteRight } from "react-icons/tfi";
import { SiCodecademy } from "react-icons/si";

// Import styled components
import { StyledBlockControls } from "./BlockStyleControls.styled";

const BLOCK_TYPES = [
  {
    label: "Heading",
    style: "header-four",
    icon: <MdOutlineTextFields size={22} />,
  },

  {
    label: "Bulleted list",
    style: "unordered-list-item",
    icon: <BsListUl size={22} />,
  },
  {
    label: "Numbered list",
    style: "ordered-list-item",
    icon: <AiOutlineOrderedList size={22} />,
  },
  {
    label: "Quote Block",
    style: "blockquote",
    icon: <TfiQuoteRight size={22} />,
  },
  {
    label: "Code Block",
    style: "code-block",
    icon: <SiCodecademy size={22} />,
  },
];

/**
 * The block styles controls in the draft editor
 * Block styles like Header, ordered list, unordered list, etc.
 *
 * @param {object} editorState - The editor state
 * @param {Function} onToggle - Function to toggle block style
 * @returns {React.Component} - The block styles controls in the draft editor
 */
const BlockStyleControls = ({ onToggle, editorState }) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  return (
    <StyledBlockControls>
      {BLOCK_TYPES.map((type) => (
        <StyleControlButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </StyledBlockControls>
  );
};

export default BlockStyleControls;
