import StyleControlButton from "../StyleControlButton/StyleControlButton";

// Import icons
import { MdOutlineTextFields } from "react-icons/md";
import { BsListUl } from "react-icons/bs";
import { AiOutlineOrderedList } from "react-icons/ai";
import { TfiQuoteRight } from "react-icons/tfi";
import { HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { StyledBlockControls } from "./BlockStyleControls.styled";
const BLOCK_TYPES = [
  {
    label: "H4",
    style: "header-four",
    icon: <MdOutlineTextFields size={20} />,
  },

  { label: "UL", style: "unordered-list-item", icon: <BsListUl size={20} /> },
  {
    label: "OL",
    style: "ordered-list-item",
    icon: <AiOutlineOrderedList size={20} />,
  },
  {
    label: "Blockquote",
    style: "blockquote",
    icon: <TfiQuoteRight size={20} />,
  },
  {
    label: "Code Block",
    style: "code-block",
    icon: <HiOutlineCodeBracketSquare size={20} />,
  },
];

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
