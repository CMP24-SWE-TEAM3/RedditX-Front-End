import { useState } from "react";
// Import components
import LayoutHeader from "Features/Moderator/Layouts/LayoutHeader/LayoutHeader";
import LayoutTabs from "Features/Moderator/Layouts/LayoutTabs/LayoutTabs";
import useDocumentTitle from "Hooks/useDocumentTitle";
import InviteModeratorsModal from "Features/Moderator/Layouts/InviteModeratorsModal/InviteModeratorsModal";
import ApproveUserModal from "Features/Moderator/Layouts/ApproveUserModal/ApproveUserModal";
import MuteUserModal from "Features/Moderator/Layouts/MuteUserModal/MuteUserModal";
import BanUserModal from "Features/Moderator/Layouts/BanUserModal/BanUserModal";
import { Route, Routes, useParams } from "react-router-dom";

const Moderator = () => {
  const { subredditId } = useParams();

  const [modalShowInviteModerator, setModalShowInviteModerator] =
    useState(false);
  const [modalShowApproveUser, setModalShowApproveUser] = useState(false);
  const [modalShowMuteUser, setModalShowMuteUser] = useState(false);
  const [modalShowBaneUser, setModalShowBaneUser] = useState(false);

  useDocumentTitle(subredditId);
  return (
    <>
      <LayoutHeader />
      <LayoutTabs
        setModalShowInviteModerator={setModalShowInviteModerator}
        setModalShowApproveUser={setModalShowApproveUser}
        setModalShowMuteUser={setModalShowMuteUser}
        setModalShowBaneUser={setModalShowBaneUser}
      />

      <InviteModeratorsModal
        show={modalShowInviteModerator}
        setModalShowInviteModerator={setModalShowInviteModerator}
        onHide={() => setModalShowInviteModerator(false)}
      />
      <ApproveUserModal
        show={modalShowApproveUser}
        onHide={() => setModalShowApproveUser(false)}
      />
      <MuteUserModal
        show={modalShowMuteUser}
        onHide={() => setModalShowMuteUser(false)}
      />
      <BanUserModal
        show={modalShowBaneUser}
        onHide={() => setModalShowBaneUser(false)}
        setModalShowBaneUser={setModalShowBaneUser}
      />
    </>
  );
};

export default Moderator;
