import {
  PageContainer,
  Photo,
  LogInContainer,
} from "./ForgetUserNamePage.styled";
import ForgetUserName from "Features/Authentication/Layouts/ForgetUserName/ForgetUserName";
import useDocumentTitle from "Hooks/useDocumentTitle";

/**
 * ForgetUserNamePage component (The page of forget userName)
 * @returns {React.Component}  ForgetUserNamePage component (The page of forget userName)
 */
const ForgetUserNamePage = () => {
  // Change document title
  useDocumentTitle("reddit.com: Recover your username");
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
