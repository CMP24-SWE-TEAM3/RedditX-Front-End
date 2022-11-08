// Import components
import DraftEditorForm from "Features/Post/Components/DraftEditorForm/DraftEditorForm";

// Import styled components
import { DraftEditorTabContainer } from "./DraftEditorTab.styled";

/**
 * Draft Editor Tab component (Layout) (The tab that contains the draft editor in create post page)
 * @param {Function} submitPost - Function to submit the post
 * @returns {React.Component} Draft Editor Tab component (The tab that contains the draft editor in create post page)
 */
const DraftEditorTab = ({ submitPost }) => {
  return (
    <DraftEditorTabContainer>
      <DraftEditorForm submitPost={submitPost} />
    </DraftEditorTabContainer>
  );
};

export default DraftEditorTab;
