// Import styled
import styled from "styled-components";

// Import bootstrap
import Popover from "react-bootstrap/Popover";

export const DraftEditorContainer = styled.div`
  background: ${({ theme }) => theme.background.primary};
  border: 1px solid #ddd;
  font-size: 14px;
  border-radius: 4px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.button.muted};
  width: 100%;
  height: 100%;
  padding: 5px;
  border-radius: 4px;
`;

export const RichEditorEditor = styled.div`
  cursor: text;
  font-size: 16px;
  padding: 8px 16px;
  position: relative;
  .public-DraftEditor-content,
  .public-DraftEditorPlaceholder-root {
    margin: 0 -15px -15px;
    padding: 15px;
  }

  .public-DraftEditorPlaceholder-inner {
    color: ${({ theme }) => theme.color.muted};
    position: absolute;
    top: 35px;
  }

  .public-DraftEditor-content {
    min-height: 100px;
  }

  .RichEditor-blockquote {
    border-left: 5px solid #eee;
    color: #666;
    font-style: italic;
    margin: 16px 0;
    padding: 10px 20px;
  }

  .public-DraftStyleDefault-pre {
    background-color: rgba(0, 0, 0, 0.05);
    font-size: 16px;
    padding: 20px;
  }
`;

export const Separator = styled.span`
  display: inline-block;
  border-right: 1px solid ${({ theme }) => theme.lineColor.primary};
  box-sizing: border-box;
  height: 14px;
  margin: 0 6px;
  width: 1px;
`;

export const StyledPopoverBody = styled(Popover.Body)`
  padding: 10px;
  background-color: ${({ theme }) => theme.background.primary};

  a {
    color: ${({ theme }) => theme.color.link};
    text-decoration: none;
  }
  button {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme.background.primary};
    color: ${({ theme }) => theme.color.link};
  }
`;

export const StyledPopover = styled(Popover)`
  color: ${({ theme }) => theme.color.link};
  box-shadow: 0 0 3px ${({ theme }) => theme.lineColor.primary};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.color.link};
`;

