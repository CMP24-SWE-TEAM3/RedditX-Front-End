import UserNav from "Features/User/Components/UserNav/UserNav";
import { Routes, Route } from "react-router-dom";
import Overview from "Features/User/Layouts/Overview/Overview";
import { Container, InnerContainer } from "./User.styled";
import UserPosts from "Features/User/Layouts/UserPosts/UserPosts";
import UserSideBar from "Features/User/Components/UserSideBar/UserSideBar";
import UserComments from "Features/User/Layouts/UserComments/UserComments";
import UserHistory from "Features/User/Layouts/UserHistory/UserHistory";
import UserSaved from "Features/User/Layouts/UserSaved/UserSaved";
import UserHidden from "Features/User/Layouts/UserHidden/UserHidden";
import UserUpVoted from "Features/User/Layouts/UserUpVoted/UserUpVoted";
import UserDownVoted from "Features/User/Layouts/UserDownVoted/UserDownVoted";

const User = () => {
  return (
    <Container>
      <UserNav />
      <InnerContainer>
        <Routes>
          <Route path="" element={<Overview />} exact />
          <Route path="submitted" element={<UserPosts />} />
          <Route path="comments" element={<UserComments />} />
          <Route path="history" element={<UserHistory />} />
          <Route path="saved" element={<UserSaved />} />
          <Route path="hidden" element={<UserHidden />} />
          <Route path="upvoted" element={<UserUpVoted />} />
          <Route path="downvoted" element={<UserDownVoted />} />
        </Routes>
        <UserSideBar />
      </InnerContainer>
    </Container>
  );
};

export default User;
