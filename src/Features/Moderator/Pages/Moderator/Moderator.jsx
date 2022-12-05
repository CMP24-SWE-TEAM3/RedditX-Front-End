// Import components
import LayoutHeader from "Features/Moderator/Components/LayoutHeader/LayoutHeader";
import LayoutTabs from "Features/Moderator/Components/LayoutTabs/LayoutTabs";
import useDocumentTitle from "Hooks/useDocumentTitle";
import { Route, Routes, useParams } from "react-router-dom";

const Moderator = () => {
  const { subredditId } = useParams();
  useDocumentTitle(subredditId);
  return (
    <>
      <LayoutHeader />
      <LayoutTabs />

    </>
  );
};

export default Moderator;
