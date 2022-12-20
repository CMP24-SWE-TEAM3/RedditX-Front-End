import UserNav from "Features/User/Components/UserNav/UserNav";
import { Routes, Route, useParams } from "react-router-dom";
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
import SetUser from "Features/User/Components/SetUser/SetUser";
import { IsMeProvider } from "Features/User/Contexts/IsMeProvider";
import { UserAboutProvider } from "Features/User/Contexts/UserAboutProvider";
import { UserIDProvider } from "Features/User/Contexts/UserIDProvider";
import { FollowersProvider } from "Features/User/Contexts/FollowersProvider";
import { useAuth } from "Features/Authentication/Contexts/Authentication";
import { useEffect, useState } from "react";
import useDocumentTitle from "Hooks/useDocumentTitle";
import Followers from "Features/User/Layouts/Followers/Followers";
import { FollowingProvider } from "Features/User/Contexts/FollowingProvider";

const User = () => {
  const [me, setMe] = useState(false);
  const { userId } = useParams();
  const auth = useAuth();

  useDocumentTitle(userId.substring(3));

  useEffect(() => {
    if (auth && userId) {
      setMe(auth.getUserName() === userId ? true : false);
    }
  }, [auth, userId]);

  return (
    <IsMeProvider>
      <UserIDProvider>
        <UserAboutProvider>
          <FollowersProvider>
            <FollowingProvider>
              <SetUser userId={userId}>
                <Container>
                  <UserNav />
                  <InnerContainer>
                    <Routes>
                      <Route path="" element={<Overview />} exact />
                      <Route path="submitted" element={<UserPosts />} />
                      <Route path="comments" element={<UserComments />} />
                      {me && (
                        <>
                          <Route path="history" element={<UserHistory />} />
                          <Route path="saved" element={<UserSaved />} />
                          <Route path="hidden" element={<UserHidden />} />
                          <Route path="upvoted" element={<UserUpVoted />} />
                          <Route path="downvoted" element={<UserDownVoted />} />
                          <Route path="followers" element={<Followers />} />
                        </>
                      )}
                    </Routes>
                    <UserSideBar />
                  </InnerContainer>
                </Container>
              </SetUser>
            </FollowingProvider>
          </FollowersProvider>
        </UserAboutProvider>
      </UserIDProvider>
    </IsMeProvider>
  );
};

export default User;
