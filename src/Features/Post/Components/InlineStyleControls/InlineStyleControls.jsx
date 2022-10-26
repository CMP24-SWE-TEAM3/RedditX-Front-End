// Import components
import StyleControlButton from "../StyleControlButton/StyleControlButton";

// Import icons
import { ImBold, ImSuperscript2 } from "react-icons/im";
import { IoCodeSlash } from "react-icons/io5";
import { GoItalic } from "react-icons/go";
import { BsTypeStrikethrough, BsExclamationDiamond } from "react-icons/bs";
import { AiOutlineUnderline } from "react-icons/ai";
import { StyledInlineControls } from "./InlineStyleControls.styled";

var INLINE_STYLES = [
  { label: "Bold", style: "BOLD", icon: <ImBold size={20}/> },
  { label: "Italic", style: "ITALIC", icon: <GoItalic size={20}/> },
  { label: "Underline", style: "UNDERLINE", icon: <AiOutlineUnderline size={20}/> },
  { label: "Strikethrough", style: "STRIKETHROUGH", icon: <BsTypeStrikethrough size={20}/>,},
  { label: "Code", style: "CODE", icon: <IoCodeSlash size={20}/> },
  { label: "Superscript", style: "SUPERSCRIPT", icon: <ImSuperscript2 size={20}/> },
  { label: "Spoiler", style: "SPOILER", icon: <BsExclamationDiamond size={20}/> },
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <StyledInlineControls>
      {INLINE_STYLES.map((type) => (
        <StyleControlButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
          icon={type.icon}
        />
      ))}
    </StyledInlineControls>
  );
};

export default InlineStyleControls;
