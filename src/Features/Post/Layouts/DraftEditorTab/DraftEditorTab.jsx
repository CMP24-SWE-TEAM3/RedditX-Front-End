// Import components
import DraftEditorForm from "Features/Post/Components/DraftEditorForm/DraftEditorForm";

// Import styled components
import { DraftEditorTabContainer } from "./DraftEditorTab.styled";

const DraftEditorTab = () => {
  return (
    <DraftEditorTabContainer>
      <DraftEditorForm />
    </DraftEditorTabContainer>
  );
};

export default DraftEditorTab;
