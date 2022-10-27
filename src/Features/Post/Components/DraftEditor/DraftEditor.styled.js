import styled from "styled-components";

export const DraftEditorContainer = styled.div`
  background: ${({ theme }) => theme.background.primary};
  border: 1px solid #ddd;
  font-size: 14px;
  border-radius: 4px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
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
