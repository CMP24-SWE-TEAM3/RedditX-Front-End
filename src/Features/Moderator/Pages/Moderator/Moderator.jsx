import { useState } from "react";
// Import components
import LayoutHeader from "Features/Moderator/Layouts/LayoutHeader/LayoutHeader";
import LayoutTabs from "Features/Moderator/Layouts/LayoutTabs/LayoutTabs";
import useDocumentTitle from "Hooks/useDocumentTitle";
import InviteModeratorsModal from "Features/Moderator/Layouts/InviteModeratorsModal/InviteModeratorsModal";
import ApproveUserModal from "Features/Moderator/Layouts/ApproveUserModal/ApproveUserModal";
import { Route, Routes, useParams } from "react-router-dom";

const Moderator = () => {
  const { subredditId } = useParams();

  const [modalShowInviteModerator, setModalShowInviteModerator] = useState(false);
  const [modalShowApproveUser, setModalShowApproveUser] = useState(false);

  useDocumentTitle(subredditId);
  return (
    <>
      <LayoutHeader />
      <LayoutTabs setModalShowSignUp={setModalShowInviteModerator} setModalShowApproveUser={setModalShowApproveUser}/>

      <InviteModeratorsModal
        show={modalShowInviteModerator}
        onHide={() => setModalShowInviteModerator(false)}
        
      />
      <ApproveUserModal
        show={modalShowApproveUser}
        onHide={() => setModalShowApproveUser(false)}
      />
    </>
  );
};

export default Moderator;
