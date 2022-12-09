import UserNav from "Features/User/Components/UserNav/UserNav";
import { Routes, Route } from "react-router-dom";
import Overview from "Features/User/Layouts/Overview/Overview";
import { Container, InnerContainer } from "./User.styled";
import UserPosts from "Features/User/Layouts/UserPosts/UserPosts";
import UserSideBar from "Features/User/Components/UserSideBar/UserSideBar";

const User = () => {
  return (
    <Container>
      <UserNav />
      <InnerContainer>
        <Routes>
          <Route path="" element={<Overview />} exact />
          <Route path="submitted" element={<UserPosts />} />
        </Routes>
        <UserSideBar />
      </InnerContainer>
    </Container>
  );
};

export default User;
