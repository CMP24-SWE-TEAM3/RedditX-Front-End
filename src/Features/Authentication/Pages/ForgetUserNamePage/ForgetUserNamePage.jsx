import { PageContainer, Photo, LogInContainer } from "./ForgetUserNamePage.styled";
import ForgetUserName from "Features/Authentication/Layouts/ForgetUserName/ForgetUserName";


/**
 * ForgetUserNamePage component (The page of forget userName)
 * @returns {React.Component}  ForgetUserNamePage component (The page of forget userName)
 */
const ForgetUserNamePage = () => {
  return (
    <PageContainer>
      <Photo></Photo>

      <LogInContainer>
      <ForgetUserName></ForgetUserName>
      </LogInContainer>
    </PageContainer>
  );
};

export default ForgetUserNamePage;
