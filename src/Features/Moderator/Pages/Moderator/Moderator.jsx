import { useState } from "react";
// Import components
import LayoutHeader from "Features/Moderator/Layouts/LayoutHeader/LayoutHeader";
import LayoutTabs from "Features/Moderator/Layouts/LayoutTabs/LayoutTabs";
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
