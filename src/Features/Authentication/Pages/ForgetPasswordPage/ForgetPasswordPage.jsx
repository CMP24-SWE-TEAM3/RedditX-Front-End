import {
  PageContainer,
  Photo,
  LogInContainer,
} from "./ForgetPasswordPage.styled";
import ForgetPassword from "Features/Authentication/Layouts/ForgetPassword/ForgetPassword";
import useDocumentTitle from "Hooks/useDocumentTitle";

/**
 * ForgetPasswordPage component (The page of forget password)
 * @returns {React.Component}  ForgetPasswordPage component (The page of forget password)
 */
const ForgetPasswordPage = () => {
  // Change document title
  useDocumentTitle("reddit.com: Reset your password");
  return (
    <PageContainer>
      <Photo></Photo>

      <LogInContainer>
        <ForgetPassword></ForgetPassword>
      </LogInContainer>
    </PageContainer>
  );
};

export default ForgetPasswordPage;
